interface RetinaUser {
    username: string,
    name: string
}

export type User = RetinaUser | null

export interface NewUser {
    username: string,
    name: string,
    password: string
}

export interface AuthRequest {
    username: string,
    password: string
}