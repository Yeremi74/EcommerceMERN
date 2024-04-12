import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const DraggableCard = ({ size }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/admin');
  };
  return (
    <div
      className={`relative ${size === 'full' ? 'w-96' : 'w-60'}`}
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
            src='https://nude-project.com/cdn/shop/files/IMG_1508_400x.png?v=1704213791'
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

export default DraggableCard;
