import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import GridArticle from '../../components/clientComponents/GridArticle';
import { useEcommerceContext } from '../../context/Context';
import Navbar from '../../components/clientComponents/Navbar';
import { motion } from 'framer-motion';

const Catalog = () => {
  const params = useParams();

  const { filterProduct, getCategory, category } = useEcommerceContext();
  const [product, setProduct] = useState([]);
  const [catFilter, setCatFilter] = useState('all');
  const [showMenu, setShowMenu] = useState(false);
  const [sortFilter, setSortFilter] = useState(1);
  const [collectFilter, setCollectionFilter] = useState('all');

  useEffect(() => {
    const objFunc = async () => {
      console.log(params.collections);
      await setCollectionFilter(
        params.collections === '*' ? 'all' : params.collections
      );
      const res = await filterProduct(catFilter, collectFilter, sortFilter);
      setProduct(res);
      await getCategory();
    };
    objFunc();
  }, [
    catFilter,
    params.collections,
    params,
    setCollectionFilter,
    collectFilter,
    sortFilter,
  ]);

  const [width, setWidth] = useState(0);

  const slider_wrapper = useRef();

  useEffect(() => {
    setWidth(
      slider_wrapper.current.scrollWidth - slider_wrapper.current.offsetWidth
    );
  }, []);
  return (
    <div>
      <Navbar />
      <div className=''>
        <h2 className='uppercase font-bold py-4 px-6 flex justify-between'>
          <p>
            {collectFilter === 'all' ? 'todos los productos' : collectFilter}
          </p>
          <div
            className='relative font-normal after:content-[""] after:h-custom after:w-full after:absolute after:-bottom-0.5 after:bg-gray-900 after:block cursor-pointer'
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <p>sort</p>
            {showMenu && (
              <div className='absolute bg-white right-0 text-xs w-28'>
                <p onClick={() => setSortFilter(1)}>precio, menor a mayor</p>
                <p onClick={() => setSortFilter(-1)}>precio, mayor a menor</p>
              </div>
            )}
          </div>
        </h2>
        <div className=''>
          <motion.div ref={slider_wrapper} whileTap={{ cursor: 'grabbing' }}>
            <motion.div
              drag='x'
              dragConstraints={{ right: 0, left: -width }}
              className='flex gap-2 '
            >
              {category.map((cat) => (
                <div
                  key={cat.title}
                  className={`uppercase cursor-pointer py-2 ${
                    catFilter == cat.title
                      ? 'underline decoration-black text-black'
                      : 'text-gray-500'
                  }`}
                  onClick={() => {
                    cat.title == 'todos los productos'
                      ? setCatFilter('all')
                      : setCatFilter(cat.title);
                  }}
                >
                  <p className='block min-w-40 text-center'>{cat.title}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <section
          className={
            product.length == 0 ? 'flex justify-center items-center h-72' : ''
          }
        >
          {product.length == 0 ? (
            <div className='uppercase font-bold flex flex-col items-center'>
              <p>no hay productos</p>
              <span>:(</span>
            </div>
          ) : (
            <GridArticle products={product} title='' />
          )}
        </section>
      </div>
    </div>
  );
};

export default Catalog;
