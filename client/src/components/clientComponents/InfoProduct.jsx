import PropTypes from 'prop-types';
import { TbRulerMeasure } from 'react-icons/tb';

const InfoProduct = ({ product, sizesSelected, setSizesSelected }) => {
  const sizesJoined = product.sizes && product.sizes[0].slice(1).split(',');
  //   console.log(sizesJoined);

  return (
    <div className='flex p-6'>
      <div className='w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-1 '>
          {product.image && (
            <img src={product.image.url} alt='' className='w-full' />
          )}
          {product.image2 && (
            <img src={product.image2.url} alt='' className='w-full' />
          )}
          {product.image3 && (
            <img src={product.image3.url} alt='' className='w-full' />
          )}
          {product.image4 && (
            <img src={product.image4.url} alt='' className='w-full' />
          )}
          {product.image5 && (
            <img src={product.image5.url} alt='' className='w-full' />
          )}
        </div>
      </div>
      <div className='w-1/2 pl-6'>
        <div className='bg-white sticky top-0'>
          <div className='flex flex-col gap-8 border-b pb-8 border-solid border-gray-300 '>
            <div className='flex flex-col gap-1'>
              <p className='font-bold uppercase'>{product.title}</p>
              <p>${product.price}</p>
            </div>
            <div className='w-11/12'>{product.description}</div>
          </div>
          <div className='flex h-32 items-center gap-4 border-b border-solid border-gray-300'>
            {product.image && (
              <img src={product.image.url} alt='' className='w-12' />
            )}
            {product.image2 && (
              <img src={product.image2.url} alt='' className='w-12' />
            )}
            {product.image3 && (
              <img src={product.image3.url} alt='' className='w-12' />
            )}
            {product.image4 && (
              <img src={product.image4.url} alt='' className='w-12' />
            )}
            {product.image5 && (
              <img src={product.image5.url} alt='' className='w-12' />
            )}
          </div>
          <div className='flex h-32 w-11/12 items-center border-b border-solid border-gray-300 gap-7'>
            {product.sizes &&
              sizesJoined.map((talla) => (
                <button
                  key={talla}
                  onClick={() => setSizesSelected(talla)}
                  className={`${
                    sizesSelected === talla
                      ? 'after:content-[""] after:h-custom after:w-full after:absolute after:bottom-0 after:bg-gray-900 after:block'
                      : ''
                  } text-2xl text-slate-700 w-16 h-16 relative uppercase`}
                >
                  {talla}
                </button>
              ))}
          </div>
          <div className='flex flex-col gap-4'>
            <span className='flex items-center gap-1 uppercase font-bold pl-2 pt-5'>
              <TbRulerMeasure className='h-6 w-6' /> ¿cuál es mi talla?
            </span>
            <button className='uppercase w-full bg-red-500 p-4 text-white'>
              anadir a la cesta
            </button>
            <button className='uppercase w-full bg-purple-900 p-4 text-white'>
              compra con SHOP PAY
            </button>
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
