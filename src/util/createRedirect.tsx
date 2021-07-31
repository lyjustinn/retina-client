import React from 'react';
import { Redirect } from 'react-router';

interface AuthObj {
    auth : boolean | undefined
    id : number
}

const CreateRedirect  = (authObj : AuthObj, Component : React.FC<any>, noAuth : boolean) : React.FC<any> => {

    const ToProfile = () => <Redirect to={`/user/${authObj.id}`}/>

    const ToLogin = () => <Redirect to={`/login`}/>

    if (authObj.auth === undefined) return () => <></>
    else if (authObj.auth === true && noAuth) return ToProfile
    else if (authObj.auth === true && !noAuth) return Component
    else if (authObj.auth === false && !noAuth) return ToLogin
    else return Component
}
export default CreateRedirect;