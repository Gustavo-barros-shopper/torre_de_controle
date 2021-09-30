import d from './states_cities.json';

let states = [];
let cities = [];
let states_cities = {};

d.estados.map(estado => {
    states.push({value: estado.sigla, name: estado.nome});
    states_cities[estado.sigla] = [];

    estado.cidades.map(cidade => {
        states_cities[estado.sigla].push({value: cidade, name: cidade});
        cities.push({value: cidade, name: cidade, uf: estado.sigla});
    });
});

export {states, cities, states_cities};