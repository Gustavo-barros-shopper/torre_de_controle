import CheckoutApi from './CheckoutApi'
import { store } from './SecureLS'
import { ssoClient, checkoutClient } from './SigninSetup'

export const checkLoginByPass = async function () {
    let {data} = await CheckoutApi.get('/check-bypass');

    return data
}

export const setLoginMode  = function (loginType = '') {
    if (!loginType) return
    store.set('shppr:checkout:tl', btoa(loginType))
}
  
export const checkLoginMode = function () {
    return atob(store.get('shppr:checkout:tl'))
}

export const handleLoginMode = function (newLoginMode) {    
    let actualLoginMode = checkLoginMode()
    // let actualLoginMode = "google"
    if(actualLoginMode != newLoginMode) {
        if (newLoginMode === "google") {
            checkoutClient.handleLogout();
        }
        else if (newLoginMode === "bypass") {
            ssoClient.logout();
        }
    }
}