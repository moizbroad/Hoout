import axios from "axios";
import { getAccessToken } from "./AccessToken";

export const BASE_URL = "http://127.0.0.1:8000/api";
export const authEndpoint = "http://127.0.0.1:8000/";

export const axiosApi = axios.create({
  baseURL: BASE_URL,
});

export const axiosWithCredentials = axios.create({
  baseURL: BASE_URL,
});

axiosWithCredentials.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
