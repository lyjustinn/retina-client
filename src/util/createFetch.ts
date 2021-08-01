import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const getRequest = async <T> (path : string, authorized? : boolean) : Promise<T> => {
    const jwt : string = cookies.get("authToken");
    const url: string = process.env.REACT_APP_API_URL ?? "";

    const fetchOptions = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ""
        }
    }

    if (!url) throw new Error("invalid API url");
    else if (authorized && !jwt) throw new Error("No JWT");

    if (authorized) fetchOptions.headers.Authorization = 'Bearer ' + jwt;
    
    const response = await fetch(url + path, fetchOptions);

    if (!response.ok) throw new Error(`Fetch failed, status code ${response.status}`);

    return response.json();
}

export const bodyRequest = async  (path : string, body : string | FormData, authorized? : boolean, put? : boolean) : Promise<boolean> => {
    const fetchOptions = {
        method: put ? "put" : "put",
        headers: {
            'Content-Type': "application/json",
            "Authorization": ""
        },
        body: body
    }

    const jwt : string = cookies.get("authToken");
    const url: string = process.env.REACT_APP_API_URL ?? "";

    if (!url) throw new Error("invalid API url");
    else if (authorized && !jwt) throw new Error("No JWT");

    if (authorized) fetchOptions.headers.Authorization = 'Bearer ' + jwt;

    const response = await fetch(url + path, fetchOptions);
    if (!response.ok) throw new Error(`Fetch failed, status code ${response.status}`);

    return true;
}