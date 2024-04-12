import axios from 'axios';

export const getCategoryRequest = async () =>
  await axios.get('${BACKEND_URL}api/category');
