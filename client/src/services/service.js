import axios from "axios";
import {getAcessToken} from "./service.auth";

const api = axios.create({
    baseURL: "http://localhost:8081/api"
});

api.interceptors.request.use(async config => {
    const token = getAcessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;