import { useNavigate, useParams } from 'react-router-dom';
// import * as Yup from 'yup';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useEffect, useState } from 'react';
// import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa6';

import { useEcommerceContext } from '../../../context/Context';
import AdminPanelNavbar from '../AdminPanelNavBar/AdminPanelNavbar';
import './switch.css';
import DarkModeButton from '../darkModeButton/DarkModeButton';

const ProductsForm = () => {
  const params = useParams();
  const {
    createProduct,
    getUniqueProduct,
    updateProduct,
    getCategory,
    category,
    collections,
    getCollections,
  } = useEcommerceContext();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState({
    title: '',
    description: '',
    sizes: [],
    category: '',
    price: 0,
    oldprice: 0,
    available: true,
    collectionType: '',
    type: '',
    image: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
  });
  // console.log(product);
  useEffect(() => {
    (async () => {
      if (params.product) {
        const product = await getUniqueProduct(params.id, params.product);
        setProduct(product.data);
      }
    })();
    getCategory();
    getCollections();
  }, [params.product, params.id]);
  // console.log(product.sizes);
  const sizesJoined = product.sizes.flatMap((size) => size.split(','));
  // console.log(sizesJoined);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);
      if (params.product) {
        await updateProduct(params.id, params.product, {
          ...product,
          sizes: sizesJoined,
        });
      } else {
        createProduct(product, params.id);
      }

      navigate(`/admin/${params.id}`);
    } catch (error) {
      console.log();
    } finally {
      setLoading(false);
    }
  };

  // console.log(sizesJoined); // Resultado: 's,xl,xs,m,l'
  const sizesCovertes = product.sizes.join(',');
  // console.log(sizesCovertes.split(','));
  // console.log(sizesCovertes.split(',').filter((size) => size !== 's'));
  const handleOptionChange = () => {
    if (product.available) return setProduct({ ...product, available: false });
    setProduct({ ...product, available: true });
  };
  return (
    <div>
      <div className='flex capitalize dark:bg-gray-800 '>
        <div className='w-44 h-screen'>
          <AdminPanelNavbar />
        </div>
        <div className='m-auto my-7 w-5/6  dark:bg-gray-700 bg-gray_custom-100 rounded-md p-6 '>
          <form onSubmit={handleSubmit}>
            <DarkModeButton />
            <div className='flex flex-col gap-3 items-center text-black dark:text-white'>
              <div className='flex  w-1/2'>
                <div className='flex flex-col gap-4 w-full'>
                  <label htmlFor='title'>
                    Titulo
                    <span className='text-red-500 font-bold text-2xl'>*</span>
                  </label>
                  <input
                    type='text'
                    name='title'
                    placeholder='Titulo'
                    value={product.title || ''}
                    onChange={(e) => {
                      setProduct({ ...product, title: e.target.value });
                    }}
                    className='dark:text-white text-black dark:bg-gray-800 h-10 p-3 rounded-lg w-full'
                  />
                </div>
              </div>

              <div className='flex w-1/2'>
                <div className='w-full flex flex-col gap-4'>
                  <p>
                    <span>Tallas:</span>
                  </p>

                  <div className='flex gap-4  justify-between w-full'>
                    <label className='flex items-center gap-2'>
                      <input
                        type='checkbox'
                        className='h-5 w-5'
                        name='xs'
                        checked={
                          params.product
                            ? sizesCovertes
                                .toLowerCase()
                                .split(',')
                                .map((size) => size.trim()) // Aplica trim() a cada elemento del arreglo
                                .includes('xs')
                            : product.sizes
                                .map((size) => size.trim()) // Aplica trim() a cada elemento del arreglo
                                .includes('xs')
                        }
                        onChange={(e) => {
                          const { name, checked } = e.target;
                          if (checked) {
                            if (!sizesCovertes.split(',').includes(name)) {
                              setProduct({
                                ...product,
                                sizes: [...product.sizes, name],
                              });
                            }
                          } else {
                            setProduct({
                              ...product,
                              sizes: sizesCovertes
                                .split(',')
                                .filter((size) => size !== name),
                            });
                          }
                        }}
                      />
                      <span>xs</span>
                    </label>
                    <label className='flex items-center gap-2'>
                      <input
                        type='checkbox'
                        className='h-5 w-5'
                        name='s'
                        checked={
                          params.product
                            ? sizesCovertes
                                .toLowerCase()
                                .split(',')
                                .map((size) => size.trim()) // Aplica trim() a cada elemento del arreglo
                                .includes('s')
                            : product.sizes
                                .map((size) => size.trim()) // Aplica trim() a cada elemento del arreglo
                                .includes('s')
                        }
                        onChange={(e) => {
                          const { name, checked } = e.target;
                          if (checked) {
                            if (!sizesCovertes.split(',').includes(name)) {
                              setProduct({
                                ...product,
                                sizes: [...product.sizes, name],
                              });
                            }
                          } else {
                            setProduct({
                              ...product,
                              sizes: sizesCovertes
                                .split(',')
                                .filter((size) => size !== name),
                            });
                          }
                        }}
                      />
                      <span>s</span>
                    </label>
                    <label className='flex items-center gap-2'>
                      <input
                        type='checkbox'
                        className='h-5 w-5'
                        name='m'
                        checked={
                          params.product
                            ? sizesCovertes
                                .toLowerCase()
                                .split(',')
                                .map((size) => size.trim()) // Aplica trim() a cada elemento del arreglo
                                .includes('m')
                            : product.sizes
                                .map((size) => size.trim()) // Aplica trim() a cada elemento del arreglo
                                .includes('m')
                        }
                        onChange={(e) => {
                          const { name, checked } = e.target;
                          if (checked) {
                            if (!sizesCovertes.split(',').includes(name)) {
                              setProduct({
                                ...product,
                                sizes: [...product.sizes, name],
                              });
                            }
                          } else {
                            setProduct({
                              ...product,
                              sizes: sizesCovertes
                                .split(',')
                                .filter((size) => size !== name),
                            });
                          }
                        }}
                      />
                      <span>m</span>
                    </label>
                    <label className='flex items-center gap-2'>
                      <input
                        type='checkbox'
                        className='h-5 w-5'
                        name='l'
                        checked={
                          params.product
                            ? sizesCovertes
                                .toLowerCase()
                                .split(',')
                                .map((size) => size.trim()) // Aplica trim() a cada elemento del arreglo
                                .includes('l')
                            : product.sizes
                                .map((size) => size.trim()) // Aplica trim() a cada elemento del arreglo
                                .includes('l')
                        }
                        onChange={(e) => {
                          const { name, checked } = e.target;
                          if (checked) {
                            if (!sizesCovertes.split(',').includes(name)) {
                              setProduct({
                                ...product,
                                sizes: [...product.sizes, name],
                              });
                            }
                          } else {
                            setProduct({
                              ...product,
                              sizes: sizesCovertes
                                .split(',')
                                .filter((size) => size !== name),
                            });
                          }
                        }}
                      />
                      <span>l</span>
                    </label>
                    <label className='flex items-center gap-2'>
                      <input
                        type='checkbox'
                        className='h-5 w-5'
                        name='xl'
                        checked={
                          params.product
                            ? sizesCovertes
                                .toLowerCase()
                                .split(',')
                                .map((size) => size.trim()) // Aplica trim() a cada elemento del arreglo
                                .includes('xl')
                            : product.sizes
                                .map((size) => size.trim()) // Aplica trim() a cada elemento del arreglo
                                .includes('xl')
                        }
                        onChange={(e) => {
                          const { name, checked } = e.target;
                          if (checked) {
                            if (!sizesCovertes.split(',').includes(name)) {
                              setProduct({
                                ...product,
                                sizes: [...product.sizes, name],
                              });
                            }
                          } else {
                            setProduct({
                              ...product,
                              sizes: sizesCovertes
                                .split(',')
                                .filter((size) => size !== name),
                            });
                          }
                        }}
                      />
                      <span>xl</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 w-1/2'>
                <div className='flex flex-col gap-4 w-full'>
                  <label htmlFor='category'>Categorias</label>
                  <select
                    name='category'
                    value={product.category || ''}
                    onChange={(e) =>
                      setProduct({ ...product, category: e.target.value })
                    }
                    className='dark:text-white text-black dark:bg-gray-800 h-10 rounded-lg w-full'
                  >
                    <option value='' disabled>
                      Selecciona una categoria
                    </option>
                    {category.map((category) => (
                      <option value={category.title} key={category._id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex flex-col gap-4 w-full'>
                  <label htmlFor='collectionType'>Coleccion</label>
                  <select
                    name='collectionType'
                    value={product.collectionType || ''}
                    onChange={(e) =>
                      setProduct({ ...product, collectionType: e.target.value })
                    }
                    className='dark:text-white text-black dark:bg-gray-800 h-10 rounded-lg w-full'
                  >
                    <option value='' disabled>
                      Selecciona una coleccion
                    </option>
                    {collections.map((collection) => (
                      <option value={collection.title} key={collection._id}>
                        {collection.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='flex gap-4 w-1/2  flex-col'>
                <label htmlFor='available'>Disponible</label>
                <div className='checkbox-wrapper-51'>
                  <input
                    id='cbx-51'
                    type='checkbox'
                    checked={product.available}
                    onChange={handleOptionChange}
                  />
                  <label className='toggle' htmlFor='cbx-51'>
                    <span>
                      <svg viewBox='0 0 10 10' height='10px' width='10px'>
                        <path d='M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z'></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              {/* <div>
              <label htmlFor='type'>tipo</label>
              <select
                name='type'
                value={product.type || ''}
                onChange={(e) =>
                  setProduct({ ...product, type: e.target.value })
                }
              >
                <option value=''>Seleccione una opción</option>
                <option value='Option 1'>Option 1</option>
                <option value='Option 2'>Option 2</option>
                <option value='Option 3'>Option 3</option>
              </select>
            </div> */}
              <div className='flex gap-4 w-1/2'>
                <div className='flex flex-col gap-4 w-full'>
                  <label htmlFor='price'>Precio</label>
                  <input
                    type='number'
                    name='price'
                    placeholder='Precio actual'
                    value={product.price || 0}
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }
                    className='dark:text-white text-black dark:bg-gray-800 h-10 p-3 rounded-lg w-full'
                  />
                </div>
                <div className='flex flex-col gap-4 w-full '>
                  <label htmlFor='oldprice'>Precio antiguo</label>
                  <input
                    type='number'
                    name='oldprice'
                    placeholder='Precio antiguo'
                    value={product.oldprice || 0}
                    onChange={(e) =>
                      setProduct({ ...product, oldprice: e.target.value })
                    }
                    className='dark:text-white text-black dark:bg-gray-800 h-10 p-3 rounded-lg w-full'
                  />
                </div>
              </div>
              <div className='flex w-1/2'>
                <div className='flex flex-col gap-4 w-full'>
                  <label htmlFor='description'>Descripcion</label>
                  <textarea
                    name='description'
                    value={product.description || ''}
                    placeholder='Descripcion'
                    onChange={(e) =>
                      setProduct({ ...product, description: e.target.value })
                    }
                    rows={6}
                    className='dark:text-white text-black dark:bg-gray-800 p-3 rounded-lg w-full'
                  />
                </div>
              </div>
            </div>
            <div className='flex dark:bg-gray-800 flex-wrap w-1/2 my-10 m-auto justify-center items-center gap-4 py-6 rounded bg-gray_custom-200'>
              <div className='w-2/5 bg-gray-700 text-white rounded-lg overflow-hidden flex flex-col gap-3 p-2'>
                <input
                  type='file'
                  className='w-full'
                  name='image'
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        setProduct({
                          ...product,
                          image: file,
                          previewUrl: reader.result,
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                {product.previewUrl ? (
                  <img src={product.previewUrl} alt='' className='h-72' />
                ) : (
                  <img src={product.image?.url} alt='' className='h-72' />
                )}
              </div>
              <div className='w-2/5 bg-gray-700 text-white rounded-lg overflow-hidden flex flex-col gap-3 p-2'>
                <input
                  type='file'
                  className='w-full '
                  name='image'
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        setProduct({
                          ...product,
                          image2: file,
                          previewUrl2: reader.result,
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                {product.previewUrl2 ? (
                  <img src={product.previewUrl2} alt='' className='h-72' />
                ) : (
                  <img src={product.image2?.url} alt='' className='h-72' />
                )}
              </div>
              <div className='w-2/5 bg-gray-700 text-white rounded-lg overflow-hidden flex flex-col gap-3 p-2'>
                <input
                  type='file'
                  className='w-full '
                  name='image'
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        setProduct({
                          ...product,
                          image3: file,
                          previewUrl3: reader.result,
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                {product.previewUrl3 ? (
                  <img src={product.previewUrl3} alt='' className='h-72' />
                ) : (
                  <img src={product.image3?.url} alt='' className='h-72' />
                )}
              </div>
              <div className='w-2/5 bg-gray-700 text-white rounded-lg overflow-hidden flex flex-col gap-3 p-2'>
                <input
                  type='file'
                  className='w-full '
                  name='image'
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        setProduct({
                          ...product,
                          image4: file,
                          previewUrl4: reader.result,
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                {product.previewUrl4 ? (
                  <img src={product.previewUrl4} alt='' className='h-72' />
                ) : (
                  <img src={product.image4?.url} alt='' className='h-72' />
                )}
              </div>
              <div className='w-2/5 bg-gray-700 text-white rounded-lg overflow-hidden flex flex-col gap-3 p-2'>
                <input
                  type='file'
                  className='w-full '
                  name='image'
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        setProduct({
                          ...product,
                          image5: file,
                          previewUrl5: reader.result,
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                {product.previewUrl5 ? (
                  <img src={product.previewUrl5} alt='' className='h-72' />
                ) : (
                  <img src={product.image5?.url} alt='' className='h-72' />
                )}
              </div>
            </div>

            <button
              type='submit'
              disabled={loading}
              className={`my-0 m-auto dark:bg-gray-800 block p-3 rounded-md hover:dark:bg-gray-900 transition-all disabled:cursor-not-allowed bg-gray_custom-200 text-white hover:bg-gray_custom-300
                `}
            >
              {loading ? (
                <FaSpinner className={loading ? 'rotate-animation' : ''} />
              ) : (
                'Guardar'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductsForm;
