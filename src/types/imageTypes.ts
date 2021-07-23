import { User } from "./userTypes";

export interface NewImageText {
    name: string,
    description: string
}

interface ImageInterface {
    name: string,
    description: string | null,
    owner: User,
    resourceLink: string
}

export type Image = ImageInterface | null