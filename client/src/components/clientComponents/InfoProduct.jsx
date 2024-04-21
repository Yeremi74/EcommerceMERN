import PropTypes from 'prop-types';
import { TbRulerMeasure } from 'react-icons/tb';
import BtnInfoProduct from './BtnInfoProduct';
import { ClassNames } from '@emotion/react';
import { Link } from 'react-router-dom';

const InfoProduct = ({ product, sizesSelected, setSizesSelected }) => {
  return (
    // <div className='flex p-6'>
    //   <div className='w-full'>
    //     <div className='grid grid-cols-1 sm:grid-cols-2 gap-1 '>
    //       {product.image && (
    //         <img src={product.image.url} alt='' className='w-full' //>
    //       )}
    //       {product.image2 && (
    //         <img src={product.image2.url} alt='' className='w-full' //>
    //       )}
    //       {product.image3 && (
    //         <img src={product.image3.url} alt='' className='w-full' //>
    //       )}
    //       {product.image4 && (
    //         <img src={product.image4.url} alt='' className='w-full' //>
    //       )}
    //       {product.image5 && (
    //         <img src={product.image5.url} alt='' className='w-full' //>
    //       )}
    //     </div>
    //   </div>
    //   <div className='w-1/2 pl-6'>
    //     <div className='bg-white sticky top-0'>
    //       <div className='flex flex-col gap-8 border-b pb-8 border-solid border-gray-300 '>
    //         <div className='flex flex-col gap-1'>
    //           <p className='font-bold uppercase'>{product.title}</p>
    //           <p>${product.price}</p>
    //         </div>
    //         <div className='w-11/12'>{product.description}</div>
    //       </div>
    //       <div className='flex h-32 items-center gap-4 border-b border-solid border-gray-300'>
    //         {product.image && (
    //           <img src={product.image.url} alt='' className='w-12' //>
    //         )}
    //         {product.image2 && (
    //           <img src={product.image2.url} alt='' className='w-12' //>
    //         )}
    //         {product.image3 && (
    //           <img src={product.image3.url} alt='' className='w-12' //>
    //         )}
    //         {product.image4 && (
    //           <img src={product.image4.url} alt='' className='w-12' //>
    //         )}
    //         {product.image5 && (
    //           <img src={product.image5.url} alt='' className='w-12' //>
    //         )}
    //       </div>
    //       <div className='flex h-32 w-11/12 items-center border-b border-solid border-gray-300 gap-7'>
    //         <BtnInfoProduct
    //           talla='xs'
    //           setSizesSelected={setSizesSelected}
    //           product={product}
    //           sizesSelected={sizesSelected}
    //         />
    //         <BtnInfoProduct
    //           talla='s'
    //           setSizesSelected={setSizesSelected}
    //           product={product}
    //           sizesSelected={sizesSelected}
    //         />
    //         <BtnInfoProduct
    //           talla='m'
    //           setSizesSelected={setSizesSelected}
    //           product={product}
    //           sizesSelected={sizesSelected}
    //         />
    //         <BtnInfoProduct
    //           talla='l'
    //           setSizesSelected={setSizesSelected}
    //           product={product}
    //           sizesSelected={sizesSelected}
    //         />
    //         <BtnInfoProduct
    //           talla='xl'
    //           setSizesSelected={setSizesSelected}
    //           product={product}
    //           sizesSelected={sizesSelected}
    //         />
    //       </div>
    //       <div className='flex flex-col gap-4'>
    //         <span className='flex items-center gap-1 uppercase font-bold pl-2 pt-5'>
    //           <TbRulerMeasure className='h-6 w-6' /> ¿cuál es mi talla?
    //         </span>
    //         <button className='uppercase w-full bg-red-500 p-4 text-white'>
    //           anadir a la cesta
    //         </button>
    //         <button className='uppercase w-full bg-purple-900 p-4 text-white'>
    //           compra con SHOP PAY
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='bg-white'>
      <div className='pt-6 w-full'>
        <nav aria-label='Breadcrumb'>
          <ol
            role='list'
            className=' flex max-w-2xl items-center space-x-2 lg:max-w-7xl'
          >
            <li>
              <div className='flex items-center'>
                <Link
                  to='/catalog/*'
                  className='mr-2 text-sm font-medium text-gray-900'
                >
                  Tienda
                </Link>
                <svg
                  width='16'
                  height='20'
                  viewBox='0 0 16 20'
                  fill='currentColor'
                  aria-hidden='true'
                  className='h-5 w-4 text-gray-300'
                >
                  <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                </svg>
              </div>
            </li>
            <li>
              <div className='flex items-center'>
                <Link
                  to={`/catalog/cat/${product.category}`}
                  className='mr-2 text-sm font-medium text-gray-900 capitalize'
                >
                  {product.category}
                </Link>
                <svg
                  width='16'
                  height='20'
                  viewBox='0 0 16 20'
                  fill='currentColor'
                  aria-hidden='true'
                  className='h-5 w-4 text-gray-300'
                >
                  <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                </svg>
              </div>
            </li>

            <li className='text-sm'>
              <a
                href='#'
                aria-current='page'
                className='font-medium text-gray-500 hover:text-gray-600'
              >
                {product.title}
              </a>
            </li>
          </ol>
        </nav>

        <div className=' mt-6 max-w-2xl lg:grid lg:max-w-screen-2xl lg:grid-cols-3 lg:gap-x-8'>
          <div className='aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
            <img
              src={product.image?.url}
              alt='Two each of gray, white, and black shirts laying flat.'
              className='h-full w-full object-cover object-center'
            />
          </div>
          <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
            <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
              <img
                src={product.image2?.url}
                alt='Model wearing plain black basic tee.'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
              <img
                src={product.image3?.url}
                alt='Model wearing plain gray basic tee.'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>
          <div className='aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg'>
            <img
              src={product.image4?.url}
              alt='Model wearing plain white basic tee.'
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>

        <div className=' max-w-2xl pb-16 pt-10 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:pb-24 lg:pt-16'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              {product.title}
            </h1>
          </div>

          <div className='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 className='sr-only'>Product information</h2>
            <p className='text-3xl tracking-tight text-gray-900'>
              ${product.price}
            </p>

            <form className='mt-10'>
              <div className='mt-10'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-sm font-medium text-gray-900'>Size</h3>
                  <p className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>
                    Size guide
                  </p>
                </div>

                <fieldset className='mt-4 w-full'>
                  <div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
                    <BtnInfoProduct
                      talla={'xs'}
                      setSizesSelected={setSizesSelected}
                      product={product}
                      sizesSelected={sizesSelected}
                    />
                    <BtnInfoProduct
                      talla={'s'}
                      setSizesSelected={setSizesSelected}
                      product={product}
                      sizesSelected={sizesSelected}
                    />
                    <BtnInfoProduct
                      talla={'m'}
                      setSizesSelected={setSizesSelected}
                      product={product}
                      sizesSelected={sizesSelected}
                    />
                    <BtnInfoProduct
                      talla={'l'}
                      setSizesSelected={setSizesSelected}
                      product={product}
                      sizesSelected={sizesSelected}
                    />
                    <BtnInfoProduct
                      talla={'xl'}
                      setSizesSelected={setSizesSelected}
                      product={product}
                      sizesSelected={sizesSelected}
                    />
                  </div>
                </fieldset>
              </div>

              <p className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer'>
                Add to bag
              </p>
            </form>
          </div>

          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
            <div>
              <h3 className='sr-only'>Description</h3>

              <div className='space-y-6'>
                <p className='text-base text-gray-900'>
                  {product.description &&
                    product.description.length > 0 &&
                    product.description.slice(0, 1500)}
                  ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;

InfoProduct.propTypes = {
  product: PropTypes.object.isRequired,
  sizesSelected: PropTypes.string.isRequired,
  setSizesSelected: PropTypes.func.isRequired,
};
