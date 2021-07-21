import { User, NewUser, AuthRequest } from '../../types/retinaTypes';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const createUser = async (newUser : NewUser) => {
    const body = JSON.stringify(newUser);
    
    const fetchOptions = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    }

    const url: string = process.env.REACT_APP_API_URL ?? "";

    if (!url) return false;

    const response = await fetch(url + "/api/user/", fetchOptions);
    return response.ok;
}

export const login = async(authRequest: AuthRequest) => {
    const body = JSON.stringify(authRequest);
    
    const fetchOptions = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    }

    const url: string = process.env.REACT_APP_API_URL ?? "";

    if (!url) return false;

    const response = await fetch(url + "/api/user/authenticate", fetchOptions);
    
    if(!response.ok) return false;

    const parsedResponse = await response.json();

    let deadline = new Date();
    deadline.setHours(deadline.getHours() + 2);

    cookies.set("authToken", parsedResponse.jwt, { 
        path: "/",
        expires: deadline
    });

    return true;
}

export const getUser = () : User => {
    return {
        username: "johndoe@email.com",
        name: "john doe"
    }
}