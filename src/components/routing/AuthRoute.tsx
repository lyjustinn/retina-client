import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import CreateRedirect from './CreateRedirect';

interface AuthRouteProps {
    component : React.FC<any>
    path : string,
    exact?: boolean,
    authorized : () => Promise<boolean | undefined>
}

const AuthRoute: React.FC<AuthRouteProps> = ({component, path, exact, authorized}) => {
    const [auth, setAuth] = useState<boolean | undefined>(undefined);

    const CustomRedirect = () => <CreateRedirect noAuth={false} authObj={{auth, id : -1}} Component={component}/> 

    useEffect(() => {
        async function onMount () {
            try {
                let res = await authorized();
                setAuth(true);
            } catch (e) {
                setAuth(false);
            }
        }
        onMount();
    },[])

    return (<Route exact={exact} path={path} component={CustomRedirect}/>);
}
export default AuthRoute;