import axios from 'axios';
const backend = import.meta.env.VITE_BACKEND_URL;
export const getCollectionRequest = async () =>
  await axios.get(`${backend}api/collections`);
