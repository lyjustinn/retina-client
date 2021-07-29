import { Image } from './imageTypes';

interface TagInterface  {
    id: number,
    name: string,
    images: Array<Image>
}

export type Tag = TagInterface;

export interface TagSimplified {
    id : number,
    name : string
}