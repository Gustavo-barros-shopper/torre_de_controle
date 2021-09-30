import CheckoutApi from './CheckoutApi';
import {store as secureLocalStorage} from './SecureLS';

function CheckoutClient() {
    this.user = null
    this.claims = null
    this.authStateSubscribers = []
    this.store = secureLocalStorage

    setTimeout(() => {
        console.info(`Checkout client initialized.`)
        this.dispatchStateChange('initialized')
	}, 1000)
}

CheckoutClient.prototype.dispatchStateChange = function(state) {
	console.info(`STATE CHANGE FOR BYPASS LOGIN: ${state}`)
	for (const fn of this.authStateSubscribers) {
		fn(state)
	}
}

CheckoutClient.prototype.onAuthStateChanged = function(watcher) {
	this.authStateSubscribers = [...this.authStateSubscribers, watcher]
}

CheckoutClient.prototype.handleLogin = async function (barcode) {
    let options = {
        headers : {
            "user_barcode" : barcode
        }
    }

    let {data} = await CheckoutApi.post('/login', null, options);

    this.store.set('shppr:checkout:u', btoa(JSON.stringify({
        badge : data.badge,
        displayName : data.name
    })));
    this.store.set('shppr:checkout:c', btoa(JSON.stringify(data.claims)));
    this.dispatchStateChange("logged_in");
}

CheckoutClient.prototype.handleLogout = function () {
    this.store.clear();
    this.dispatchStateChange("logged_out");
}

CheckoutClient.prototype.getClaims = function (claim = null){
    const claims = JSON.parse(atob(this.store.get('shppr:checkout:c')));

    if (claim) {
        return claims.find(c => c === claim)
    }

    return claims
}

CheckoutClient.prototype.checkClaim = async function (claim){
    if(!claim) return false

    const hasPermission = this.getClaims(claim) ? true : false
    return hasPermission
}

CheckoutClient.prototype.getUser = function () {
    const user = this.store.get('shppr:checkout:u');

    if(!user) return
    return JSON.parse(atob(user)) 
}

CheckoutClient.prototype.lock = function() {
	this.dispatchStateChange('locked')
}

CheckoutClient.prototype.unlock = async function() {
	this.dispatchStateChange('unlocked')
    return true
}

export default CheckoutClient

export const checkLoginByPass = async function () {
    let {data} = await CheckoutApi.get('/check-bypass');

    return data
}

export const setLoginMode  = function (loginType = '') {
    if (!loginType) return
    secureLocalStorage.set('shppr:checkout:tl', btoa(loginType))
}
  
export const checkLoginMode = function () {
    return atob(secureLocalStorage.get('shppr:checkout:tl'))
}