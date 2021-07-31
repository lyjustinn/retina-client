import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Route } from 'react-router';
import CreateRedirect from '../../util/createRedirect';
import { CurrentUserContext } from '../layout/CurrentUser';

interface AuthRouteProps {
    component : React.FC<any>
    path : string,
    exact?: boolean,
    authorized : () => Promise<boolean | undefined>
}

const AuthRoute: React.FC<AuthRouteProps> = ({component, path, exact, authorized}) => {
    const [auth, setAuth] = useState<boolean | undefined>(undefined);
    const { currentUser } = useContext(CurrentUserContext);

    useEffect(() => {
        if (currentUser) setAuth(true);
        else setAuth(false);
    },[currentUser])

    return (<Route exact={exact} path={path} component={CreateRedirect({ auth, id : -1 }, component, false)}/>);
}
export default AuthRoute;