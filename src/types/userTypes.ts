import { Image } from "./imageTypes";

interface UserInterface {
    id: number
    firstName : string
    lastName : string
    name: string
    bio: string | null
}

export type User = UserInterface;

export interface NewUser {
    username: string
    firstName : string
    lastName : string
    password: string
}

export interface AuthRequest {
    username: string,
    password: string
}

export interface UpdateRequest {
    firstName : string
    lastName : string
    bio: string
    password : string
}

export interface UserProfile {
    id : number
    firstName : string
    lastName : string
    name : string
    bio : string
    images : Array<Image>
}