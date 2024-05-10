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
  const [data, setData] = useState([]);

  const {
    // collections,
    getCollections,
    // category,
    getCategory,
    filterProduct,
    getUsers,
    estado,
    setEstado,
  } = useEcommerceContext();

  const dataContext = useEcommerceContext();

  // console.log(dataContext[params.id.toLowerCase()]);
  useEffect(() => {
    const asyncFunc = async () => {
      if (params.id === 'products') {
        const res = await filterProduct(categoryOption, collection, sort);
        setData(res);
      }

      if (params.id === 'Collections') {
        const res = await getCollections();
        setData(res);

        return;
      }

      if (params.id === 'Category') {
        const res = await getCategory();
        setData(res);

        return;
      }
      if (params.id === 'Users') {
        const res = await getUsers();
        setData(res);
        return;
      }
    };

    asyncFunc();
  }, [params.id, params, categoryOption, collection, sort]);

  // console.log(darkMode);
  return (
    <div className='flex'>
      <Aside />
      <div className='flex w-full'>
        <div className='w-20 sm:w-16'></div>
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
            data={data}
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
