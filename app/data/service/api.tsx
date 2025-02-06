import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api";

const apiClient = axios
    .create({
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json',
        }
    });

export default apiClient;

export const fetchCharacterById = (number: number) => {
    return apiClient.get(`/character/${number}`);
};

export const fetchCharacterByPage = (page: number) => {
    return apiClient.get(`/character/?page=${page}`);
};