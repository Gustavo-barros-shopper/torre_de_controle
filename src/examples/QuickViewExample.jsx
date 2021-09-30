import React, { useState, useEffect } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from 'reactstrap'
import QuickView, { Context } from '../components/customized/QuickView'

const MyQuickViewComp = ({
    isQuickViewOpen,
    setIsQuickViewOpen
}) => {
    useEffect(() => {
        setIsQuickViewOpen(true)
    }, [])

    return (
        <h3 style={{ marginTop: '110px' }}>Example!</h3>
    )
}

const MyQuickView = () => (
    <QuickView>
        <Context.Consumer>
        {
            ({ isQuickViewOpen, setIsQuickViewOpen }) => (
                <MyQuickViewComp
                    isQuickViewOpen={isQuickViewOpen}
                    setIsQuickViewOpen={setIsQuickViewOpen}
                />
            )
        }
        </Context.Consumer>
    </QuickView>
)

export default () => {
    const [ quickView, setQuickView ] = useState(false)

    return (
        <Card className='shadow'>
            <CardHeader tag='h4'>
                Confirmation Example
            </CardHeader>
            <CardBody>
                <h4>component <strong>{`<QuickView/>`}</strong></h4>
                <p><strong>It's needled that has a div with id="quick-view" in your public index.html</strong></p>
                <p>Usage:</p>
                <pre>{`
                import QuickView, { Context } from '../components/customized/QuickView'

                const MyQuickViewComp = ({
                    isQuickViewOpen,
                    setIsQuickViewOpen
                }) => {
                    useEffect(() => {
                        setIsQuickViewOpen(true)
                    }, [])
                
                    return (
                        <h3 style={{ marginTop: '110px' }}>Example!</h3>
                    )
                }
                
                const MyQuickView = () => (
                    <QuickView>
                        <Context.Consumer>
                        {
                            ({ isQuickViewOpen, setIsQuickViewOpen }) => (
                                <MyQuickViewComp
                                    isQuickViewOpen={isQuickViewOpen}
                                    setIsQuickViewOpen={setIsQuickViewOpen}
                                />
                            )
                        }
                        </Context.Consumer>
                    </QuickView>
                )

                export default () => {
                    const [ quickView, setQuickView ] = useState(null)

                    return (
                        { quickView && <MyQuickView /> }
                    )
                }
                `}</pre>
                <button
                    className='btn btn-primary'
                    onClick={ () => setQuickView(!quickView) }
                >Try it</button>
                { quickView && <MyQuickView /> }
            </CardBody>
        </Card>
    )
}