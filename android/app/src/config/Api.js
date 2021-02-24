import axios from 'axios';

const swapi = axios.create({
    //endpoint base
    baseURL: 'https://swapi.dev/api'
});

export default swapi;

