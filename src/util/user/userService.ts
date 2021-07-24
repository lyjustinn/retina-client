import { User, NewUser, AuthRequest } from '../../types/userTypes';
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

export const getCurrentUser = async () => {
    const jwt : string = cookies.get("authToken");
    const url: string = process.env.REACT_APP_API_URL ?? "";

    const fetchOptions = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        }
    }

    if (!url || !jwt) return null;

    const response = await fetch(url + "/api/user/current", fetchOptions);

    if (!response.ok) return null;

    return response.json();
}

export const getUser = async (id : number) : Promise<User> => {

    const url: string = process.env.REACT_APP_API_URL ?? "";

    if (!url) throw new Error("invalid API url");

    const response = await fetch(url + "/api/user/" + id);

    if (!response.ok) throw new Error(`Fetch failed, status code ${response.status}`);

    return response.json();
}