import React, { Fragment } from 'react';
import man from '../../../assets/images/dashboard/user.png'
import {Lock, LogOut} from 'react-feather';

const UserPanel = ({user, lock, logout}) => {
    return (
        <Fragment>
            <div className="sidebar-user text-center">
                <div>
                    <img className="align-self-center img-60 rounded-circle lazyloaded" src={user ? user.photoURL : man} alt="sidebar-user" />
                </div>
                <h6 className="mt-3 f-14">
                    {user.displayName}
                </h6>
                <div className="actions">
                    <a href="#javascript" onClick={lock}>
                        <Lock />
                        Bloquear
                    </a>
                    <div>{' | '}</div>
                    <a href="#javascript" onClick={logout}>
                        <LogOut />
                        Sair
                    </a>
                </div>
            </div>
        </Fragment>
    );
};

export default UserPanel;