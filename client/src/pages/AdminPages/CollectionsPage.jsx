import { useEffect } from 'react';
import { useEcommerceContext } from '../../context/Context';
import { Link } from 'react-router-dom';
import './AdminPages.css';
import AdminPanelNavbar from '../../components/adminComponents/AdminPanelNavBar/AdminPanelNavbar';
import TablePanelAdmin from '../../components/adminComponents/TablePanelAdmin/TablePanelAdmin';
const CollectionsPage = () => {
  const { collections, getCollections } = useEcommerceContext();
  useEffect(() => {
    getCollections();
  }, [getCollections]);

  return (
    <div className='container'>
      <div className='sidebar'>
        <AdminPanelNavbar />
      </div>
      <div className='content'>
        <h1>Colecciones</h1>
        <div className='create'>
          <Link to='/admin/create/collections'>Crear Coleccion</Link>
        </div>
        <TablePanelAdmin data={collections} />
      </div>
    </div>
  );
};

export default CollectionsPage;
