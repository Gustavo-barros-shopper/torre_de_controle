import React, { Fragment } from 'react';
import man from '../../../assets/images/dashboard/user.png';
import { User, Mail, Lock, Settings, LogOut } from 'react-feather';


const UserMenu = ({user, lock, logout}) => {
    return (
        <Fragment>
            <li className="onhover-dropdown">
                <div className="media align-items-center">
                    <img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src={user ? user.photoURL : man} alt="header-user" />
                </div>
                <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                    <li><a href="#javascript" onClick={lock}><Lock />Bloquear</a></li>
                    <li><a href="#javascript" onClick={logout}><LogOut /> Sair</a></li>
                </ul>
            </li>
        </Fragment>
    );
};


export default UserMenu;