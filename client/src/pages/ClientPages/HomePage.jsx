import { useEffect, useRef, useState } from 'react';
import myImage from '../../assets/428be75be09645f9b22178469ed2a718.mp4';
import { useEcommerceContext } from '../../context/Context';
import GridArticle from '../../components/clientComponents/GridArticle';
import CollectionsMain from '../../components/clientComponents/CollectionsMain';
import ImageMainSection from '../../components/clientComponents/ImageMainSection';
import DraggableCarrousel from '../../components/clientComponents/DraggableCarrousel';
import Navbar from '../../components/clientComponents/Navbar';
const HomePage = () => {
  const { getProducts, filterProduct } = useEcommerceContext();
  const [all, setAll] = useState([]);
  const [pantalones, setPantalones] = useState([]);
  const [hoodies, setHoodies] = useState([]);

  useEffect(() => {
    const objFunc = async () => {
      const pantsRes = await filterProduct('pantalones', 'all', 1);
      setPantalones(pantsRes);
      const hoodiesRes = await filterProduct('hoodie', 'all', 1);
      setHoodies(hoodiesRes);
      const all = await getProducts();
      setAll(all);
    };
    objFunc();
  }, [getProducts, pantalones]);

  return (
    <div>
      <Navbar />

      <header>
        <video
          autoPlay
          loop
          muted
          playsInline
          src={myImage}
          className='w-full '
        >
          <source
            src={myImage}
            type='video/mp4'
            data-ly-processed='1712212206559'
          />
        </video>
      </header>
      <section>
        <GridArticle products={all} title='new in' />
        {/* <CollectionsMain /> */}
        {/* <GridArticle products={pantalones} title='pantalones' /> */}
        {/* <ImageMainSection /> */}
        {/* <GridArticle products={hoodies} title='hoodies' /> */}
        {/* <DraggableCarrousel /> */}
      </section>
    </div>
  );
};

export default HomePage;
