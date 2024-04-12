import axios from 'axios';
const backend = import.meta.env.VITE_BACKEND_URL;
// !GET
export const getProductsRequest = async () =>
  await axios.get(`${backend}/api/products`);

// !DELETE
export const deleteRequest = async (params, id) =>
  await axios.delete(`${backend}/api/${params}/${id}`);

// !GET
export const getUniqueProductRequest = async (params, id) =>
  await axios.get(`${backend}/api/${params}/${id}`);

// !POST
export const createRequest = async (product, id) => {
  console.log(product);
  const form = new FormData();

  for (let key in product) {
    form.append(key, product[key]);
  }

  return await axios.post(`${backend}/api/${id}`, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const filterRequest = async (cat, collec, sort) => {
  return await axios.get(`${backend}/api/products/${cat}/${collec}/${sort}`);
};

// ! PUT
export const updateProductRequest = async (params, id, newFields) => {
  const form2 = new FormData();
  for (let key in newFields) {
    if (
      key === 'image' ||
      key === 'image2' ||
      key === 'image3' ||
      key === 'image4' ||
      key === 'image5'
    ) {
      if (
        newFields[key] !== null &&
        newFields[key] !== undefined &&
        newFields[key] !== '' &&
        newFields[key].toString() !== '[object Object]'
      ) {
        form2.append(key, newFields[key]);
      }
    } else {
      form2.append(key, newFields[key]);
    }
  }
  return await axios.put(`${backend}/api/${params}/${id}`, form2, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
