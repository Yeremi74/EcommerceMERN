import PropTypes from 'prop-types';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { FaTrash, FaEdit } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useEcommerceContext } from '../../../context/Context';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './row.css';

const Row = ({ article, opened, setOpened, params }) => {
  const { deleteProduct, setEstado } = useEcommerceContext();
  const location = useLocation();
  const path = location.pathname;
  const rutaEspecifica = path.substring('/admin/'.length);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const handleOpened = () => {
    if (opened === article._id) {
      setOpened('');
    } else {
      setOpened(article._id);
    }
  };
  const handleDelete = () => {
    toast(
      (t) => (
        <div>
          <p>Deseas eliminar? {article._id}</p>
          <div className='flex gap-2'>
            <button
              className='p-1 uppercase bg-red-500 hover:bg-red-700'
              onClick={() => {
                deleteProduct(rutaEspecifica, article._id);
                toast.dismiss(t.id);
                setEstado(true);
                setTimeout(() => {
                  setEstado(false);
                }, 1000);
              }}
            >
              Eliminar
            </button>
            <button
              className='p-1 uppercase bg-green-500 hover:bg-green-700'
              onClick={() => toast.dismiss(t.id)}
            >
              Cancelar
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: 'rgb(39, 39, 39)',
          color: 'white',
        },
      }
    );
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <tr
      key={article._id}
      className='border-solid border-b border-t  dark:border-white-900 border-gray-900  text-center'
    >
      <td className='p-3'>
        <div className='flex items-center gap-4'>
          <img
            src={article.image?.url}
            alt={`Imagen de ${article.title}`}
            className='min-w-20 h-20 rounded-full'
          />
          <p>{article.title}</p>
        </div>
      </td>
      <td className='hidden sm:table-cell'>{article._id.slice(0, 10)}...</td>
      {params === 'products' && (
        <td className='hidden sm:table-cell'>{article.category}</td>
      )}
      {params === 'products' && (
        <td className='hidden sm:table-cell'>{article.collectionType}</td>
      )}
      {params === 'products' && (
        <td className='hidden sm:table-cell'>{article.price}$</td>
      )}
      {params === 'products' && (
        <td>
          <p
            className={`${
              article.available ? ' bg-green_custom-100' : 'bg-red-500'
            } p-4 rounded-md font-bold hidden sm:table-cell`}
          >
            {article.available ? 'Disponible' : 'No Disponible'}
          </p>
        </td>
      )}
      <td id='options'>
        <div className='flex justify-center cursor-pointer relative w-fit my-0 mx-auto '>
          {opened === article._id && (
            <div
              className={`absolute bg-white p-2 -top-14 -right-5 transition-opacity duration-75 ease-in flex flex-col gap-2 items-center rounded ${
                isVisible ? 'fade-in' : ''
              }`}
            >
              <FaTrash className='text-red-500' onClick={handleDelete} />
              <FaEdit
                className='text-green-500'
                onClick={() =>
                  navigate(`/admin/create/${rutaEspecifica}/${article._id}`)
                }
              />
            </div>
          )}
          <HiOutlineDotsVertical
            onClick={() => handleOpened(article._id)}
            className='w-6 h-6'
          />
        </div>
      </td>
    </tr>
  );
};
Row.propTypes = {
  article: PropTypes.object.isRequired,
  opened: PropTypes.string.isRequired,
  setOpened: PropTypes.func.isRequired,
  params: PropTypes.string.isRequired,
};

export default Row;
