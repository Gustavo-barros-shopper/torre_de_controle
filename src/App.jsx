import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { ScrollContext } from 'react-router-scroll-4'
import Loader from './components/layout/Loader'
import * as serviceWorker from './serviceWorker'

import UnlockPage from './pages/UnlockPage'

import './index.scss'

import { IntlProvider } from 'react-intl'
import { registerLocale, setDefaultLocale } from 'react-datepicker'

import TEMPLATE_MESSAGES from './i18n/messages.json'
import APP_MESSAGES from './i18n/messages'
import { LANGUAGES } from './i18n/languages'
import ptBR from 'date-fns/locale/pt-BR'
import Routes from './routes/Routes'


import Login from './pages/Login/Login'

import { ssoClient, checkoutClient } from './services/SigninSetup'

import { checkLoginByPass, handleLoginMode, setLoginMode } from './services/Security'

const MESSAGES = {
  'pt-BR': { ...TEMPLATE_MESSAGES['pt-BR'], ...APP_MESSAGES['pt-BR'] }
}

registerLocale('pt-BR', ptBR)
setDefaultLocale('pt-BR')

function Root() {

  const [currentLocale, setCurrentLocale] = useState(LANGUAGES[LANGUAGES.default].code)
  const [loader, setLoader] = useState(true)
  const [locked, setLocked] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [bypassActive, setBypassActive] = useState(null);

  useEffect(() => {
    checkLoginByPass().then((data) => {
      const bypassActive = data.bypass_active
      setBypassActive(bypassActive)


      let loginMode = bypassActive ? "bypass" : "google"
      handleLoginMode(loginMode)

      if (bypassActive) {
        checkoutClient.onAuthStateChanged(async state => {
          if (state === 'initialized' || state === 'logged_in') {
            const user = await checkoutClient.getUser()
            setCurrentUser(user)
            setLoginMode("bypass")
            setLoader(false)
          } else if (state === 'logged_out') {
            setCurrentUser(null)
            setLoader(false)
          } else if (state === 'locked') {
            setLocked(true)
            setCurrentUser(null)
            setLoader(false)
          }
        })
      } else {
        ssoClient.onAuthStateChanged(async state => {
          if (state === 'initialized' || state === 'logged_in') {
            const user = await ssoClient.getUser()
            setCurrentUser(user)
            setLoginMode("google")
            setLoader(false)
          } else if (state === 'logged_out') {
            setCurrentUser(null)
            setLoader(false)
          } else if (state === 'locked') {
            setLocked(true)
            setCurrentUser(null)
            setLoader(false)
          }
        })
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [])

  async function onLogout(e) {
    if (e) e.preventDefault()

    if (bypassActive) {
      checkoutClient.handleLogout()
    }
    else {
      ssoClient.logout()
    }

  }

  function appLock(e) {
    e.preventDefault()

    if (bypassActive) {
      checkoutClient.lock()
    }
    else {
      ssoClient.lock()
    }
  }

  async function appUnlock() {
    setLoader(true)
    let unlocked = bypassActive ? await checkoutClient.unlock() : await ssoClient.unlock()

    if (unlocked) {
      let user = null

      if (bypassActive) {
        user = await checkoutClient.getUser()
        setCurrentUser(user)
      }
      else {
        user = await ssoClient.getUser()
        setCurrentUser(user)
      }
      setLocked(false)
      setLoader(false)
    }
    else {
      onLogout()
    }
  }

  return (
    <div className="App">
      <IntlProvider locale={currentLocale} messages={MESSAGES[currentLocale]}>
        {!loader ? (
          <BrowserRouter basename="/">
            <ScrollContext>
              <Switch>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/login`}
                  component={({ location, history }) => {
                    const qs = new URLSearchParams(location.search);
                    if (currentUser) {
                      if (qs.has('continue')) {
                        history.push(qs.get('continue'));
                      } else {
                        history.push('/');
                      }
                      return <></>;
                    }
                    return (
                      <Login setLoader={setLoader} bypassActive={bypassActive} />
                    );
                  }}
                />
                {currentUser ? (
                  <>
                    <Routes user={currentUser} onLock={appLock} onLogout={onLogout} />
                  </>
                ) : (
                  <>
                    {locked ? (
                      <UnlockPage onUnlock={appUnlock} />
                    )
                      : (
                        <Redirect
                          push
                          to={{
                            pathname: `${process.env.PUBLIC_URL}/login`,
                            search: `?continue=${window.location.pathname}`,
                          }}
                        />
                      )}
                  </>
                )}
              </Switch>
            </ScrollContext>
          </BrowserRouter>
        ) : <Loader show={loader} />}
      </IntlProvider>
    </div>
  )
}

export default Root;
