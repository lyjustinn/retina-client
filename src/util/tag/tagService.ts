import { Tag } from "../../types/tagTypes";

export const getRandomTags = async () : Promise<Array<Tag>> => {

    const url: string = process.env.REACT_APP_API_URL ?? "";

    if (!url) throw new Error("invalid API url");

    const response = await fetch(url + "/api/tag/sample/10");

    if (!response.ok) throw new Error(`Fetch failed, status code ${response.status}`);

    return response.json();
}

export const getTag = async (id : number) : Promise<Tag> => {

    const url: string = process.env.REACT_APP_API_URL ?? "";

    if (!url) throw new Error("invalid API url");

    const response = await fetch(url + "/api/tag/id/" + id);

    if (!response.ok) throw new Error(`Fetch failed, status code ${response.status}`);

    return response.json();
}