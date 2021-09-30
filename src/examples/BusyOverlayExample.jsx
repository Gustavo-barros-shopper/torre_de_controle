import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from 'reactstrap'
import BusyOverlay from '../components/customized/BusyOverlay'

export default () => {
    const [ isLoading, setIsLoading ] = useState(true)

    return (
        <Card className='shadow'>
            <CardHeader tag='h4'>
                BusyOverlay Example
            </CardHeader>
            <CardBody>
                <h4>component <strong>{`<BusyOverlay/>`}</strong></h4>
                <p>Usage:</p>
                <pre>{`{ isLoading && <BusyOverlay /> }`}</pre>
                <button
                    className='btn btn-primary'
                    onClick={ () => setIsLoading(!isLoading) }
                >Toggle</button>
                <span> { isLoading ? 'On' : 'Off' }</span>
                <br />
                <div style={{
                    position: 'relative',
                    minHeight: '300px',
                    border: 'solid 1px #000'
                }}>
                    { isLoading && <BusyOverlay /> }
                </div>
            </CardBody>
        </Card>
    )
}