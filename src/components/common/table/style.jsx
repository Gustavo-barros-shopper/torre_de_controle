import styled, { css } from 'styled-components'

export const Table = styled.table`
  width: 100%;
  display: inline-block;
  border: 1px solid #c7c9c7;
`

export const THead = styled.thead`
  width: 100%;
  flex: 1;
  display: flex;
  border-bottom: 1px solid #c7c9c7;
`

export const TBody = styled.tbody`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const THeadTR = styled.tr`
  display: flex;
  flex: 1;
`

export const TBodyTR = styled.tr`
  color: #666666;
  ${({ backgroundColor }) =>
    backgroundColor
      ? css`
          background-color: ${backgroundColor};
        `
      : css`
          &:nth-child(odd) {
            background-color: #f0f0f0;
          }

          &:nth-child(even) {
            background-color: #ffffff;
          }
        `}

  ${({ isHover = true }) =>
    isHover &&
    css`
      &:hover {
        background-color: #d4e7fc;
        color: #000;
        font-weight: bold;
      }
    `}

  ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `}

  display: flex;
  flex: 1;
  align-items: center;
`

export const TH = styled.th`
  padding: 10px 25px;
  background-color: inherit;
  color: inherit;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  ${({ flex = 1 }) =>
    css`
      flex: ${flex};
    `}
`

export const TD = styled.td`
  align-items: center;

  padding: 10px 25px;
  background-color: inherit;
  color: inherit;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  ${({ flex = 1 }) =>
    css`
      flex: ${flex};
    `}
  overflow: auto;
`
