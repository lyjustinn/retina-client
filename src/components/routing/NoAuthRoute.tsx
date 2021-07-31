import React, {useEffect, useState} from 'react';
import { Route } from 'react-router';
import { getCurrentUser } from '../../util/user/userService';
import CreateRedirect from '../../util/createRedirect';

interface NoAuthRouteProps {
    component : React.FC<any>,
    path : string,
    exact? : boolean
}

const NoAuthRoute: React.FC<NoAuthRouteProps> = ({component, path, exact}) => {
    const [authObj, setAuth] = useState<{
        auth : boolean | undefined,
        id : number
    }>({
        auth : undefined,
        id : 0
    })

    useEffect(() => {
        getCurrentUser()
        .then( res => setAuth({
            auth : true,
            id : res.id
        }))
        .catch( e => setAuth({
            auth : false,
            id : -1
        }));
    },[])

    return <Route exact={exact} path={path} component={CreateRedirect(authObj, component, true)}/>;
}
export default NoAuthRoute;