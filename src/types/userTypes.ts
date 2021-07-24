interface UserInterface {
    id: number
    username: string,
    name: string
    description: string | null
}

export type User = UserInterface | null;

export interface NewUser {
    username: string,
    name: string,
    password: string
}

export interface AuthRequest {
    username: string,
    password: string
}