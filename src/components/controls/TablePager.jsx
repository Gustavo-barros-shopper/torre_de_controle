import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import styled from 'styled-components';

const PaginationContainer = styled(Pagination)`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const TablePager = ({
    gotoPage,
    canPreviousPage,
    previousPage,
    canNextPage,
    nextPage,
    pageIndex,
    pageCount
}) => {
    return (
        <>
        {pageCount > 1 &&
        <PaginationContainer listClassName="justify-content-center">
            <PaginationItem disabled={!canPreviousPage}>
                <PaginationLink first onClick={() => gotoPage(0)}/>
            </PaginationItem>
            <PaginationItem disabled={!canPreviousPage}>
                <PaginationLink previous onClick={() => previousPage()}/>
            </PaginationItem>

            {pageIndex > 2 &&
            <PaginationItem disabled>
                <PaginationLink>
                    ...
                </PaginationLink>
            </PaginationItem>
            }
            {pageIndex > 1 &&
            <PaginationItem>
                <PaginationLink onClick={() => gotoPage(pageIndex - 2)}>
                    {pageIndex - 1}
                </PaginationLink>
            </PaginationItem>
            }
            {pageIndex > 0 &&
            <PaginationItem>
                <PaginationLink onClick={() => gotoPage(pageIndex - 1)}>
                    {pageIndex}
                </PaginationLink>
            </PaginationItem>
            }

            <PaginationItem active>
                <PaginationLink>
                    {pageIndex + 1}
                </PaginationLink>
            </PaginationItem>

            {pageIndex < pageCount - 1 &&
            <PaginationItem>
                <PaginationLink onClick={() => gotoPage(pageIndex + 1)}>
                    {pageIndex + 2}
                </PaginationLink>
            </PaginationItem>
            }
            {pageIndex < pageCount - 2 &&
            <PaginationItem>
                <PaginationLink onClick={() => gotoPage(pageIndex + 2)}>
                    {pageIndex + 3}
                </PaginationLink>
            </PaginationItem>
            }
            {pageCount > pageIndex + 3 &&
            <PaginationItem disabled>
                <PaginationLink>
                    ...
                </PaginationLink>
            </PaginationItem>
            }

            <PaginationItem disabled={!canNextPage}>
                <PaginationLink next onClick={() => nextPage()}/>
            </PaginationItem>
            <PaginationItem disabled={!canNextPage}>
                <PaginationLink last onClick={() => gotoPage(pageCount - 1)}/>
            </PaginationItem>
        </PaginationContainer>
        }
        </>
    );
};

export default TablePager;