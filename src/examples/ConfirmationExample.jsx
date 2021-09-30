import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from 'reactstrap'
import Confirmation from '../components/customized/Confirmation'

export default () => {
    const [ confirmation, setConfirmation ] = useState(true)

    const content = (
        <p>To confirm type 123</p>
    )

    const getConfirmation = () => {
        setConfirmation(
            Confirmation(
                () => setConfirmation(null),
                async (response) => {
                    alert('Your awnser was ' + response)
                    if (response == '123') {
                        setConfirmation(null)
                        alert('Confirmed!')
                    }
                },
                {
                    title: 'Confirmation',
                    input: true,
                    showCancel: true,
                    confirmBtnText: 'Confirm',
                    confirmBtnBsStyle: 'success',
                    placeholder: 'Input here',
                    validationMsg: 'Invalid!',
                    validationRegex: /^123$/,
                    content: content
                }
            )
        )
    }

    return (
        <Card className='shadow'>
            <CardHeader tag='h4'>
                Confirmation Example
            </CardHeader>
            <CardBody>
                <h4>component <strong>{`<Confirmation/>`}</strong></h4>
                <p><strong>It's needled that has a div with id="portal" in your public index.html</strong></p>
                <p>Usage:</p>
                <pre>{`
                const [ confirmation, setConfirmation ] = useState(null)

                const getConfirmation = () => {
                    setConfirmation(
                        Confirmation(
                            // Cancel callback
                            () => setConfirmation(null),

                            // Confirm callback
                            async () => {
                                setConfirmation(null)
                                // Your code here...
                            },

                            {
                                ... // config object
                            }
                        )
                    )
                }
                `}</pre>
                <p>Config options:</p>
                <pre>{`
                {
                    title: string,
                    input: boolean,
                    showCancel: boolean,
                    confirmBtnText: string,
                    confirmBtnBsStyle: string in ["default","primary","link","info","success","warning","danger"],
                    placeholder: string,
                    validationMsg: string,
                    validationRegex: regex,
                    content: React Component
                }
                `}</pre>
                <button
                    className='btn btn-primary'
                    onClick={ getConfirmation }
                >Try it</button>
                { confirmation }
            </CardBody>
        </Card>
    )
}