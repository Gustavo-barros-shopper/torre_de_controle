import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Table
} from 'reactstrap'
import { Th, TableContext } from '../../components/customized/Table'

export default () => {
    const ordering = {
        teste: null,
        teste2: null,
        teste3: null
    }

    const initialData = [
        { teste: 1, teste2: 2, teste3: 3 },
        { teste: 3, teste2: 1, teste3: 1 },
        { teste: 2, teste2: 4, teste3: 2 },
        { teste: 4, teste2: 3, teste3: 4 },
    ]

    const [ data, setData ] = useState(initialData)

    const updateOrdering = (orderName, direction) => {
        const order = { teste: null, teste2: null, teste3: null }
        const newOrdering = { ...order, [orderName]: direction }

        if (newOrdering.teste === null &&
            newOrdering.teste2 === null &&
            newOrdering.teste3 === null
        ) {
            setData(initialData)
            return
        }

        const tmp = [ ...initialData ]

        function compareAsc( a, b ) {
            if (a[orderName] < b[orderName]) {
                return -1
            }
            if (a[orderName] > b[orderName]) {
                return 1
            }
            return 0
        }
        function compareDesc( a, b ) {
            if (a[orderName] > b[orderName]) {
                return -1
            }
            if (a[orderName] < b[orderName]) {
                return 1
            }
            return 0
        }

        tmp.sort((direction == 'asc' ? compareAsc : compareDesc))
        setData(tmp)
    }

    return (
        <Card className='shadow'>
            <CardHeader tag='h4'>
                Th Example
            </CardHeader>
            <CardBody>
                <h4>component <strong>{`<Th/>`}</strong></h4>
                <p>Usage:</p>
                <pre>{`
                import { Th, TableContext } from '../../components/customized/Table'

                <TableContext
                    updateOrdering={ function: (orderName, direction) => {} }
                    initialOrdering={ object }
                >
                    <table>
                        <thead>
                            <tr>
                                <Th
                                    orderable
                                    orderName={ string }
                                >
                                    ...
                                </Th>
                            </tr>
                        </thead>
                    </table>
                </TableContext>
                `}</pre>
                <br />
                <p><strong>initialOrdering</strong> - object where "key" is correspondent of "orderName" and "value" is "asc", "desc" or "null".Eexample:</p>
                <pre>{`
                {
                    teste: null,
                    teste2: "asc",
                    teste3: "desc"
                }
                `}</pre>
                <TableContext
                    updateOrdering={ updateOrdering }
                    initialOrdering={ ordering }
                >
                    <Table hoverable bordered>
                        <thead>
                            <tr>
                                <Th
                                    orderable
                                    orderName={'teste'}
                                >
                                    Teste
                                </Th>
                                <Th
                                    orderable
                                    orderName={'teste2'}
                                >
                                    Teste 2
                                </Th>
                                <Th
                                    orderable
                                    orderName={'teste3'}
                                >
                                    Teste 3
                                </Th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((v, k) => {
                                return (
                                    <tr key={k}>
                                        <td>{ v.teste }</td>
                                        <td>{ v.teste2 }</td>
                                        <td>{ v.teste3 }</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </TableContext>
            </CardBody>
        </Card>
    )
}