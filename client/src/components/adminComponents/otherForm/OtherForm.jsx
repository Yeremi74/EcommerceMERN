import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useEcommerceContext } from '../../../context/Context';
import { FaSpinner } from 'react-icons/fa6';
import '../productsForm/switch.css';
import DarkModeButton from '../darkModeButton/DarkModeButton';
import AdminPanelNavbar from '../AdminPanelNavBar/AdminPanelNavbar';

const OtherForm = () => {
  const params = useParams();
  const {
    createProduct,
    getUniqueProduct,
    updateProduct,
    getCategory,
    category,
    collections,
    getCollections,
    darkMode,
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
    <div className='flex capitalize dark:bg-gray-800'>
      <div className='w-44 h-screen'>
        <AdminPanelNavbar />
      </div>
      <div className='m-auto my-7 w-5/6  dark:bg-gray-700 bg-gray_custom-100 rounded-md p-6 '>
        <DarkModeButton />
        <form onSubmit={handleSubmit}>
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
            <div className='flex dark:bg-gray-800 flex-wrap w-1/2 my-10 m-auto justify-center items-center gap-4 py-6 rounded bg-gray_custom-200'>
              <div className='w-1/2 bg-gray-700 text-white rounded-lg overflow-hidden flex flex-col gap-3 p-2'>
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
  );
};

export default OtherForm;
