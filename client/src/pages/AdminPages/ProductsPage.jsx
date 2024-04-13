import { useEffect, useState } from 'react';
import { useEcommerceContext } from '../../context/Context';
import { Link, useParams } from 'react-router-dom';
import DarkModeButton from '../../components/adminComponents/darkModeButton/DarkModeButton';
import TablePanelAdmin from '../../components/adminComponents/TablePanelAdmin/TablePanelAdmin';
// import './AdminPages.css';
import AdminPanelNavbar from '../../components/adminComponents/AdminPanelNavBar/AdminPanelNavbar';
const ProductsPage = () => {
  const params = useParams();
  const [categoryOption, setCategory] = useState('all');
  const [collection, setCollection] = useState('all');
  const [sort, setSort] = useState(-1);
  // console.log(params);

  const {
    products,
    getProducts,
    // collections,
    getCollections,
    // category,
    getCategory,
    darkMode,
    setDarkMode,
    filterProduct,
  } = useEcommerceContext();

  const data = useEcommerceContext();
  // console.log(products);
  // console.log(data);
  const dataPosition = data[params.id.toLowerCase()];
  // console.log(data[params.id.toLowerCase()]);
  // console.log(dataPosition);

  useEffect(() => {
    const objFunc = async () => {
      if (params.id === 'products') {
        return filterProduct(categoryOption, collection, sort);
      }

      if (params.id === 'Collections') {
        // console.log(`es ${params.id}`);
        return getCollections();
      }
      if (params.id === 'Category') {
        return getCategory();
      }
    };
    objFunc();
    console.log(params.id);
    console.log(data[params.id.toLowerCase()]);
  }, [categoryOption, collection]);

  // console.log(darkMode);
  return (
    <div>
      <div className='flex capitalize dark:bg-gray-800'>
        <div className='w-44 h-screen'>
          <AdminPanelNavbar />
        </div>
        <div className=' m-auto my-7 w-5/6  dark:bg-gray-700 bg-gray_custom-100 dark:text-white rounded-md p-6 text-black'>
          <header className=' flex justify-between items-center p-5 dark:bg-gray-800 bg-gray_custom-200 rounded'>
            <h1 className='font-bold'>{params.id}</h1>

            <div className=' flex flex-col items-center gap-4 '>
              {/* <DarkModeButton /> */}
              <Link
                to={`/admin/create/${params.id}`}
                className='dark:bg-gray-700 text-white p-2 rounded-md bg-gray_custom-300 hover:bg-gray_custom-400'
              >
                Crear {params.id}
              </Link>
            </div>
          </header>

          <TablePanelAdmin
            data={dataPosition}
            setCategory={setCategory}
            setCollection={setCollection}
            setSort={setSort}
            params={params.id}
            sort={sort}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
