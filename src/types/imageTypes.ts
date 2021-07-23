export interface NewImageText {
    name: string,
    description: string
}

interface ImageInterface {
    name: string,
    description: string,
    owner: object,
    resourceLink: string
}

export type Image = ImageInterface | null