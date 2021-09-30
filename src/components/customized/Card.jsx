import styled from 'styled-components'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from 'reactstrap'

export const CardContent = styled(Card)`
    flex: 1 1 auto;
    margin-top: 30px;

    @media (max-width: 1440px) {
        margin: 0 -15px !important;
    }
`

export const CardContentHeader = styled(CardHeader)`
    @media (max-width: 1440px) {
        padding: 15px !important;
    }
`

export const CardContentBody = styled(CardBody)`
    display: flex;
    flex-direction: column;
    height: 1px;

    @media (max-width: 1440px) {
        padding: 15px !important;
    }
`

export const CardContentFooter = styled(CardFooter)`
    @media (max-width: 1440px) {
        padding: 15px !important;
    }
`
