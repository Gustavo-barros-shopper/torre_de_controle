import { Switch, Route } from 'react-router-dom';

import Orders from '../pages/Orders/Orders';

function Routes() {
    return (
        <>
            <div className="page-wrapper">
            <div className="page-body-wrapper without-header">
            <div className="page-body" style={{ marginTop: '80px' }}>
                <Switch>
                    <Route
                        path="/orders"
                        component={() => (
                            <Orders />
                        )}
                    />
                </Switch>
            </div>
            </div>
        </div>
        </>
    )
}

export default Routes;