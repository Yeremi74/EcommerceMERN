import { Link } from 'react-router-dom';

const AdminPanelNavbar = () => {
  return (
    <div className='flex flex-col bg-gray-700 h-screen w-44 fixed text-3xl text-center justify-around items-center text-red-600'>
      <Link
        className='hover:bg-gray-400 transition-all w-fit p-2 rounded-md'
        to='/'
      >
        Inicio
      </Link>
      <Link
        className='hover:bg-gray-400 transition-all w-fit p-2 rounded-md'
        to='/admin/products'
      >
        Products
      </Link>
      <Link
        className='hover:bg-gray-400 transition-all w-fit p-2 rounded-md'
        to='/admin/Collections'
      >
        Collections
      </Link>
      <Link
        className='hover:bg-gray-400 transition-all w-fit p-2 rounded-md'
        to='/admin/Category'
      >
        Categories
      </Link>
    </div>
  );
};

export default AdminPanelNavbar;
