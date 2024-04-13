import axios from 'axios';
export const getCategoryRequest = async () =>
  await axios.get(`http://localhost:3001/api/category`);
