import { Image, NewImageText } from '../../types/imageTypes';
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