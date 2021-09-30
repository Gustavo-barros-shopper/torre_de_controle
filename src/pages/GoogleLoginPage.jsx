import React, {Fragment, useState} from 'react'
import logo from '../assets/images/logo/kdabra-light.svg'
import {ToastContainer} from 'react-toastify'
import GoogleLogin from 'react-google-login'

const GoogleLoginPage = ({onLoginComplete, onLoginFail, emailEnabled, onEmailLoginComplete}) => {
	const [loading, setLoading] = useState(false)
	const [emailLogin, setEmailLogin] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const login = googleUser => {
		try {
			onLoginComplete(googleUser.getAuthResponse())
			setLoading(false)
		} catch (e) {
			onLoginFail(e)
		}
	}

	return (
		<Fragment>
			<div>
				<div className="page-wrapper">
					<div className="auth-bg bg-color6">
						<div className="authentication-box">
							<div className="text-center"><img src={logo} alt=""/></div>
							<div className="card mt-4">
								<div className="card-body">
									<div className="text-center">
										<h4>LOGIN CORPORATIVO</h4>
										<h6>Clique no botão abaixo para entrar com a sua conta corporativa</h6>
									</div>
									{!emailLogin
										? <div>
											<GoogleLogin
												onRequest={() => setLoading(true)}
												onSuccess={login}
												onFailure={e => {
													setLoading(false)
													onLoginFail(e)
												}}
												clientId={process.env.REACT_APP_SSO_CLIENT_ID}
												hostedDomain="shopper.com.br"
												cookiePolicy={'single_host_origin'}
												render={(props) => (
													<button className="btn btn-primary btn-block" type="button" {...props}>
														{loading
															? <i className="fa fa-spin fa-spinner"/>
															: <><i className="fa fa-google"/>&nbsp;Shopper.com.br</>
														}
													</button>
												)}
											/>
											{emailEnabled
												? <button className="btn btn-xs btn-block mt-2" type="button" onClick={() => setEmailLogin(true)}>
													Login com e-mail
												</button>
												: null
											}
										</div>
										: <div>
											<div className="form-group">
												<label htmlFor="email">E-mail</label>
												<input type="email" className="form-control" id="email"
															 placeholder="email@exemplo.com.br" value={email}
															 onChange={e => setEmail(e.target.value)}/>
											</div>
											<div className="form-group">
												<label htmlFor="password">Senha</label>
												<input type="password" className="form-control" id="password"
															 placeholder="senha" value={password}
															 onChange={e => setPassword(e.target.value)}/>
											</div>
											<button className="btn btn-primary btn-block" type="button" onClick={()=>onEmailLoginComplete(email, password)}>
												<i className="fa fa-mail"/>&nbsp;Autenticar com e-mail
											</button>
											<button className="btn btn-xs btn-block mt-2" type="button" onClick={() => setEmailLogin(false)}>
													Login com Google
												</button>
										</div>
									}
								</div>
							</div>
						</div>
					</div>
				</div>
				<ToastContainer/>
			</div>
		</Fragment>
	)
}

export default GoogleLoginPage
