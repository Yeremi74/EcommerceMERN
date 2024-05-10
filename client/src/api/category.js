import axios from 'axios';
export const getCategoryRequest = async () =>
  await axios.get(`https://backend-ecommercemern.onrender.com/category`);
