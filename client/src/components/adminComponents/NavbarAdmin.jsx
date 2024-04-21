import { useEffect, useState } from 'react';
import DarkModeButton from './darkModeButton/DarkModeButton';
import { GiHamburgerMenu } from 'react-icons/gi';
import AdminPanelNavbar from './AdminPanelNavBar/AdminPanelNavbar';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);
  return (
    <nav className='bg-white -mt-1'>
      <div className='fixed w-full z-20 bg-white'>
        <div className='flex justify-between p-4 items-center  bg-white relative'>
          <div
            className='block w-full '
            onClick={() => {
              setActiveMobileMenu(!activeMobileMenu);
            }}
          >
            <GiHamburgerMenu className='cursor-pointer h-12 w-12' />
          </div>

          <div className='w-full  justify-center flex'>
            <Link to='/' className='uppercase cursor-pointer font-bold '>
              Inicio
            </Link>
          </div>
          <div className='w-full  flex justify-end'>
            <DarkModeButton />
          </div>
        </div>
        <div className='relative'>
          <section
            className={`h-screen w-screen absolute top-0 -translate-x-full ${
              activeMobileMenu && 'translate-x-0'
            } transition-all z-40`}
            onClick={(e) => {
              const navbarElement = document.querySelector(
                '.admin-panel-navbar'
              ); // Ejemplo de selector
              if (
                e.target === navbarElement ||
                navbarElement.contains(e.target)
              ) {
                e.stopPropagation();
              } else {
                setActiveMobileMenu(false);
              }
            }}
          >
            <AdminPanelNavbar setActiveMobileMenu={setActiveMobileMenu} />
          </section>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
