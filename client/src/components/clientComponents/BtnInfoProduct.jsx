import PropTypes from 'prop-types';

const BtnInfoProduct = ({
  talla,
  setSizesSelected,
  product,
  sizesSelected,
}) => {
  return (
    <button
      onClick={() => setSizesSelected(talla)}
      disabled={
        !product.sizes ||
        !product.sizes[0] ||
        !product.sizes[0].split(',').includes(talla)
      }
      className={`${
        sizesSelected === talla
          ? 'after:content-[""] after:h-custom after:w-full after:absolute after:bottom-0 after:bg-gray-900 after:block'
          : ''
      } text-2xl text-slate-700 w-16 h-16 relative uppercase disabled:text-gray-500 disabled:opacity-35`}
    >
      {!product.sizes ||
        !product.sizes[0] ||
        (!product.sizes[0].split(',').includes(talla) && (
          <div className='before absolute top-1/2 left-0 w-full h-custom bg-gray-900' />
        ))}
      {talla}
    </button>
  );
};

BtnInfoProduct.propTypes = {
  talla: PropTypes.string.isRequired,
  setSizesSelected: PropTypes.func.isRequired,
  sizesSelected: PropTypes.string.isRequired,
  product: PropTypes.array.isRequired,
};

export default BtnInfoProduct;
