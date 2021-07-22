import { NewPhotoText } from '../../types/imageTypes';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const createPhoto = async (photoDesc : NewPhotoText, photo : File) => {
    const formData = new FormData();

    formData.append("file", photo);
    formData.append("imageData", JSON.stringify(photoDesc));

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

export {}