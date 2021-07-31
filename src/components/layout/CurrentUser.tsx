import React, { useEffect, useReducer } from 'react';
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
    updateUser : () => Promise<boolean>
}

const CurrentUser: React.FC<CurrentUserProps> = ({children}) => {

    const [userState, dispatch] = useReducer(reducer, initialState);

    const updateUser = async () : Promise<boolean> => {
        try {
            let res = await getCurrentUser();
            if (!res.ok) dispatch(null);
            let user = await res.json();
            dispatch(user);
            return true;
        } catch (e) {
            dispatch(null);
            return false;
        }
    }

    return (
        <CurrentUserContext.Provider value={{ currentUser: userState.currentUser, updateUser}}>
            { children }
        </CurrentUserContext.Provider>
    );
}

export const CurrentUserContext = React.createContext<ContextValue>({ currentUser: null, updateUser : getCurrentUser});

export default CurrentUser;