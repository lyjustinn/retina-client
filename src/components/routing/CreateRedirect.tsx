import React from 'react';
import { Redirect } from 'react-router';

interface CreateRedirectProps {
    auth : {
        auth : boolean | undefined
        id : number
    },
    Component : React.FC<any>
}

const CreateRedirect: React.FC<CreateRedirectProps> = ({auth,Component}) => {
    if (auth.auth === undefined) return <> </>
    else if (auth.auth === true) return <Redirect to={`/user/${auth.id}`}/>
    else return <Component />
}
export default CreateRedirect;