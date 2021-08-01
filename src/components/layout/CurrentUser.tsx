import React, { useReducer, useEffect } from 'react';
import { useLocation } from 'react-router';
import { User } from '../../types/userTypes';
import { getCurrentUser } from '../../util/user/userService';

interface CurrentUserProps {
    children : React.ReactNode
}

const initialState: { currentUser : null | User } = { currentUser : null};

const reducer = (state : { currentUser : null | User }, payload : null | User ) => {
    return {
        currentUser : payload
    }
}

interface ContextValue {
    currentUser : User | null
    updateUser : (logout?: boolean) => Promise<boolean>
}

const CurrentUser: React.FC<CurrentUserProps> = ({children}) => {

    const [userState, dispatch] = useReducer(reducer, initialState);
    const location = useLocation();

    const updateUser = async (logout? : boolean) : Promise<boolean> => {
        if (logout) {
            dispatch(null)
            return Promise.resolve(false);
        } 

        try {
            let res = await getCurrentUser();
            let user = res;
            dispatch(user);
            return true;
        } catch (e) {
            dispatch(null);
            return false;
        }
    }

    useEffect(()=> {
        async function check() {
            try {
                let res = await getCurrentUser();
                let user = res;
                dispatch(user);
            } catch (e) {
                dispatch(null);
            }
        }

        check();
    },[location.pathname])

    return (
        <CurrentUserContext.Provider value={{ currentUser: userState.currentUser, updateUser}}>
            { children }
        </CurrentUserContext.Provider>
    );
}

export const CurrentUserContext = React.createContext<ContextValue>({ currentUser: null, updateUser : () => Promise.resolve(true)});

export default CurrentUser;