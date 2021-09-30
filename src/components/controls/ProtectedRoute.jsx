import React, {useState, useEffect} from 'react';
import Unauthorized from '../../pages/Unauthorized';
import {checkPermission} from '../../util/user';
import { Route } from 'react-router-dom';

const ProtectedRoute = ({component: Component, roles, ...rest}) => {
    const [allowed, setAllowed] = useState(false);
    const getPermission = async () => {
        const permission = await checkPermission(roles);
        setAllowed(permission);
    };

    useEffect(()=>{
        getPermission();
    });

    return (
        <Route {...rest} render={(props) => (
            allowed
            ? <Component {...props} />
            : <Unauthorized/>
        )} />
    );
};

export default ProtectedRoute;