import React, { useState, useEffect } from 'react';
import Header from './common/header-component/header';
import Sidebar from './common/sidebar-component/sidebar';
import RightSidebar from './common/right-sidebar';
import Footer from './common/footer';
import ThemeCustomizer from './common/theme-customizer';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './layout/Loader';

import {
    AlertCircle,
    Download, File, Headphones, Home,
    Search, ShoppingBag, Layers
} from 'react-feather';

const badgeData = [
    {path:'home', text:'5'},
    {path:'ecommerce', text:'new'},
    {path:'support', text:'10'},
]

const BadgeHome = () => {
    const idx = badgeData.findIndex(badge => badge.path == 'home')
    return <span className="badge badge-light badge-pill pull-right ml-auto">{badgeData[idx].text}</span>
}

const BadgeEcommerce = () => {
    const idx = badgeData.findIndex(badge => badge.path == 'ecommerce')
    return <span className="badge badge-light badge-pill pull-right ml-auto">{badgeData[idx].text}</span>
}

const BadgeSupport = () => {
    const idx = badgeData.findIndex(badge => badge.path == 'support')
    return <span className="badge badge-light badge-pill pull-right ml-auto">{badgeData[idx].text}</span>
}

function dummySearch(term) {
    const items = [];
    for (let i = 0; i < term.length; i += 1) {
        items.push({
            icon: Search,
            path: '/',
            title: `Resultado ${i + 1} para ${term}`
        });
    }
    return items;
}

const notifications = [
    {
        unread: true,
        content: <div className="media">
            <div className="media-body">
                <h6 className="mt-0"><span><ShoppingBag/></span>Your order ready for Ship..!</h6>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
            </div>
        </div>
    },
    {
        unread: true,
        content: <div className="media">
            <div className="media-body">
                <h6 className="mt-0 txt-success"><span><Download/></span>Download Complete</h6>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
            </div>
        </div>
    },
    {
        unread: false,
        content: <div className="media">
            <div className="media-body">
                <h6 className="mt-0 txt-danger"><span><AlertCircle/></span>250 MB trash files</h6>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
            </div>
        </div>
    }
];

const menuItems = [
    {
        title: 'HOME', icon: Home, type: 'sub', badgeType: 'primary', badge: BadgeHome, active: false, children: [
            {path: '/dashboard/default', title: 'Padrão', type: 'link'},
            {path: '/dashboard/ecommerce', title: 'E-Commerce', type: 'link', badge: BadgeEcommerce},
            {path: '/dashboard/university', title: 'Universidade', type: 'link'},
            {path: '/dashboard/crypto', title: 'Crypto', type: 'link'},
            {path: '/dashboard/project', title: 'Projeto', type: 'link'}
        ]
    },
    {
        title: 'Components', icon: Layers, type: 'sub', badgeType: 'primary', active: false, children: [
            {path: '/customized/Card', title: 'Card', type: 'link'},
            {path: '/customized/Pagination', title: 'Pagination', type: 'link'},
            {path: '/customized/EmojisPicker', title: 'EmojisPicker', type: 'link'},
            {path: '/customized/BusyOverlay', title: 'BusyOverlay', type: 'link'},
            {path: '/customized/Confirmation', title: 'Confirmation', type: 'link'},
            {path: '/customized/QuickView', title: 'QuickView', type: 'link'},
            {path: '/customized/Table', title: 'Table', type: 'link'},
        ]
    },
    {
        title: 'Support Ticket', icon: Headphones, type: 'link', path: '/support-ticket/supportTicket', badge: BadgeSupport, active: false
    },
    {
        path: '/sample/samplepage', title: 'Exemplo', icon: File, type: 'link', active: false
    }
];

const user = {
    photoURL: 'https://avatarfiles.alphacoders.com/214/thumb-214619.jpg',
    displayName: 'Baby Yoda'
};

function lock() {
    console.log('LOCK');
}

function logout() {
    console.log('LOGOUT');
}

const AppLayout = ({children}) => {
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(function() {
            setLoader(false)
        }, 5000)
    }, [])

    return (
        <div>
            <Loader show={loader}/>
            <div className="page-wrapper">
                <div className="page-body-wrapper">
                    <Header
                        showSearchBox={true}
                        searchFunction={dummySearch}
                        menuItems={menuItems}
                        showMaximize={true}
                        showNotifications={false}
                        showChat={false}
                        notifications={notifications}
                        showUserMenu={true}
                        user={user}
                        lock={lock}
                        logout={logout}
                        useMiniSidebar={true}/>

                    <Sidebar
                        menuItems={menuItems}
                        user={user}
                        lock={lock}
                        logout={logout}
                    />
                    <RightSidebar/>
                    <div className="page-body">
                        {children}
                    </div>
                    <Footer/>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default AppLayout;
