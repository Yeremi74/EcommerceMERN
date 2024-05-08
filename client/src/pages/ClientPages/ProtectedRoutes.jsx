import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoutes = () => {
  const { user, isAuthenticated, loading } = useAuth();
  //   console.log(user, isAuthenticated);

  if (loading) return <h1>loading...</h1>;
  if (user.rol !== 'admin') console.log('no es admin');

  if ((!loading && !isAuthenticated) || user.rol !== 'admin')
    return <Navigate to='/' replace />;

  return <Outlet />;
};

export default ProtectedRoutes;
