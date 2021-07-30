import { Image } from "./imageTypes";

interface UserInterface {
    id: number
    name: string
    bio: string | null
}

export type User = UserInterface;

export interface NewUser {
    username: string,
    name: string,
    password: string
}

export interface AuthRequest {
    username: string,
    password: string
}

export interface UpdateRequest {
    name : string,
    bio: string,
    password : string
}

export interface UserProfile {
    id : number
    name : string,
    bio : string,
    images : Array<Image>
}