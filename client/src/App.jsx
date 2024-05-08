import AdminPage from './pages/AdminPages/AdminPage';
import PostForm from './pages/AdminPages/PostForm/PostForm';
import NotFound from './pages/NotFound';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/Context';
import HomePage from './pages/ClientPages/HomePage';
import ProductsPage from './pages/AdminPages/ProductsPage';
import { Toaster } from 'react-hot-toast';
import Product from './pages/ClientPages/Product';
import Catalog from './pages/ClientPages/Catalog';
import CollectionPages from './pages/ClientPages/CollectionPages';
import CatalogSearch from './pages/ClientPages/CatalogSearch';
import CatalogCategory from './pages/ClientPages/CatalogCategory';
import './App.css';
import LoginPage from './pages/ClientPages/LoginPage';
import RegisterPage from './pages/ClientPages/RegisterPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoutes from './pages/ClientPages/ProtectedRoutes';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <ContextProvider>
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              <Route path='/' element={<HomePage />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/catalog/:collections' element={<Catalog />} />
              <Route path='/catalog/cat/:cat' element={<CatalogCategory />} />
              <Route
                path='/catalog/search/:search'
                element={<CatalogSearch />}
              />
              <Route path='/collections' element={<CollectionPages />} />

              <Route element={<ProtectedRoutes />}>
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/admin/:id' element={<ProductsPage />} />
                <Route path='/admin/create/:id' element={<PostForm />} />
                <Route
                  path='/admin/create/:id/:product'
                  element={<PostForm />}
                />
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
            <Toaster />
          </ContextProvider>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
