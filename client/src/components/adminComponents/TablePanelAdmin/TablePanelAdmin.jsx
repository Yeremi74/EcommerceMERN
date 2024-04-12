import PropTypes from 'prop-types';
import './TablePanelAdmin.css';
import { useEffect, useState } from 'react';
import Row from '../row/Row';
import { useEcommerceContext } from '../../../context/Context';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const TablePanelAdmin = ({
  data,
  setCategory,
  setCollection,
  sort,
  setSort,
  params,
}) => {
  const [opened, setOpened] = useState('');

  const {
    // products,
    // getProducts,
    collections,
    getCollections,
    category,
    getCategory,
    filterProduct,
  } = useEcommerceContext();

  useEffect(() => {
    getCategory();
    getCollections();
  }, []);
  // console.log(data[0]);
  // console.log(collection);

  const handlePrice = () => {
    if (sort === -1) {
      setSort(1);
      return;
    }
    setSort(-1);
  };
  return (
    <div className='tablePanelAdminContainer'>
      <table className='w-full'>
        <thead className='h-16'>
          <tr>
            <th>Nombre</th>
            <th>ID</th>
            {params === 'products' && (
              <>
                <th>
                  <div className='category'>
                    <select
                      className='text-gray-600'
                      name='category'
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value='all' className='text-gray-600'>
                        Todas las categorias
                      </option>
                      {category.map((category) => (
                        <option value={category.title} key={category._id}>
                          {category.title.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                </th>
                <th>
                  <div className='category'>
                    <select
                      className='text-gray-600'
                      name='collections'
                      onChange={(e) => setCollection(e.target.value)}
                    >
                      <option value='all' className='dark:text-gray-600'>
                        Todas las colecciones
                      </option>
                      {collections.map((collections) => (
                        <option value={collections.title} key={collections._id}>
                          {collections.title.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                </th>
                <th className='price'>
                  <span
                    className='flex items-center gap-3 px-3'
                    onClick={handlePrice}
                  >
                    <p>Precio</p>
                    <span className='dark:bg-gray-900 bg-gray_custom-200 text-white font-bold block p-1 cursor-pointer rounded'>
                      {sort === -1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                  </span>
                </th>
                {/* <th>Tipo</th> */}
                <th>Disponible</th>
              </>
            )}
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody className=' '>
          {data.map((article) => (
            <Row
              article={article}
              key={article._id}
              opened={opened}
              setOpened={setOpened}
              params={params}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TablePanelAdmin.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TablePanelAdmin;
