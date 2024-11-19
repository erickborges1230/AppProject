import axios from 'axios';

// https://viacep.com.br/ws/01001000/json/
//URL completa, no entanto preciso passar apenas a URL de base para a BASEURL

const ApiCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export { ApiCep };
