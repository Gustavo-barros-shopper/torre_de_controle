import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Table
} from 'reactstrap'
import { Td } from '../../components/customized/Table'

export default () => {
    const [ curRow, setCurRow ] = useState(null)

    return (
        <Card className='shadow'>
            <CardHeader tag='h4'>
                Td Example
            </CardHeader>
            <CardBody>
                <h4>component <strong>{`<Td/>`}</strong></h4>
                <p>Usage:</p>
                <pre>{`
                <Td
                    clickable
                    active={ <condition> }
                >
                    ...
                </Td>
                `}</pre>
                <br />
                <Table hoverable bordered>
                    <thead>
                        <tr>
                            <th>Teste</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td
                                clickable
                                active={ curRow == 1 }
                                onClick={ () => { setCurRow(1) } }
                            >
                                Teste 1
                            </Td>
                        </tr>
                        <tr>
                            <Td
                                clickable
                                active={ curRow == 2 }
                                onClick={ () => { setCurRow(2) } }
                            >
                                Teste 2
                            </Td>
                        </tr>
                        <tr>
                            <Td
                                clickable
                                active={ curRow == 3 }
                                onClick={ () => { setCurRow(3) } }
                            >
                                Teste 3
                            </Td>
                        </tr>
                        <tr>
                            <Td
                                clickable
                                active={ curRow == 4 }
                                onClick={ () => { setCurRow(4) } }
                            >
                                Teste 4
                            </Td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}