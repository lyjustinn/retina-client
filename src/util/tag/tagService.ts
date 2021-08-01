import { Tag } from "../../types/tagTypes";
import { getRequest } from "../createFetch";

export const getRandomTags = async () : Promise<Array<Tag>> => {
    return getRequest<Array<Tag>>("/api/tag/sample/9");
}

export const getTag = async (id : number) : Promise<Tag> => {
    return getRequest<Tag>("/api/tag/id/" + id);
}