import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CollectionMenu from './CollectionMenu';
import Search from './Search';
import { useEcommerceContext } from '../../context/Context';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  const { isScrollDisabled, setIsScrollDisabled } = useEcommerceContext();

  const [isHoveringCollections, setIsHoveringCollections] = useState(false);
  const [searchState, setSearchState] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const handleMouseEnterCollections = () => {
    setIsHoveringCollections(true);
  };

  const handleMouseLeaveCollections = () => {
    setIsHoveringCollections(false);
  };

  useEffect(() => {
    if (isScrollDisabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isScrollDisabled]);

  return (
    <nav className='h-20 bg-white -mt-1'>
      <div className='fixed h-20 w-full z-20 bg-white'>
        <div className='flex justify-between h-10 items-center px-4 bg-white relative'>
          <div
            className='sm:hidden block w-full'
            onClick={() => {
              setIsScrollDisabled(!isScrollDisabled);
              setActiveMobileMenu(!activeMobileMenu);
            }}
          >
            <GiHamburgerMenu />
          </div>

          <div className='gap-3 h-full items-center hidden sm:flex w-full'>
            <Link
              to='/catalog/*'
              className='uppercase cursor-pointer hover:text-black text-gray-600 font-bold'
            >
              shop
            </Link>
            <Link
              className={`uppercase cursor-pointer hover:text-black text-gray-600 font-bold h-full flex items-center ${
                isHoveringCollections ? 'collections-hover' : ''
              }`}
              onMouseEnter={handleMouseEnterCollections}
              onMouseLeave={handleMouseLeaveCollections}
              to='/collections'
            >
              colecciones
            </Link>
            <Link className='uppercase cursor-pointer hover:text-black text-gray-600 font-bold'>
              stores
            </Link>
            <Link
              to='/admin/products'
              className='uppercase cursor-pointer hover:text-black text-gray-600 font-bold'
            >
              admin
            </Link>
          </div>
          <div className='w-full justify-center flex'>
            <Link
              to='/'
              className='uppercase cursor-pointer font-bold w-fullflex justify-center'
            >
              Ecommerce
            </Link>
          </div>
          <div className='flex gap-3 w-full justify-end'>
            <FaSearch
              className='h-6 w-6 sm:hidden block'
              onClick={() => {
                setSearchState(!searchState);
                setIsScrollDisabled(!isScrollDisabled);
              }}
            />
            <p
              className='uppercase cursor-pointer hover:text-gray-600 font-bold text-black hidden sm:block'
              onClick={() => {
                setSearchState(!searchState);
                setIsScrollDisabled(!isScrollDisabled);
              }}
            >
              search
            </p>
            <AiOutlineShopping className='h-6 w-6 sm:hidden block' />
            <p className='uppercase cursor-pointer hover:text-gray-600 font-bold text-black hidden sm:block'>
              cart (0)
            </p>
          </div>
        </div>
        <div className='bg-red-950 flex justify-center items-center relative flex-col'>
          <p className='text-center text-white sm:text-xs text-peque py-4'>
            FREE SHIPPING: NATIONAL OVER 100€ | INTERNATIONAL OVER 200€
          </p>
          {isHoveringCollections && (
            <CollectionMenu
              isHoveringCollections={isHoveringCollections}
              setIsHoveringCollections={setIsHoveringCollections}
            />
          )}
          {searchState && (
            <Search
              setSearchState={setSearchState}
              setIsScrollDisabled={setIsScrollDisabled}
              isScrollDisabled={isScrollDisabled}
            />
          )}
          <section
            className={`bg-white h-screen w-screen absolute top-0 -translate-x-full flex flex-col gap-4 ${
              activeMobileMenu && 'translate-x-0'
            } transition-all z-40`}
          >
            <Link
              to='/catalog/*'
              className='uppercase cursor-pointer hover:text-black text-gray-600 font-bold h-fit'
            >
              shop
            </Link>
            <Link
              className={`uppercase cursor-pointer hover:text-black text-gray-600 font-bold h-full flex items-center  h-fit${
                isHoveringCollections ? 'collections-hover' : ''
              }`}
              to='/collections'
            >
              colecciones
            </Link>
            <Link className='uppercase cursor-pointer hover:text-black text-gray-600 font-bold h-fit'>
              stores
            </Link>
            <Link
              to='/admin/products'
              className='uppercase cursor-pointer hover:text-black text-gray-600 font-bold h-fit'
            >
              admin
            </Link>
          </section>
        </div>
      </div>
      {searchState && (
        <div className='fixed w-screen h-screen bg-custom_transparent z-10 top-0'></div>
      )}
    </nav>
  );
};

export default Navbar;
