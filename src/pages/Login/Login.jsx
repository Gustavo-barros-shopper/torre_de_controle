import React from 'react';
import GoogleLoginPage from '../GoogleLoginPage';
import LoginBarcode from '../../components/customized/LoginBarcode';
import { ssoClient } from '../../services/SigninSetup'
import { toast } from 'react-toastify';

function Login({setLoader, bypassActive}) {
    async function onLoginComplete(authResponse) {
        setLoader(true)
        await ssoClient.login({ token: authResponse.id_token })
      }
    
    async function onLoginCompleteWithEmail(email, password) {
        setLoader(true)

        try {
            await ssoClient.login({ 
            email: email,
            password: password 
            })
        }
        catch(e) {
            console.log(e);
            toast.error("E-mail ou senha inválidos !");
            setLoader(false);
        }
    }

    return (
        <>
            {
                bypassActive ? 
                    <LoginBarcode /> 
                :   <GoogleLoginPage
                        onLoginComplete={onLoginComplete}
                        onLoginFail={(e) => console.error(e)}
                        emailEnabled={true}
                        onEmailLoginComplete={onLoginCompleteWithEmail}

                    />
            }
        </>
    )
}

export default Login
