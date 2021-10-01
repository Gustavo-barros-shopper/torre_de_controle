import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Sidebar from '../components/common/sidebar-component/sidebar';
import Header from '../components/common/header-component/header';
import { MENUITEMS } from '../data/menu'
import Orders from '../pages/Orders/Orders';

const GlobalStyle = createGlobalStyle`
  .page-body {
    padding-top: 50px !important;
  }
`

function Routes({user, onLock, onLogout}) {
    const [menu, setMenu] = useState(MENUITEMS)

    return (
        <>
            <div className="page-wrapper">
                <div className="page-body-wrapper without-header">
                    <div className="page-body" style={{padding: '0 50px 0 0' }}>
                        <Header
                            showSearchBox={false}
                            showMaximize={false}
                            showNotifications={false}
                            showChat={false}
                            showUserMenu={false}
                            useMiniSidebar={false}
                        />
                        <Sidebar
                            menuItems={menu}
                            user={user}
                            lock={onLock}
                            logout={onLogout}
                        />
                        <div className="page-body" style={{ marginTop: '80px' }}>
                            <Switch>
                                <Route
                                    path="/orders"
                                    component={() => (
                                        <Orders />
                                    )}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Routes;