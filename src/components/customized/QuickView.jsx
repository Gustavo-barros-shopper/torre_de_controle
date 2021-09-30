import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const RightSideBar = styled.div`
    top: 0 !important;
    width: 600px !important;
    right: -100% !important;

    &.show {
        right: 0 !important;
    }
`

export const Context = React.createContext()

const QuickView = ({ children }) => {
    const [ isQuickViewOpen, setIsQuickViewOpen ] = useState(false)

    const values = {
        isQuickViewOpen,
        setIsQuickViewOpen
    }

    const domNode = document.getElementById('quick-view')

    return ReactDOM.createPortal(
        <Context.Provider value={values}>
            <RightSideBar className={`right-sidebar${ isQuickViewOpen ? ' show' : '' }`}>
                { children }
            </RightSideBar>
        </Context.Provider>,
        domNode
    )
}

export default QuickView