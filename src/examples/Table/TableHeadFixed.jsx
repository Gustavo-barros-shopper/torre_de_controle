import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Table
} from 'reactstrap'
import { TableHeadFixed } from '../../components/customized/Table'

export default () => (
    <Card className='shadow'>
        <CardHeader tag='h4'>
            TableHeadFixed Example
        </CardHeader>
        <CardBody>
            <h4>component <strong>{`<TableHeadFixed/>`}</strong></h4>
            <p>Usage:</p>
            <pre>{`
            <TableHeadFixed>
                <Table>
                    ...
                </Table>
            </TableHeadFixed>
            `}</pre>
            <br />
            <div style={{
                display: 'block'
            }}>
                <TableHeadFixed style={{
                    height: '300px',
                    width: '600px',
                    margin: '0 auto'
                }}
                >
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                                <th>teste</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                            <tr><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td><td>teste</td></tr>
                        </tbody>
                    </Table>
                </TableHeadFixed>
            </div>
        </CardBody>
        <CardFooter>
            <p>It's needled to be within a div which has a height defined. Example, it could has <strong>height: 300px;</strong> or <strong>display: flex;</strong> and <strong>flex: 1 1 auto;</strong> and <strong>height: 1px;</strong></p>
        </CardFooter>
    </Card>
)