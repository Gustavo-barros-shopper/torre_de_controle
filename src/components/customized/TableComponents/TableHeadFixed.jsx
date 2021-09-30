import styled from 'styled-components'

export const TableHeadFixed = styled.div`
    border: 1px solid #dee2e6;
    display: flex;
    flex: 1 1 auto;
    height: 1px;

    thead th {
        position: sticky;
        top: 0;
        background: #fff;
        border: 0;
        white-space: nowrap;

        &:after {
            content: " ";
            position: absolute;
            left: 0;
            border-bottom: solid 2px #eee;
            right: 0;
            bottom: -2px;
        }
    }
`