const API_URL =  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
export const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:4000"


export default async function fetchAPI(endpoint, options = {}) {
    try {

        console.log("url", `${API_URL}/${endpoint}`)
        const res = await fetch(`${API_URL}/${endpoint}`,   { ...options} );
        if (!res.ok) {
            throw new Error(`API request failed with status ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        throw err;
    }
}
