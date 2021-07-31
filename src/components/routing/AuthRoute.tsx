import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import CreateRedirect from '../../util/createRedirect';

interface AuthRouteProps {
    component : React.FC<any>
    path : string,
    exact?: boolean,
    authorized : () => Promise<boolean | undefined>
}

const AuthRoute: React.FC<AuthRouteProps> = ({component, path, exact, authorized}) => {
    const [auth, setAuth] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        async function onMount () {
            try {
                await authorized();
                setAuth(true);
            } catch (e) {
                setAuth(false);
            }
        }
        onMount();
    },[authorized])

    return (<Route exact={exact} path={path} component={CreateRedirect({ auth, id : -1 }, component, false)}/>);
}
export default AuthRoute;