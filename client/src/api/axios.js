import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-ecommercemern.onrender.com/api',
  withCredentials: true,
});

export default instance;
