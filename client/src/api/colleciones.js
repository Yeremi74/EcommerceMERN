import axios from 'axios';
const backend = import.meta.env.VITE_BACKEND_URL;
export const getCollectionRequest = async () =>
  await axios.get(`${VITE_BACKEND_URL || backend}api/collections`);
