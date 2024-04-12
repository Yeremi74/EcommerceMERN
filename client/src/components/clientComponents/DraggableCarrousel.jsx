import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import DraggableCard from './DraggableCard';

const DraggableCarrousel = ({ size }) => {
  const [width, setWidth] = useState(0);

  const slider_wrapper = useRef();

  useEffect(() => {
    setWidth(
      slider_wrapper.current.scrollWidth - slider_wrapper.current.offsetWidth
    );
  }, []);

  return (
    <div className='flex items-center w-full flex-col'>
      <div className={size === 'full' ? 'w-full' : 'w-11/12'}>
        <motion.div
          className='w-full overflow-hidden p-5 flex '
          ref={slider_wrapper}
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            className='inline-flex gap-3'
            drag='x'
            dragConstraints={{ right: 0, left: -width }}
          >
            <DraggableCard size={size} />
            <DraggableCard size={size} />
            <DraggableCard size={size} />
            <DraggableCard size={size} />
            <DraggableCard size={size} />
            <DraggableCard size={size} />
            <DraggableCard size={size} />
            <DraggableCard size={size} />
          </motion.div>
        </motion.div>
      </div>
    </div>

    // <motion.div ref={slider_wrapper} whileTap={{ cursor: 'grabbing' }}>
    //   <motion.div drag='x' dragConstraints={{ right: 0, left: -width }}>
    //     <div className='card'>1</div>
    //     <div className='card'>2</div>
    //     <div className='card'>3</div>
    //     <div className='card'>4</div>
    //   </motion.div>
    // </motion.div>
  );
};

export default DraggableCarrousel;
