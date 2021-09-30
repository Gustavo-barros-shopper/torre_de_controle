import React, { Fragment, useState } from 'react';
import { Home } from 'react-feather';
import { Link } from 'react-router-dom';

const PageHeader = props => {
    const [page, setPage] = useState(props);

    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='page-header'>
                    <div className='row'>
                        <div className='col'>
                            <div className='page-header-left'>
                                <h3>{ page.title }</h3>
                                <ol className='breadcrumb pull-right'>
                                    <li className='breadcrumb-item'>
                                        <Link to='/'>
                                            <Home/>
                                        </Link>
                                    </li>
                                    {page.parent && <li className='breadcrumb-item'>{ page.parent }</li>}
                                    <li className='breadcrumb-item active'>{ page.title }</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PageHeader
