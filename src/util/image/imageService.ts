import { NewImageText } from '../../types/imageTypes';
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

export const getImage = async(id : number) => {

    const url: string = process.env.REACT_APP_API_URL ?? "";

    if (!url) return null;

    const response = await fetch(url + "/api/image/" + id);

    if (!response.ok) return null;

    return response.json();

}