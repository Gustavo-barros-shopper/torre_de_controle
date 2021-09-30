const axios = require('axios')
const OTPAuth = require('otpauth')
const SecureLS = require('secure-ls')
const AUTH_API_URL = process.env.REACT_APP_SSO_API_URL
const NAMESPACE = process.env.REACT_APP_SSO_NAMESPACE
const SECRET = process.env.REACT_APP_SSO_SECRET
const STORAGE_SECRET = process.env.REACT_APP_SSO_STORAGE_SECRET


function SSOClient(config) {
	let {namespace, secret, storageSecret, url} = config ? config : {}
	if (!namespace) namespace = NAMESPACE
	if (!secret) secret = SECRET
    if (!storageSecret) storageSecret = STORAGE_SECRET
	if (!url) url = AUTH_API_URL

	this.namespace = namespace
	this.secret = secret
	this.url = url
    this.token = null
    this.rToken = null
    this.user = null
    this.ls = new SecureLS({
        isCompression: true,
        encodingType: 'aes',
        encryptionSecret: btoa(`LS-${secret}-${storageSecret}`)
    })

	this.x = axios.create({
		baseURL: this.url,
		headers: {
			common: {
				'X-API-SECRET': this.secret,
				'X-API-NAMESPACE': this.namespace
			}
		}
	})
	this.store = {
		get: (key) => {
			return this.ls.get(`${key}[${this.namespace}]`)
		},
		set: (key, value) => {
			this.ls.set(`${key}[${this.namespace}]`, value)
		},
		remove: (key) => {
			this.ls.remove(`${key}[${this.namespace}]`)
		}
	}
	this.authStateSubscribers = []
	setTimeout(() => {
		this.store.remove('shppr:sso:u')
		this.getUser()
			.then(user => {
				console.info(`SSO client for namespace '${this.namespace}' initialized.`)
				this.dispatchStateChange('initialized')
			})
	}, 1000)
}

SSOClient.prototype.initializeWithRefreshToken = async function(refreshToken) {
	if (!refreshToken) throw new Error('No token')
	await this.login({refreshToken})
	console.info(`SSO client for namespace '${this.namespace}' initialized.`)
	this.dispatchStateChange('initialized')
}

SSOClient.prototype.dispatchStateChange = function(state) {
	console.info(`STATE CHANGE FOR ${this.namespace}: ${state}`)
	for (const fn of this.authStateSubscribers) {
		fn(state)
	}
}

SSOClient.prototype.getRefreshToken = function() {
    if (!this.rToken) {
        const rToken = this.store.get('shppr:sso:rtk')
        if (!rToken) return null
        this.rToken = JSON.parse(rToken)
    }
    if (this.rToken.e * 1000 < Date.now()) return null
	return this.rToken.t
}

SSOClient.prototype.getToken = async function() {
    if (!this.token) {
        const tokenData = this.store.get('shppr:sso:atk')
        if (tokenData) this.token = JSON.parse(tokenData)
    }

    if (!this.token || this.token.e * 1000 < Date.now()) {
        const refreshed = await this.refreshToken()
        if (refreshed) {
            return this.getToken()
        }
        return null
    }
    return this.token.t
}

SSOClient.prototype.getUser = async function(uid) {
	if (!uid) {
	    if (!this.user) {
            const userHash = this.store.get('shppr:sso:u')
            if (userHash) {
                return JSON.parse(atob(userHash))
            } else {
                const token = await this.getToken()
                if (!token) {
                    this.logout()
                    return null
                }
                try {
                    const response = await this.x.post('/auth/profile', {token})
                    const user = response.data.data
                    this.store.set('shppr:sso:u', btoa(JSON.stringify(user)))
                    this.user = user
                    return user
                } catch (e) {
                    console.trace(e)
                    if (e.response.status === 401) {
                        const renovation = await this.refreshToken()
                        if (renovation) return this.getUser()
                        this.logout()
                    }
                    return null
                }
            }
        }
	    return this.user
	} else {
		const userHash = this.store.get(`shppr:sso:p:${uid}`)
		if (userHash) {
			return JSON.parse(atob(userHash))
		} else {
			const token = await this.getToken()
			if (!token) {
				this.logout()
				return null
			}
			try {
				const response = await this.x.post('/auth/profile', {uid})
				const user = response.data.data
				this.store.set(`shppr:sso:p:${uid}`, btoa(JSON.stringify(user)))
				return user
			} catch (e) {
				console.trace(e)
				if (e.response.status === 401) {
					const renovation = await this.refreshToken()
					if (renovation) return this.getUser(uid)
					this.logout()
				}
				return null
			}
		}
	}
}

