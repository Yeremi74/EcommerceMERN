import PropTypes from 'prop-types';

const BtnInfoProduct = ({
  talla,
  setSizesSelected,
  product,
  sizesSelected,
}) => {
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
  </button>;

  if (
    product.sizes &&
    product.sizes.length > 0 &&
    product.sizes[0]?.split(',').includes(talla)
  )
    return (
      <label
        className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm ${
          sizesSelected == talla && 'border-indigo-500 border-2'
        }`}
        onClick={() => setSizesSelected(talla)}
      >
        <input
          type='radio'
          name='size-choice'
          value={talla}
          className='sr-only'
          aria-labelledby='size-choice-1-label'
        />
        <span id='size-choice-1-label'>{talla}</span>

        <span
          className='pointer-events-none absolute -inset-px rounded-md'
          aria-hidden='true'
        ></span>
      </label>
    );

  return (
    <label className='group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-not-allowed bg-gray-50 text-gray-200'>
      <input
        type='radio'
        name='size-choice'
        value={talla}
        disabled
        className='sr-only'
        aria-labelledby='size-choice-0-label'
      />
      <span id='size-choice-0-label'>{talla}</span>
      <span
        aria-hidden='true'
        className='pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200'
      >
        <svg
          className='absolute inset-0 h-full w-full stroke-2 text-gray-200'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
          stroke='currentColor'
        >
          <line
            x1='0'
            y1='100'
            x2='100'
            y2='0'
            vectorEffect='non-scaling-stroke'
          />
        </svg>
      </span>
    </label>
  );
};

BtnInfoProduct.propTypes = {
  talla: PropTypes.string.isRequired,
  setSizesSelected: PropTypes.func.isRequired,
  sizesSelected: PropTypes.string.isRequired,
  product: PropTypes.array.isRequired,
};

export default BtnInfoProduct;
