import React, { useState, useEffect } from 'react'
import Context from './TableContext'

export const TableContext = ({
    children,
    updateOrdering,
    initialOrdering
}) => {
    const [ order, setOrder ] = useState({})

    const ordering = (orderName, direction) => {
        updateOrdering(orderName, direction)
        setOrder({ ...order, [orderName]: direction })
    }

    const values = {
        order,
        setOrder,
        ordering
    }

    useEffect(() => {
        Object.keys(initialOrdering).map(orderName => {
            const direction = initialOrdering[orderName]
            setOrder({ ...order, [orderName]: direction })
        })
    }, [])

    return (
        <Context.Provider value={values}>
            { children }
        </Context.Provider>
    )
}
