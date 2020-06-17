//imports
import axios from 'axios';

//api configuration
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;