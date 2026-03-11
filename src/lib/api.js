const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://portfolio-api-0cc6.onrender.com/api";
export const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL || "https://portfolio-api-0cc6.onrender.com";


export default async function fetchAPI(endpoint, options = {}) {
    try {

        console.log("url", `${API_URL}/${endpoint}`)
        const res = await fetch(`${API_URL}/${endpoint}`, {
            ...options,
            cache: "no-store",
            next: { revalidate: 0 },
        });
        if (!res.ok) {
            throw new Error(`API request failed with status ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        throw err;
    }
}
