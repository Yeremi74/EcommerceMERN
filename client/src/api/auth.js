import axios from './axios.js';

// const API = 'http://localhost:3001/api';

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get('/verify');

export const getUsersRequest = () => axios.get('/users');
