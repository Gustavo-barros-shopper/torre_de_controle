import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from 'reactstrap'
import Pagination, { paginationData } from '../components/customized/Pagination'

export default () => {
    const [ page1, setPage1 ] = useState(5)
    const [ page2, setPage2 ] = useState(27)
    const [ page3, setPage3 ] = useState(51)
    const [ page4, setPage4 ] = useState(10)
    const [ page5, setPage5 ] = useState(1)
    const [ page6, setPage6 ] = useState(2)
    const [ page7, setPage7 ] = useState(9)

    const data = paginationData({
        counter: 100,
        limit: 10,
        numberOfPages: 10,
        currentPage: 5,
    })

    const data1 = paginationData({
        counter: 100,
        limit: 10,
        numberOfPages: 10,
        currentPage: page1,
    })
    const data2 = paginationData({
        counter: 400,
        limit: 15,
        numberOfPages: 27,
        currentPage: page2,
    })
    const data3 = paginationData({
        counter: 1500,
        limit: 15,
        numberOfPages: 100,
        currentPage: page3,
    })
    const data4 = paginationData({
        counter: 100,
        limit: 10,
        numberOfPages: 10,
        currentPage: page4,
    })
    const data5 = paginationData({
        counter: 100,
        limit: 10,
        numberOfPages: 10,
        currentPage: page5,
    })
    const data6 = paginationData({
        counter: 100,
        limit: 10,
        numberOfPages: 10,
        currentPage: page6,
    })
    const data7 = paginationData({
        counter: 100,
        limit: 10,
        numberOfPages: 10,
        currentPage: page7,
    })

    const changePage1 = (pg) => setPage1(pg)
    const changePage2 = (pg) => setPage2(pg)
    const changePage3 = (pg) => setPage3(pg)
    const changePage4 = (pg) => setPage4(pg)
    const changePage5 = (pg) => setPage5(pg)
    const changePage6 = (pg) => setPage6(pg)
    const changePage7 = (pg) => setPage7(pg)

    return (
        <Card className='shadow'>
            <CardHeader tag='h4'>
                Pagination Example
            </CardHeader>
            <CardBody>
                <h4>function <strong>paginationData</strong></h4>
                <p>Usage:</p>
                <pre>{`
                paginationData({
                    counter: int,
                    limit: int,
                    numberOfPages: int,
                    currentPage: int
                })
                `}</pre>
                <ul>
                    <li><strong>counter</strong> - total of rows</li>
                    <li><strong>limit</strong> - limit of rows per page</li>
                    <li><strong>numberOfPages</strong> - number of pages</li>
                    <li><strong>currentPage</strong> - number of the current page</li>
                </ul>
                <br />
                <p>Return:</p>
                <pre>{`
                {
                    counter: int,
                    limit: int,
                    numberOfPages: int,
                    currentPage: int,
                    splitPagesBy: int,
                    skipStep: int,
                    skipPrev: int,
                    skipNext: int,
                    prevPage: int,
                    nextPage: int,
                    hasPrev: bool,
                    hasNext: bool,
                    pages: int
                }
                `}</pre>
                <ul>
                    <li><strong>counter</strong> - total of rows</li>
                    <li><strong>limit</strong> - limit of rows per page</li>
                    <li><strong>numberOfPages</strong> - number of pages</li>
                    <li><strong>currentPage</strong> - number of the current page</li>
                    <li><strong>splitPagesBy</strong> - how much pages will be</li>
                    <li>
                        <strong>skipStep</strong> - how much pages the shortcuts will skip 
                        (shortcuts: <strong>skipPrev</strong>, <strong>skipNext</strong>)
                    </li>
                    <li>
                        <strong>skipPrev</strong> - shortcut to currentPage minus 
                        <strong>skipStep</strong>
                    </li>
                    <li>
                        <strong>skipNext</strong> - shortcut to currentPage plus 
                        <strong>skipStep</strong>
                    </li>
                    <li><strong>prevPage</strong> - number of the previous page</li>
                    <li><strong>nextPage</strong> - number of the next page</li>
                    <li>
                        <strong>hasPrev</strong> - <strong>true</strong> 
                        if has previous page
                    </li>
                    <li>
                        <strong>hasNext</strong> - <strong>true</strong> 
                        if has next page
                    </li>
                    <li><strong>pages</strong> - array of page numbers</li>
                </ul>
                <br />
                <h4>component <strong>{`<Pagination />`}</strong></h4>
                <p>Usage:</p>
                <pre>{`
                <Pagination
                    paginationProps={{ ... }}
                    paginationConfig={{ ... }}
                    changePage={ function }
                />
                `}</pre>
                <ul>
                    <li>
                        <strong>paginationProps</strong> - props to be passed to the 
                        child Pagination from reactstrap
                    </li>
                    <li>
                        <strong>paginationConfig</strong> - object returned from 
                        paginationData function
                    </li>
                    <li><strong>changePage</strong> - (selectedPage) => {`{}`}</li>
                </ul>
                <br />
                <Pagination paginationConfig={data1} changePage={changePage1} />
                <br />
                <Pagination paginationConfig={data2} changePage={changePage2} />
                <br />
                <Pagination paginationConfig={data3} changePage={changePage3} />
                <br />
                <Pagination paginationConfig={data4} changePage={changePage4} />
                <br />
                <Pagination paginationConfig={data5} changePage={changePage5} />
                <br />
                <Pagination paginationConfig={data6} changePage={changePage6} />
                <br />
                <Pagination paginationConfig={data7} changePage={changePage7} />
            </CardBody>
            <CardFooter>
                <Pagination paginationConfig={data} changePage={pg => alert(pg)} />
            </CardFooter>
        </Card>
    )
}