import { useEffect } from 'react';
import { useEcommerceContext } from '../../context/Context';
import { Link } from 'react-router-dom';
import TablePanelAdmin from '../../components/adminComponents/TablePanelAdmin/TablePanelAdmin';

const CategoriesPage = () => {
  const { category, getCategory } = useEcommerceContext();
  useEffect(() => {
    getCategory();
  }, [getCategory]);

  return (
    <div className='container'>
      <div className='sidebar'>
        <AdminPanelNavbar />
      </div>
      <div className='content'>
        <h1>Categorias</h1>
        <div className='create'>
          <Link to='/admin/create/category'>Crear Categoria</Link>
        </div>
        <TablePanelAdmin data={category} />
      </div>
    </div>
  );
};

export default CategoriesPage;
