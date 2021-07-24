interface UserInterface {
    id: number
    username: string,
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