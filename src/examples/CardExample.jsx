import React from 'react'
import {
    CardContent,
    CardContentHeader,
    CardContentBody,
    CardContentFooter
} from '../components/customized/Card'

export default () => (
    <CardContent className='shadow'>
        <CardContentHeader tag='h4'>
            Card Example
        </CardContentHeader>
        <CardContentBody>
            <h4>Components</h4>
            <ul>
                <li>CardContent</li>
                <li>CardContentHeader</li>
                <li>CardContentBody</li>
                <li>CardContentFooter</li>
            </ul>
            <br />
            <h4>Responsive</h4>
            <p>condition: <strong>@media (max-width: 1440)</strong></p>
            <br />
        </CardContentBody>
        <CardContentFooter>
            <p>It's needled to be within a tag containing the class <strong>page-body</strong></p>
        </CardContentFooter>
    </CardContent>
)