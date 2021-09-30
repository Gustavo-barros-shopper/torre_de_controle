import React from 'react'
import styled from 'styled-components'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationContainer = styled.div`
    display: flex;
`

const PaginationInfos = styled.span`
    display: flex;
    align-self: center;
    justify-content: flex-end;
    flex: 1;
`

export const paginationData = ({
	counter,
	limit,
	numberOfPages,
	currentPage
}) => {
	const splitPagesBy = 10
	const skipStep = 50
	const pagesArr = Array.from(Array(numberOfPages + 1).keys()).splice(1)
	const previous5 = currentPage - (splitPagesBy / 2)
	let pages = []
	if (previous5 <= 1) {
		pages = pagesArr.slice(0, splitPagesBy)
	} else {
		const start = currentPage - (splitPagesBy / 2)
		const end = currentPage + (splitPagesBy / 2)
		pages = pagesArr.slice(start, end)
	}
	const skipPrev = (currentPage > skipStep ?
		currentPage - skipStep :
		skipStep - (skipStep - currentPage))
	const skipNext = (currentPage + skipStep > numberOfPages ?
		numberOfPages :
		currentPage + skipStep)
	const hasPrev = !(currentPage == 1)
	const hasNext = !(currentPage + 1 > numberOfPages)
	const prevPage = currentPage - 1
	const nextPage = currentPage + 1

	return {
		counter: counter,
		limit: limit,
		numberOfPages: numberOfPages,
		currentPage: currentPage,
		splitPagesBy: splitPagesBy,
		skipStep: skipStep,
		skipPrev: skipPrev,
		skipNext: skipNext,
		prevPage: prevPage,
		nextPage: nextPage,
		hasPrev: hasPrev,
		hasNext: hasNext,
		pages: pages
	}
}

const PaginationNav = ({
    paginationProps,
    paginationConfig,
    changePage
}) => {
    const {
        counter,
        limit,
        numberOfPages,
        currentPage,
        splitPagesBy,
        skipStep,
        skipPrev,
        skipNext,
        prevPage,
        nextPage,
        hasPrev,
        hasNext,
        pages
    } = paginationConfig

    return (
        <PaginationContainer>
        <Pagination
            aria-label='Navegação por páginas'
            { ...paginationProps }
        >
            <PaginationItem disabled={currentPage == 1}>
                <PaginationLink first href='' onClick={() => changePage(1)} />
            </PaginationItem>
            <PaginationItem disabled={currentPage == 1}>
                <PaginationLink previous href='' onClick={() => changePage(1)} />
            </PaginationItem>

            {
                currentPage >= skipStep &&
                <PaginationItem>
                    <PaginationLink href='' onClick={() => changePage(skipPrev)} >
                        <strong>{ skipPrev }</strong>
                    </PaginationLink>
                </PaginationItem>
            }

            {
                pages.map(page => {
                    return (
                        <PaginationItem key={page} active={ page == currentPage }>
                            <PaginationLink href='' onClick={() => changePage(page)} >
                            { page }
                            </PaginationLink>
                        </PaginationItem>
                    )
                })
            }

            {
                currentPage + skipStep <= numberOfPages &&
                <PaginationItem>
                    <PaginationLink href='' onClick={() => changePage(skipNext)} >
                        <strong>{ skipNext }</strong>
                    </PaginationLink>
                </PaginationItem>
            }

            <PaginationItem disabled={currentPage == numberOfPages}>
                <PaginationLink next href='' onClick={() => changePage(numberOfPages)} />
            </PaginationItem>
            <PaginationItem disabled={currentPage == numberOfPages}>
                <PaginationLink last href='' onClick={() => changePage(numberOfPages)} />
            </PaginationItem>
        </Pagination>
        <PaginationInfos>
            Exibindo { counter < limit ? counter : limit } de { counter } encontrados, { numberOfPages } páginas.
        </PaginationInfos>
        </PaginationContainer>
    )
}

export default PaginationNav