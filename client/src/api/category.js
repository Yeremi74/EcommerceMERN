import axios from 'axios';

export const getCategoryRequest = async () =>
  await axios.get('http://localhost:5000/api/category');
