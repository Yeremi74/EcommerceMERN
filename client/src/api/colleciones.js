import axios from 'axios';
export const getCollectionRequest = async () =>
  await axios.get(`https://backend-ecommercemern.onrender.com/collections`);
