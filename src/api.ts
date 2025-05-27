import axios from "axios";
import { store } from "@/features/store/store"; 

const useApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

useApi.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

useApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                 window.location.href = "/login";
            } else if (error.response.status === 404) {
                console.error("Resource not found");
            } else if (error.response.status >= 500) {
                console.error("Server error, please try again later");
            }
        } else if (error.request) {
            console.error("No response received from the server");
        } else {
            console.error("Error in setting up the request:", error.message);
        }
        return Promise.reject(error);
    }
);

export default useApi;
