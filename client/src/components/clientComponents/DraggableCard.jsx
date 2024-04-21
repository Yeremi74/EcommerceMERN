import PropTypes from 'prop-types';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const DraggableCard = ({ img }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div
      className={`relative w-60`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      draggable='true'
      onDragStart={(e) => e.preventDefault()}
    >
      <div className='pointer-events-auto'>
        <div
          className={`w-full h-full block overflow-hidden relative content-center  bg-red-500 ${
            isHovered && 'brightness-75'
          }`}
        >
          <img
            src={img}
            className='w-full h-full object-cover block pointer-events-none'
          />
        </div>
      </div>
      <div className='absolute h-full w-full z-10 top-0 cursor-move'>
        {isHovered && (
          <button
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-white border h-8 w-16 text-white font-bold uppercase pointer-events-auto hover:bg-slate-600 hover:bg-opacity-50 cursor-pointer'
            onClick={handleClick}
          >
            shop
          </button>
        )}
      </div>
    </div>
  );
};

DraggableCard.propTypes = {
  size: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default DraggableCard;
