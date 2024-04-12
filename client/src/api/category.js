import axios from 'axios';

export const getCategoryRequest = async () =>
  await axios.get(
    'https://ecommerce-mern-bim8mkj12-yeremi74s-projects.vercel.app/api/category'
  );
