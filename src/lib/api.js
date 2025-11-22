const API_URL = process.env.NEXT_PUBLIC_API_URL
export const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL

export default async function fetchAPI(endpoint, options = {}) {
    try {
        const res = await fetch(`${API_URL}/${endpoint}`, options);
        if (!res.ok) {
            throw new Error(`API request failed with status ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        throw err;
    }
}
