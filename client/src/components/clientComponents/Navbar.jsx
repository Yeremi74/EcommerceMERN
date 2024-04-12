import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CollectionMenu from './CollectionMenu';
import Search from './Search';
import { useEcommerceContext } from '../../context/Context';

const Navbar = () => {
  const { isScrollDisabled, setIsScrollDisabled } = useEcommerceContext();

  const [isHoveringCollections, setIsHoveringCollections] = useState(false);
  const [searchState, setSearchState] = useState(false);

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
    <nav className='h-20 '>
      <div className='fixed h-20 w-full z-20'>
        <div className='flex justify-between h-10 items-center px-4 bg-white relative'>
          <div className='flex gap-3 h-full items-center'>
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
              to='/admin'
              className='uppercase cursor-pointer hover:text-black text-gray-600 font-bold'
            >
              about us
            </Link>
          </div>
          <div>
            <Link to='/' className='uppercase cursor-pointer font-bold'>
              nude project
            </Link>
          </div>
          <div className='flex gap-3'>
            {/* <p className='uppercase cursor-pointer hover:text-gray-600 font-bold text-black'>
              country
            </p>
            <p className='uppercase cursor-pointer hover:text-gray-600 font-bold text-black'>
              esp &gt;
            </p> */}
            <p
              className='uppercase cursor-pointer hover:text-gray-600 font-bold text-black'
              onClick={() => {
                setSearchState(!searchState);
                setIsScrollDisabled(!isScrollDisabled);
              }}
            >
              search
            </p>
            <p className='uppercase cursor-pointer hover:text-gray-600 font-bold text-black'>
              cart (0)
            </p>
          </div>
        </div>
        <div className='bg-red-950 h-10 flex justify-center items-center relative'>
          <p className='text-center text-white text-xs'>
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
        </div>
      </div>
      {searchState && (
        <div className='fixed w-screen h-screen bg-custom_transparent z-10 top-0'></div>
      )}
    </nav>
  );
};

export default Navbar;
