import axios from 'axios';

export const getCollectionRequest = async () =>
  await axios.get('http://localhost:5000/api/collections');
