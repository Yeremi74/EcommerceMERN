import { useEffect, useState } from 'react';
import { useEcommerceContext } from '../../context/Context';
import { Link, useParams } from 'react-router-dom';
import TablePanelAdmin from '../../components/adminComponents/TablePanelAdmin/TablePanelAdmin';

import Aside from '../../components/adminComponents/Aside';
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
    getUser,
    users,
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
      if (params.id === 'Users') {
        getUser();
        setHola(users);
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
      <div className='flex w-full'>
        {/* <div className='hidden h-screen w-44 sm:block'>
          <AdminPanelNavbar />
        </div> */}
        <div className='w-16'></div>
        <div className='w-full p-2 m-auto my-0 text-black rounded-md dark:text-white sm:p-6 '>
          <header className='flex items-center justify-between p-5 rounded '>
            <Link
              to={`/admin/create/${params.id}`}
              className='p-2 text-2xl font-bold bg-gray-200 rounded-md hover:bg-gray-300'
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
