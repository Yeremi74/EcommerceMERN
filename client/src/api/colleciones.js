import axios from 'axios';

export const getCollectionRequest = async () =>
  await axios.get('${BACKEND_URL}api/collections');
