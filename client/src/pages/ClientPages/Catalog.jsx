import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import GridArticle from '../../components/clientComponents/GridArticle';
import { useEcommerceContext } from '../../context/Context';
import Navbar from '../../components/clientComponents/Navbar';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

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

  //! : setCatFilter(cat.title);
  return (
    <div>
      <Navbar />
      <div className='flex min-h-96'>
        {/* <h2 className='uppercase font-bold py-4 px-6 flex justify-between'>
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
        </h2> */}
        <div className='w-1/4 relative'>
          <div className='sticky top-32 block w-11/12 my-0 mx-auto'>
            <p className='px-4'>{product.length} items</p>
            <ChakraProvider>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem className='py-3'>
                  <h2>
                    <AccordionButton>
                      <Box
                        as='span'
                        flex='1'
                        textAlign='left'
                        className='capitalize text-black font-bold'
                      >
                        category
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  {category.map((cat) => (
                    <div key={cat._id}>
                      <AccordionPanel
                        pb={4}
                        className='text-gray-500 p-0'
                        onClick={() => setCatFilter(cat.title)}
                      >
                        <label className='capitalize gap-2 flex hover:font-bold'>
                          <input type='radio' name='cat' id='' />
                          {cat.title == 'all'
                            ? 'todos los productos'
                            : cat.title}
                        </label>
                      </AccordionPanel>
                    </div>
                  ))}
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='left'>
                        precio
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='left'>
                        coleccion
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </ChakraProvider>
          </div>
        </div>

        <section
          className={
            product.length == 0 ? 'flex justify-center items-center h-72' : ''
          }
        >
          {product.length == 0 ? (
            <div className='uppercase font-bold flex flex-col items-center m'>
              <p>no hay productos</p>
              <span>:(</span>
            </div>
          ) : (
            <GridArticle products={product} title='' />
          )}
        </section>
      </div>
      <div className='h-96'></div>
      <div className='h-96'></div>
      <div className='h-96'></div>
    </div>
  );
};

export default Catalog;
