import PropTypes from 'prop-types';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { FaTrash, FaEdit } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useEcommerceContext } from '../../../context/Context';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './row.css';

const Row = ({ article, opened, setOpened, params }) => {
  const { deleteProduct, setEstado, setUsers } = useEcommerceContext();
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
                if (article.rol !== 'admin') {
                  deleteProduct(rutaEspecifica.toLowerCase(), article._id);
                }

                toast.dismiss(t.id);
                setEstado(true);
                setUsers();
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
      className='text-center border-t border-b border-gray-300 border-solid '
    >
      {article.title && (
        <td>
          {article.title && (
            <img
              src={article.image?.url}
              alt={`Imagen de ${article.title}`}
              className='h-20 rounded-full min-w-20'
            />
          )}
        </td>
      )}
      <td className='p-3'>
        <div className='flex items-center gap-4 min-h-28'>
          <p>{article.username || article.title.slice(0, 15)}</p>
        </div>
      </td>
      <td className='hidden sm:table-cell'>{article._id.slice(0, 10)}...</td>
      {params === 'Users' && (
        <td className=' sm:table-cell'>{article.email?.slice(0, 7)}...</td>
      )}

      {params === 'Users' && <td className=' sm:table-cell'>{article?.rol}</td>}

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
          <div className='text-center'>
            <p
              className={`${
                article.available
                  ? ' bg-green_custom-100 text-green_custom-300'
                  : 'bg-red_custom-100 text-red_custom-300'
              } p-4 w-44 text-sm rounded-md font-bold hidden sm:table-cell`}
            >
              {article.available ? 'Disponible' : 'No Disponible'}
            </p>
          </div>
        </td>
      )}
      <td id='options'>
        <div className='relative flex justify-center mx-auto my-0 cursor-pointer w-fit '>
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
