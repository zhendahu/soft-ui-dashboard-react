import Axios from "axios";
import { API_SERVER } from "config/constant";

const axios = Axios.create({
    baseURL: `${API_SERVER}`,
    headers: {"Content-Type": "application/json"},
});

axios.interceptors.request.use(
    (config) => {
        return Promise.resolve(config);
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => Promise.resolve(responds),
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;