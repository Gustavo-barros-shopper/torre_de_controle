import React, { useState } from 'react'
import logo from '../../assets/images/logo/kdabra-light.svg'
import {checkoutClient} from '../../services/SigninSetup'
import styled from 'styled-components'
import { Red } from '../../assets/color'

export const ErrorMessage = styled.p`
    margin:0;
    padding:0;
    color: ${Red}
`

function LoginBarcode() {
    const [barcode, setBarcode] = useState('')
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(undefined);

    const handleLogin = () => {
        checkoutClient.handleLogin(barcode)
        .catch(error => {
            const {data} = error?.response

            setError(data.message);
        })
        .catch(() => {
            setError("Ocorreu um erro ao realizar o login");
        })
        .finally(() => setSubmitting(false))
    }

    return (
        <div className="page-wrapper">
            <div className="auth-bg bg-color6">
                <div className="authentication-box">
                    <div className="text-center"><img src={logo} alt=""/></div>
                    <div className="card mt-4">
                        <div className="card-body">
                            <div className="text-center">
                                <h4>LOGIN CORPORATIVO</h4>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Crachá</label>
                                <input type="password" className="form-control" id="password"
                                                placeholder="senha" value={barcode}
                                                onChange={e => setBarcode(e.target.value)}
                                                onKeyPress={async (e) => {(e.key === "Enter" && !submitting) && handleLogin() }}/>
                                <ErrorMessage>{error}</ErrorMessage>
                            </div>
                            <button className="btn btn-primary btn-block" type="button" onClick={() => handleLogin() } disabled={submitting}>
                                <i className="fa fa-mail"/>&nbsp;Autenticar com Crachá
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginBarcode
