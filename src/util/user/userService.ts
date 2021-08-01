import { User, NewUser, AuthRequest, UpdateRequest, UserProfile } from '../../types/userTypes';
import Cookies from 'universal-cookie';
import { getRequest, bodyRequest } from '../createFetch';

const cookies = new Cookies();

export const createUser = async (newUser : NewUser) => {
    const body = JSON.stringify(newUser);
    return bodyRequest("/api/user/", body);
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

    if (!url) throw new Error("invalid API url");

    const response = await fetch(url + "/api/user/authenticate", fetchOptions);
    
    if(!response.ok) throw new Error(`Fetch failed, status code ${response.status}`);

    const parsedResponse = await response.json();

    let deadline = new Date();
    deadline.setHours(deadline.getHours() + 2);

    cookies.set("authToken", parsedResponse.jwt, { 
        path: "/",
        expires: deadline
    });

    return true;
}

export const getCurrentUser = async () : Promise<User> => {
    return getRequest<User>("/api/user/current", true);
}

export const getUser = async (id : number) : Promise<User> => {
    return getRequest<User>("/api/user/" + id);
}

export const updateUser = async (id : number, data : UpdateRequest) : Promise<boolean> => {
    const body = JSON.stringify(data);
    return bodyRequest("/api/user/" + id, body, true);
}

export const getUserProfile = async (id : number) : Promise<UserProfile> => {
    return getRequest<UserProfile>("/api/user/images/" + id);
}

export const getCurrentUserProfile = async () : Promise<UserProfile> => {
    return getRequest<UserProfile>("/api/user/current/images", true);
}