import { Image, ImageUpdateRequest, NewImageText } from '../../types/imageTypes';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const createImage = async (imageDesc : NewImageText, image : File) => {
    const formData = new FormData();

    formData.append("file", image);
    formData.append("imageData", JSON.stringify(imageDesc));

    const jwt : string = cookies.get("authToken");
    const fetchOptions = {
        method: 'post',
        headers: {
            "Authorization": "Bearer " + jwt
        },
        body: formData
    }

    const url: string = process.env.REACT_APP_API_URL ?? "";

    if (!url) return false;

    const response = await fetch(url + "/api/image/", fetchOptions);
    return response.ok;
}

export const getImage = async(id : number) : Promise<Image> => {

    const url: string = process.env.REACT_APP_API_URL ?? "";

    if (!url) throw new Error("invalid API url");

    const response = await fetch(url + "/api/image/" + id);

    if (!response.ok) throw new Error(`Fetch failed, status code ${response.status}`);

    return response.json();
}

export const searchImages = async(query: string) : Promise<Array<Image>> => {

    const url: string = process.env.REACT_APP_API_URL ?? "";

    if (!url) throw new Error("invalid API url");

    const response = await fetch(url + "/api/image/search/" + query);

    if (!response.ok) throw new Error(`Fetch failed, status code ${response.status}`);

    return response.json();
}

export const updateImage = async (data : ImageUpdateRequest, id : number) => {
    const body = JSON.stringify(data);

    const jwt : string = cookies.get("authToken");
    const fetchOptions = {
        method: 'put',
        headers: {
            "Authorization": "Bearer " + jwt
        },
        body: body
    }

    const url: string = process.env.REACT_APP_API_URL ?? "";

    if (!url) return false;

    const response = await fetch(url + "/api/image/" + id, fetchOptions);
    return response.ok;
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

    if (!url) return false;

    const response = await fetch(url + "/api/image/" + id, fetchOptions);
    return response.ok;
}