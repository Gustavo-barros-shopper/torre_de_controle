import React,{Fragment, useState} from 'react';
import { ShoppingBag, Download, AlertCircle } from 'react-feather';

const Notification = ({notifications}) => {
    return (
        <Fragment>
            <div>
                {notifications &&
                <ul className="notification-dropdown onhover-show-div p-0">
                    <li>Notificações <span
                        className="badge badge-pill badge-primary pull-right">{notifications.length}</span></li>
                    {notifications.map(notification => <li>{ notification.content }</li>)}
                </ul>
                }
            </div>
        </Fragment>
    );
};

export default Notification;