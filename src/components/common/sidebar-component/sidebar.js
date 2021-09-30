import React, {Fragment, useState, useEffect} from 'react';
import {ChevronLeft, ChevronRight} from 'react-feather';
import logo from '../../../assets/images/logo/kdabra-light.svg';
import logo_compact from '../../../assets/images/logo/kdabra-compact-light.svg';

import {MENUITEMS as CONSTANT_MENUITEMS} from '../../../constant/menu';
import {Link} from 'react-router-dom';
import {translate} from 'react-switch-lang';
import UserPanel from './userPanel';

const Sidebar = ({t, menuItems, user, lock, logout, showToggler}) => {
    const MENUITEMS = menuItems ? menuItems : CONSTANT_MENUITEMS;
    const [margin, setMargin] = useState(0);
    const [sidebar, setSidebar] = useState(true);
    const [width, setWidth] = useState(0);
    const [hideRightArrow, setHideRightArrow] = useState(false);
    const [hideLeftArrow, setHideLeftArrow] = useState(true);
    const [mainmenu, setMainMenu] = useState(MENUITEMS);

    useEffect(() => {

        window.addEventListener('resize', handleResize);
        handleResize();

        var currentUrl = window.location.pathname;

        mainmenu.filter(items => {
            if (items.path === currentUrl)
                setNavActive(items);
            if (!items.children) return false;
            items.children.filter(subItems => {
                if (subItems.path === currentUrl)
                    setNavActive(subItems);
                if (!subItems.children) return false;
                subItems.children.filter(subSubItems => {
                    if (subSubItems.path === currentUrl)
                        setNavActive(subSubItems);
                });
            });
        });

        return () => {
            window.addEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        console.log('Render Menu')
    })

    const handleResize = () => {
        setWidth(window.innerWidth - 310);
    };

    const setNavActive = (item) => {
        MENUITEMS.filter(menuItem => {
            if (menuItem != item)
                menuItem.active = false;
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true;
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true;
                        submenuItems.active = true;
                    }
                });
            }
        });
        item.active = !item.active;
        setMainMenu({mainmenu: MENUITEMS});

    };

    // Click Toggle menu
    const toggletNavActive = (item) => {
        if (!item.active) {
            MENUITEMS.forEach(a => {
                if (MENUITEMS.includes(item))
                    a.active = false;
                if (!a.children) return false;
                a.children.forEach(b => {
                    if (a.children.includes(item)) {
                        b.active = false;
                    }
                    if (!b.children) return false;
                    b.children.forEach(c => {
                        if (b.children.includes(item)) {
                            c.active = false;
                        }
                    });
                });
            });
        }
        item.active = !item.active;
        setMainMenu({mainmenu: MENUITEMS});
    };

    const scrollToRight = () => {

        const elmnt = document.getElementById('myDIV');
        const menuWidth = elmnt.offsetWidth;
        const temp = menuWidth + margin;
        // Checking condition for remaing margin
        if (temp < menuWidth) {
            setMargin(-temp);
            setHideRightArrow(true);
        } else {
            setMargin(margin => margin += -width);
            setHideLeftArrow(false);
        }

    };

    const toggleMiniSidebar = (e) => {
        e && e.preventDefault();
        const pageMainHeader = document.querySelector('.page-main-header');
        if (pageMainHeader) pageMainHeader.classList.remove('open');
        document.querySelector('.page-sidebar').classList.remove('open');
        if (sidebar) {
            setSidebar(!sidebar);
            document.querySelector('.page-wrapper').classList.add('compact-page');
            document.querySelector('.page-body-wrapper').classList.add('sidebar-hover');
        } else {
            setSidebar(!sidebar);
            document.querySelector('.page-wrapper').classList.remove('compact-page');
            document.querySelector('.page-body-wrapper').classList.remove('sidebar-hover');
        }
    };

    const scrollToLeft = () => {
        // If Margin is reach between screen resolution
        if (margin >= -width) {
            setMargin(0);
            setHideLeftArrow(true);
        } else {
            setMargin(margin => margin += width);
            setHideRightArrow(false);
        }
    };

    return (
        <Fragment>
            <div className="page-sidebar bg-color6">
                <div className="main-header-left d-none d-lg-block">
                    <div className="logo-wrapper compactLogo">
                        <Link to="/">
                            <img className="blur-up lazyloaded" src={logo_compact} alt=""/>
                            <img className="blur-up lazyloaded" src={logo} alt=""/>
                            {showToggler && <div
                                className="toggler"
                                onClick={(e) => toggleMiniSidebar(e)}
                            >
                              {sidebar ? <ChevronLeft/> : <ChevronRight />}
                            </div>}
                        </Link>
                    </div>
                </div>
                {user ? <UserPanel user={user} lock={lock} logout={logout}/> : <></>}
                <div className="sidebar custom-scrollbar">
                    <ul
                        className="sidebar-menu"
                        id="myDIV"
                        style={{'marginLeft': margin + 'px'}}
                    >
                        <li className={`left-arrow ${hideLeftArrow ? 'd-none' : 'hideLeftArrow'}`}
                            onClick={scrollToLeft}><i className="fa fa-angle-left"></i></li>
                        {
                            MENUITEMS.map((menuItem, i) =>
                                <li className={`${menuItem.active ? 'active' : ''}`} key={i}>
                                    {(menuItem.sidebartitle) ?
                                        <div className="sidebar-title">{menuItem.sidebartitle}</div>
                                        : ''}
                                    {(menuItem.type === 'sub') ?
                                        <a className="sidebar-header" href="#javascript"
                                           onClick={() => toggletNavActive(menuItem)}>
                                            <menuItem.icon/>
                                            <span>{t(menuItem.title)}</span>
	                                        <i className="fa fa-angle-right pull-right"></i>
	                                        {menuItem.badge ? <menuItem.badge/> :''}
                                        </a>
                                        : ''}
                                    {(menuItem.type === 'link') ?
                                        <Link
                                            to={`${process.env.PUBLIC_URL}${menuItem.path}`}
                                            className={`sidebar-header ${menuItem.active ? 'active' : ''}`}
                                            onClick={() => toggletNavActive(menuItem)}
                                        >
                                            <menuItem.icon/>
                                            <span>{t(menuItem.title)}</span>
	                                        {menuItem.children ?
                                                <i className="fa fa-angle-right pull-right"></i> : ''}
	                                        {menuItem.badge ? <menuItem.badge/> :''}
                                        </Link>
                                        : ''}
                                    {menuItem.children ?
                                        <ul
                                            className={`sidebar-submenu ${menuItem.active ? 'menu-open' : ''}`}
                                            style={menuItem.active ? {
                                                opacity: 1,
                                                transition: 'opacity 500ms ease-in'
                                            } : {}}
                                        >
                                            {menuItem.children.map((childrenItem, index) =>
                                                <li key={index}
                                                    className={childrenItem.children ? childrenItem.active ? 'active' : '' : ''}>
                                                    {(childrenItem.type === 'sub') ?
                                                        <a href="#javascript"
                                                           onClick={() => toggletNavActive(childrenItem)}>
                                                            <i className="fa fa-circle"></i>{t(childrenItem.title)}
                                                            <i className="fa fa-angle-right pull-right"></i>
                                                            {childrenItem.badge ? <childrenItem.badge/> :''}
                                                        </a>
                                                        : ''}

                                                    {(childrenItem.type === 'link') ?
                                                        <Link
                                                            to={`${process.env.PUBLIC_URL}${childrenItem.path}`}
                                                            className={childrenItem.active ? 'active' : ''}
                                                            onClick={() => toggletNavActive(childrenItem)}
                                                        >
                                                            <i className="fa fa-circle"></i>{t(childrenItem.title)}
                                                            {childrenItem.badge ? <childrenItem.badge/> :''}
                                                        </Link>
                                                        : ''}
                                                    {childrenItem.children ?
                                                        <ul className={`sidebar-submenu ${childrenItem.active ? 'menu-open' : 'active'}`}>
                                                            {childrenItem.children.map((childrenSubItem, key) =>
                                                                <li className={childrenSubItem.active ? 'active' : ''}
                                                                    key={key}>
                                                                    {(childrenSubItem.type === 'link') ?
                                                                        <Link
                                                                            to={`${process.env.PUBLIC_URL}${childrenSubItem.path}`}
                                                                            className={childrenSubItem.active ? 'active' : ''}
                                                                            onClick={() => toggletNavActive(childrenSubItem)}
                                                                        >
                                                                            <i className="fa fa-circle"></i>{t(childrenSubItem.title)}
                                                                            {childrenItem.badge ? <childrenItem.badge/> :''}
                                                                        </Link>
                                                                        : ''}
                                                                </li>
                                                            )}
                                                        </ul>
                                                        : ''}
                                                </li>
                                            )}
                                        </ul>
                                        : ''}
                                </li>
                            )
                        }
                        <li className={`right-arrow ${hideRightArrow ? 'd-none' : 'hideRightArrow'}`}
                            onClick={scrollToRight}><i className="fa fa-angle-right"></i></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default translate(Sidebar);

