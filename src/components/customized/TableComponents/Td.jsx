import styled from 'styled-components'

export const Td = styled.td`
    padding: 0.5rem 1rem !important;
    ${props => props.clickable && `
        cursor: pointer;
        font-weight: ${props.active ? 'bold' : 'normal' };

        &:hover {
            color: blue;
        }
    `}
`