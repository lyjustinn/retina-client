import React from 'react';
import { Redirect } from 'react-router';

interface CreateRedirectProps {
    authObj : {
        auth : boolean | undefined
        id : number
    },
    Component : React.FC<any>,
    noAuth : boolean
}

const CreateRedirect: React.FC<CreateRedirectProps> = ({authObj, Component, noAuth}) => {
    if (authObj.auth === undefined) return <> </>
    else if (authObj.auth === true && noAuth) return <Redirect to={`/user/${authObj.id}`}/>
    else if (authObj.auth === true && !noAuth) return <Component />
    else if (authObj.auth === false && !noAuth) return <Redirect to={`/login`}/>
    else return <Component />
}
export default CreateRedirect;