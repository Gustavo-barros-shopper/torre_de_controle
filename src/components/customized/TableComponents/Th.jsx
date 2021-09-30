import React from 'react'
import styled from 'styled-components'
import Context from './TableContext'

const ThStyled = styled.th`
    cursor: ${ props => props.orderable ? 'pointer' : 'default' };
    user-select: none;
    padding: 0.5rem 1rem !important;
`

const OrderIcon = styled.span`
    margin-right: 10px;
`

const Text = styled.span``

const ThComponent = ({
    ordering,
    direction,
    orderable,
    orderName,
    children
}) => {
    const handleClick = () => {
        ordering(
            orderName,
            !direction ? 'asc' :
            direction === 'asc' ? 'desc' :
            null
        )
    }

    const order = (
        !direction ? '' :
        direction === 'asc' ? '-asc' :
        '-desc'
    )

    return (
        <ThStyled
            orderable
            onClick={orderable && handleClick}
        >
            { orderable &&
            <OrderIcon>
                <i className={
                    `fa fa-sort${ order }`
                }></i>
            </OrderIcon> }
            <Text>
                { children }
            </Text>
        </ThStyled>
    )
}

export const Th = ({
    children,
    orderable,
    orderName
}) => {
    return (
        <Context.Consumer>
            {
                ({
                    order,
                    ordering
                }) => {
                    const direction = order[orderName]
                    return (
                        <ThComponent
                            ordering={ordering}
                            direction={direction}
                            orderable={orderable}
                            orderName={orderName}
                        >
                            { children }
                        </ThComponent>
                    )
                }
            }
        </Context.Consumer>
    )
}