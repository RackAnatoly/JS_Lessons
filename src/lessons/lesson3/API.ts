import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'fca3748';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
