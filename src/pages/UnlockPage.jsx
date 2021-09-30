import React, { Fragment } from 'react';
import {FormattedMessage} from 'react-intl';
import logo from '../assets/images/logo/kdabra-light.svg';
import {ToastContainer} from "react-toastify";

const UnlockPage = ({onUnlock}) => {

    return (
        <Fragment>
            <div>
                <div className="page-wrapper">
                    <div className="auth-bg bg-color6">
                        <div className="authentication-box">
                            <div className="text-center"><img src={logo} alt="" /></div>
                            <div className="card mt-4">
                                <div className="card-body">
                                    <div className="text-center">
                                        <h4>
                                            <FormattedMessage id="general.labels.screen_locked"/>
                                        </h4>
                                        <h6>
                                            <FormattedMessage id="general.labels.screen_locked_tip"/>
                                        </h6>
                                    </div>
                                    <button className="btn btn-primary btn-block" type="button" onClick={onUnlock}>
                                        <FormattedMessage id="general.labels.unlock_screen"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </Fragment>
    );
};

export default UnlockPage;