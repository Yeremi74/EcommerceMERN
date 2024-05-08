import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useEcommerceContext } from '../../../context/Context';
import { FaSpinner } from 'react-icons/fa6';
import '../productsForm/switch.css';

import Aside from '../Aside';
const OtherForm = () => {
  const params = useParams();
  const {
    createProduct,
    getUniqueProduct,
    updateProduct,
    getCategory,
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
        const product = await getUniqueProduct(
          params.id.toLowerCase(),
          params.product
        );
        setProduct(product.data);
      }
    })();
    getCategory();
    getCollections();
  }, [params.product, params.id]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);
      if (params.product) {
        await updateProduct(params.id, params.product, {
          ...product,
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

  return (
    <div className='flex capitalize '>
      <Aside />

      <div className='p-6 m-auto rounded-md my-7 sm:w-5/6 '>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col items-center gap-3 text-black dark:text-white'>
            <div className='flex w-full sm:w-1/2'>
              <div className='flex flex-col w-full gap-4'>
                <label htmlFor='title'>
                  Titulo
                  <span className='text-2xl font-bold text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  name='title'
                  placeholder='Titulo'
                  value={product.title || product.username || ''}
                  onChange={(e) => {
                    setProduct({ ...product, title: e.target.value });
                  }}
                  className='w-full h-10 p-3 text-black border border-gray-400 border-solid rounded-lg dark:text-white'
                />
              </div>
            </div>
            <div className='flex flex-wrap items-center justify-center w-full gap-4 px-2 py-6 m-auto my-10 rounded sm:w-1/2'>
              <div className='flex flex-col gap-3 p-2 overflow-hidden text-white rounded-lg sm:w-2/5'>
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
                  <img src={product.previewUrl} alt='' className='w-full' />
                ) : (
                  <img src={product.image?.url} alt='' className='w-full' />
                )}
              </div>
            </div>
          </div>

          <button
            type='submit'
            disabled={loading}
            className={`my-0 m-auto  block p-3 rounded-md hover:dark:bg-gray-900 transition-all disabled:cursor-not-allowed bg-gray_custom-200 text-white hover:bg-gray_custom-300
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
  );
};

export default OtherForm;
