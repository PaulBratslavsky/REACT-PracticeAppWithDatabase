import axios from 'axios';

export const database = axios.create({
    baseURL: 'http://localhost:3004',
});