SSOClient.prototype.refreshToken = async function() {
	const rToken = this.getRefreshToken()
	if (!rToken) return null
	try {
		await this.login({refreshToken: rToken})
		return true
	} catch (e) {
		this.logout()
		console.trace(e)
		return false
	}
}

SSOClient.prototype.login = async function(user) {
	const response = await this.x.post('/auth', user)
	const tokenData = response.data.data
    const tokenLife = 60 * 60  // 1 hora
    const refreshTokenLife = 30 * 24 * 60 * 60  // 30 dias
    const creation = tokenData.creation
    this.token = {
        t: tokenData.token,
        e: creation + tokenLife
    }
    this.rToken = {
        t: tokenData.refreshToken,
        e: creation + refreshTokenLife
    }
    this.user = tokenData.userProfile
	this.store.set('shppr:sso:atk', JSON.stringify(this.token))
	this.store.set('shppr:sso:rtk', JSON.stringify(this.rToken))
	this.store.set('shppr:sso:u', btoa(JSON.stringify(this.user)))
	this.dispatchStateChange('logged_in')
	return tokenData
}

SSOClient.prototype.logout = function() {
	this.store.remove('shppr:sso:atk')
	this.store.remove('shppr:sso:rtk')
	this.store.remove('shppr:sso:u')
	this.dispatchStateChange('logged_out')
}

SSOClient.prototype.lock = function() {
	this.store.remove('shppr:sso:atk')
	this.store.remove('shppr:sso:u')
	this.dispatchStateChange('locked')
}

SSOClient.prototype.unlock = async function() {
	const result = await this.refreshToken()
	if (result) this.dispatchStateChange('unlocked')
	return result
}

SSOClient.prototype.checkClaim = async function(claim, force) {
	if (!force) {
		let claimCache = this.store.get(`shppr:sso:cck:${claim}`)
		if (claimCache) {
			claimCache = JSON.parse(atob(claimCache))
			const now = Date.now()
			if (now < claimCache.exp) {
				return claimCache.authorization
			} else {
				this.store.remove(`shppr:sso:cck:${claim}`)
			}
		}
	}
	const token = await this.getToken()
	if (!token) {
		this.logout()
		return false
	}
	try {
		const response = await this.x.post('/auth/check', {token, claim})
		const authorization = response.data.data
		this.store.set(`shppr:sso:cck:${claim}`,
			btoa(JSON.stringify({
				authorization,
				exp: Date.now() + (60 * 60 * 1000)  // 1 hora de cache
			}))
		)
		return authorization
	} catch (e) {
		console.trace(e)
		if (e.response.status === 401) {
			const renovation = await this.refreshToken()
			if (renovation) {
				const response = await this.x.post('/auth/check', {token, claim})
				const authorization = response.data.data
				this.store.set(`shppr:sso:cck:${claim}`,
					btoa(JSON.stringify({
						authorization,
						exp: Date.now() + (60 * 60 * 1000)  // 1 hora de cache
					}))
				)
				return authorization
			}
			this.logout()
		}
		return false
	}
}

SSOClient.prototype.delegateToken = async function(namespace) {
    const token = await this.getToken()
	const response = await this.x.post('/auth/delegate', {
		token,
		namespace
	})
	return response.data.data
}

SSOClient.prototype.generateTotp = async function() {
    const period = 30
    const digits = 6
	const user = await this.getUser()
	if (!user) return null
	const secret = user.totpcode
	if (!secret) return null
    const totp = new OTPAuth.TOTP({
        digits,
        period,
        secret
    })
    const code = totp.generate()
    const currentSeconds = Math.round(new Date().getTime() / 1000.0)
    const updateTime = period - (currentSeconds % period)
    const progress = (updateTime / period) * 100
    return {
        code,
        updateTime,
        progress
    }
}

SSOClient.prototype.checkTotp = async function(code) {
	const token = await this.getToken()
	if (!token) {
		this.logout()
		return false
	}
	try {
		const response = await this.x.post('/auth/totp', {token, code})
		return response.data.data
	} catch (e) {
		console.trace(e)
		if (e.response.status === 401) {
			const renovation = await this.refreshToken()
			if (renovation) {
				const response = await this.x.post('/auth/totp', {token, code})
				return response.data.data
			}
			this.logout()
		}
		return false
	}
}

SSOClient.prototype.onAuthStateChanged = function(watcher) {
	this.authStateSubscribers = [...this.authStateSubscribers, watcher]
}


export default SSOClient
