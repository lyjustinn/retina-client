import { TagSimplified } from "./tagTypes";
import { User } from "./userTypes";

export interface NewImageText {
    name: string,
    description: string
}

interface ImageInterface {
    id: number,
    name: string,
    description: string | null,
    owner: User,
    resourceName: string
    tags : Array<TagSimplified>
}

export type Image = ImageInterface;

export interface ImageUpdateRequest {
    name : string,
    description : string
}