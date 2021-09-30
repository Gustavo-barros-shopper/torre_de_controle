import React, { useState, useEffect ,Fragment } from 'react';
import logo from '../../../assets/images/logo/kdabra.svg';
import UserMenu from './userMenu';
import Notification from './notification';
import SearchHeader from './searchHeader';
import { Link } from 'react-router-dom';
import { Menu, ChevronLeft, ChevronRight, Maximize, Bell, MessageCircle, MoreHorizontal } from 'react-feather';

const Header = ({
    useMiniSidebar, showSearchBox, menuItems, searchFunction, showMaximize,
    showNotifications, notifications, showChat, hasChatMessages,
    showUserMenu, user, lock, logout
}) => {
  const [sidebar, setSidebar] = useState(true);
  const [rightSidebar, setRightSidebar] = useState(true);
  const [headerbar, setHeaderbar] = useState(true);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const handleResize = () => {
      setInnerWidth(window.innerWidth);
      if (useMiniSidebar) {
          if (innerWidth <= 991) {
              if (!sidebar) {
                  toggleMiniSidebar();
                  openCloseSidebar();
              }
          }
      }
  };

  useEffect(() => {
    window.onresize = handleResize;
    window.ondeviceorientation = handleResize;
    handleResize()
  }, [])


 const openCloseSidebar = (e) => {
   e && e.preventDefault();
    if (sidebar) {
      setSidebar(!sidebar)
      document.querySelector(".page-main-header").classList.add('open');
      document.querySelector(".page-sidebar").classList.add('open');
    } else {
      setSidebar(!sidebar)
      document.querySelector(".page-main-header").classList.remove('open');
      document.querySelector(".page-sidebar").classList.remove('open');
    }
  }

  const toggleMiniSidebar = (e) => {
   e && e.preventDefault();
   document.querySelector(".page-main-header").classList.remove('open');
  document.querySelector(".page-sidebar").classList.remove('open');
    if (sidebar) {
      setSidebar(!sidebar)
      document.querySelector(".page-wrapper").classList.add('compact-page');
      document.querySelector(".page-body-wrapper").classList.add('sidebar-hover');
    } else {
      setSidebar(!sidebar)
        document.querySelector(".page-wrapper").classList.remove('compact-page');
      document.querySelector(".page-body-wrapper").classList.remove('sidebar-hover');
    }
  }

  function showRightSidebar() {
    if (rightSidebar) {
      setRightSidebar(!rightSidebar)
      document.querySelector(".right-sidebar").classList.add('show');
    } else {
      setRightSidebar(!rightSidebar)
      document.querySelector(".right-sidebar").classList.remove('show');
    }
  }

  //full screen function
  function goFull() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  return (
    <Fragment>
      <div className="page-main-header" >
        <div className="main-header-right row">
          <div className="main-header-left d-lg-none">
            <div className="logo-wrapper">
              <Link to="/">
                <img className="img-fluid" src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="mobile-sidebar d-block">
            <div className="media-body text-right switch-sm">
              {useMiniSidebar && innerWidth > 991 ?
                  <label className="switch">
                    <a href="#javascript" onClick={(e) => toggleMiniSidebar(e)}>
                      {sidebar ? <ChevronLeft/> : <ChevronRight />}
                    </a>
                  </label>
                  :
                  <label className="switch">
                    <a href="#javascript" onClick={(e) => openCloseSidebar(e)}>
                      {/*<Menu />*/}
                      {sidebar ? <ChevronLeft/> : <ChevronRight />}
                    </a>
                  </label>
              }
            </div>
          </div>
          <div className="nav-right col p-0">
            <ul className={`nav-menus ${headerbar ? '' : 'open'}`}>
              {showSearchBox &&
                <li>
                  <SearchHeader menuItems={menuItems} searchFunction={searchFunction}/>
                </li>
              }
              {showMaximize && <li>
                <a onClick={goFull} className="text-dark" href="#!">
                  <Maximize />
                </a>
              </li>
              }
              {showNotifications && <li className="onhover-dropdown">
                <Notification notifications={notifications}/>
                <Bell/>
                {notifications.filter(notification => notification.unread).length > 0 && <span className="dot"></span>}
                <Notification notifications={notifications}/>
              </li>
              }
              {showChat && <li>
                <a onClick={showRightSidebar}>
                  <MessageCircle />
                  {hasChatMessages && <span className="dot"></span>}
                </a>
              </li>}
              {showUserMenu && <UserMenu user={user} lock={lock} logout={logout}/>}
            </ul>
            <div className="d-lg-none mobile-toggle pull-right" onClick={() => setHeaderbar(!headerbar)}><MoreHorizontal/></div>
          </div>
          <script id="result-template" type="text/x-handlebars-template">
            <div className="ProfileCard u-cf">
              <div className="ProfileCard-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay m-0"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1">
                </path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
              </div>
              <div className="ProfileCard-details">
                <div className="ProfileCard-realName"></div>
              </div>
            </div>
          </script>
          <script id="empty-template" type="text/x-handlebars-template">
            <div className="EmptyMessage">Your search turned up 0 results. This most likely means the backend is down, yikes!</div>
          </script>
        </div>
      </div>
    </Fragment>
  )
};
export default Header;