import { FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useEcommerceContext } from '../../context/Context';
import { useEffect, useState } from 'react';

const Search = ({ setSearchState, setIsScrollDisabled }) => {
  const { getSearch } = useEcommerceContext();
  const [searchTextApi, setSearchTextApi] = useState('pan');
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const objFunc = async () => {
      const res = await getSearch(searchTextApi);
      console.log(res);
      // setProduct(res);
    };
    objFunc();
  }, []);

  return (
    <div className='absolute w-full -bottom-14 z-30 bg-white left-0 flex items-center px-10 h-14 gap-4'>
      <FaSearch className='h-6 w-6' />
      <input
        type='text'
        className='w-full outline-none'
        placeholder='BUSCA...'
        onChange={(e) => setSearchTextApi(e.target.value)}
      />
      <IoClose
        className='h-6 w-6 cursor-pointer'
        onClick={() => {
          setSearchState(false);
          setIsScrollDisabled(false);
        }}
      />
    </div>
  );
};

export default Search;
