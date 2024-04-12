import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import {
  createRequest,
  deleteRequest,
  filterRequest,
  getProductsRequest,
  getUniqueProductRequest,
  updateProductRequest,
} from '../api/products';
import { getCollectionRequest } from '../api/colleciones';
import { getCategoryRequest } from '../api/category';

const context = createContext();

export const useEcommerceContext = () => {
  const contexto = useContext(context);
  return contexto;
};

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [collections, setCollections] = useState([]);
  const [category, setCategory] = useState([]);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  const getProducts = async () => {
    const res = await getProductsRequest();
    setProducts(res.data);
    return res.data;
  };

  const getCollections = async () => {
    const res = await getCollectionRequest();
    setCollections(res.data);
  };

  const getCategory = async () => {
    const res = await getCategoryRequest();
    setCategory(res.data);
  };

  const createProduct = async (product, id) => {
    try {
      console.log(product);
      const res = await createRequest(product, id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (params, id) => {
    await deleteRequest(params, id);
  };

  const getUniqueProduct = async (params, id) => {
    const res = await getUniqueProductRequest(params, id);
    return res;
  };

  const updateProduct = async (params, id, product) => {
    await updateProductRequest(params, id, product);
  };

  const filterProduct = async (cat, collec, sort) => {
    // console.log(cat);
    // console.log(collec);
    // console.log(sort);
    const res = await filterRequest(cat, collec, sort);
    // console.log(res);
    setProducts(res.data);
    return res.data;
  };

  return (
    <context.Provider
      value={{
        products,
        collections,
        category,
        getProducts,
        getCollections,
        getCategory,
        createProduct,
        deleteProduct,
        getUniqueProduct,
        updateProduct,
        darkMode,
        setDarkMode,
        filterProduct,
        isScrollDisabled,
        setIsScrollDisabled,
      }}
    >
      {children}
    </context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
