import axios from 'axios';

const swapiFilms = axios.create({
    //endpoint 1 films
    baseURL: 'https://swapi.dev/api'
});


// const swapiPlanets = axios.create({
//     //endpoint 1 planets
//     baseURL: 'https://swapi.dev/api/people/'
// });

export default swapiFilms;

