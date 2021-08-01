import { Image, ImageUpdateRequest, NewImageText } from '../../types/imageTypes';
import Cookies from 'universal-cookie';
import { getRequest, bodyRequest } from '../createFetch';

const cookies = new Cookies();

export const createImage = async (imageDesc : NewImageText, image : File) : Promise<boolean> => {
    const formData = new FormData();

    formData.append("file", image);
    formData.append("imageData", JSON.stringify(imageDesc));
    return bodyRequest("/api/image/", formData, true);
}

export const getImage = async(id : number) : Promise<Image> => {
    return getRequest<Image>("/api/image/" + id);
}

export const searchImages = async(query: string) : Promise<Array<Image>> => {
    return getRequest<Array<Image>>("/api/image/search/" + query);
}

export const updateImage = async (data : ImageUpdateRequest, id : number) : Promise<boolean> => {
    const body = JSON.stringify(data);
    return bodyRequest("/api/image/" + id, body, true, true);
}

export const deleteImage = async (id : number) => {

    const jwt : string = cookies.get("authToken");
    const fetchOptions = {
        method: 'delete',
        headers: {
            "Authorization": "Bearer " + jwt
        },
    }

    const url: string = process.env.REACT_APP_API_URL ?? "";

    if (!url) throw new Error("invalid API url");

    const response = await fetch(url + "/api/image/" + id, fetchOptions);

    if (!response.ok) throw new Error(`Fetch failed, status code ${response.status}`);

    return true;
}