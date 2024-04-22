import { useEffect, useState } from 'react';
import { useEcommerceContext } from '../../context/Context';
import { Link, useParams } from 'react-router-dom';
import TablePanelAdmin from '../../components/adminComponents/TablePanelAdmin/TablePanelAdmin';

import Aside from '../../components/Aside';
const ProductsPage = () => {
  const params = useParams();
  const [categoryOption, setCategory] = useState('all');
  const [collection, setCollection] = useState('all');
  const [sort, setSort] = useState(-1);
  const [hola, setHola] = useState([]);

  const {
    // collections,
    getCollections,
    // category,
    getCategory,
    filterProduct,

    setEstado,
  } = useEcommerceContext();

  const data = useEcommerceContext();

  // console.log(data[params.id.toLowerCase()]);
  useEffect(() => {
    const asyncFunc = async () => {
      console.log('hola');
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

    // category,
    // collections,
    categoryOption,
    collection,
    sort,
  ]);

  // console.log(darkMode);
  return (
    <div className='flex'>
      <Aside />
      <div className='flex capitalize w-full'>
        {/* <div className='w-44 h-screen hidden sm:block'>
          <AdminPanelNavbar />
        </div> */}
        <div className='w-16'></div>
        <div className='w-full m-auto my-0 dark:text-white rounded-md sm:p-6 p-2 text-black '>
          <header className=' flex justify-between items-center p-5 rounded'>
            <Link
              to={`/admin/create/${params.id}`}
              // className='dark:bg-gray-700 text-white p-2 rounded-md hover:bg-gray_custom-400'
              className='font-bold text-2xl'
            >
              Crear {params.id}
            </Link>
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
