import axios from 'axios';

const swapi = axios.create({
    //endpoint 1 films
    baseURL: 'https://swapi.dev/api'
});

export default swapi;

