import React from 'react'
import * as S from './style'

const Table = ({ children }) => <S.Table>{children}</S.Table>

const TableHeader = ({ namesColumns = [] }) => (
  <S.THead>
    <S.THeadTR>
      {namesColumns.map((columnData) => (
        <S.TH key={columnData}>{columnData}</S.TH>
      ))}
    </S.THeadTR>
  </S.THead>
)

const TableHead = ({ children }) => <S.THead>{children}</S.THead>

const TableHeadRow = ({ children }) => <S.THeadTR>{children}</S.THeadTR>

const TableHeadCell = ({ children, flex }) => (
  <S.TH flex={flex}>{children}</S.TH>
)

const TableBody = ({ children }) => <S.TBody>{children}</S.TBody>

const TableBodyRow = ({
  isHover,
  children,
  onClick,
  cursor,
  backgroundColor
}) => (
  <S.TBodyTR
    isHover={isHover}
    onClick={onClick}
    cursor={cursor}
    backgroundColor={backgroundColor}
  >
    {children}
  </S.TBodyTR>
)

const TableBodyCell = ({ children, flex }) => (
  <S.TD flex={flex}>{children}</S.TD>
)

export {
  Table,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableHeader,
  TableBody,
  TableBodyCell,
  TableBodyRow
}
