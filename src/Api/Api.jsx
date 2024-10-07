// ApiService.jsx
import axios from "axios";

export const Api = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data", error);
        throw error;
    }
};