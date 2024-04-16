import { useEffect, useState } from 'react';
import { useEcommerceContext } from '../../context/Context';
import { Link, useParams } from 'react-router-dom';
import TablePanelAdmin from '../../components/adminComponents/TablePanelAdmin/TablePanelAdmin';

import NavbarAdmin from '../../components/adminComponents/NavbarAdmin';
const ProductsPage = () => {
  const params = useParams();
  const [categoryOption, setCategory] = useState('all');
  const [collection, setCollection] = useState('all');
  const [sort, setSort] = useState(-1);
  const [hola, setHola] = useState([]);

  const {
    collections,
    getCollections,
    category,
    getCategory,
    filterProduct,
    estado,
    setEstado,
  } = useEcommerceContext();

  const data = useEcommerceContext();

  // console.log(data[params.id.toLowerCase()]);
  useEffect(() => {
    const asyncFunc = async () => {
      if (params.id === 'products') {
        const res = await filterProduct(categoryOption, collection, sort);

        setHola(res);
      }

      if (params.id === 'Collections') {
        setHola(data['collections']);
        return getCollections();
      }

      if (params.id === 'Category') {
        setHola(data['category']);
        return getCategory();
      }
    };

    asyncFunc();
  }, [
    params.id,
    estado,
    category,
    collections,
    categoryOption,
    collection,
    sort,
  ]);

  // console.log(darkMode);
  return (
    <div>
      <NavbarAdmin />

      <div className='flex capitalize dark:bg-gray-800'>
        {/* <div className='w-44 h-screen hidden sm:block'>
          <AdminPanelNavbar />
        </div> */}
        <div className=' m-auto w-full my-7 sm:w-5/6  dark:bg-gray-700 bg-gray_custom-100 dark:text-white rounded-md sm:p-6 p-2 text-black mt-20'>
          <header className=' flex justify-between items-center p-5 dark:bg-gray-800 bg-gray_custom-200 rounded'>
            <h1 className='font-bold'>{params.id}</h1>

            <div className=' flex flex-col items-center gap-4 '>
              <Link
                to={`/admin/create/${params.id}`}
                className='dark:bg-gray-700 text-white p-2 rounded-md bg-gray_custom-300 hover:bg-gray_custom-400'
              >
                Crear {params.id}
              </Link>
            </div>
          </header>

          <TablePanelAdmin
            data={hola}
            setCategory={setCategory}
            setCollection={setCollection}
            setSort={setSort}
            params={params.id}
            sort={sort}
            setEstado={setEstado}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
