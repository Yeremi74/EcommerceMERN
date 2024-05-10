import axios from './axios.js';

// const API = 'https://backend-ecommercemern.onrender.com/api';

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get('/verify');

export const getUsersRequest = () => axios.get('/users');

export const getUniqueRequest = (id) => axios.get(`/users/${id}`);

export const updateUserRequest = (id, user) => {
  return axios.put(`/users/${id}`, user);
};
