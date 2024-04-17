import { useEffect, useState } from 'react';
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
  const [chaquetas, setChaquetas] = useState([]);

  useEffect(() => {
    const objFunc = async () => {
      const pantsRes = await filterProduct('pantalones', 'all', 1);
      setPantalones(pantsRes);
      const chaquetasRes = await filterProduct('chaquetas', 'all', 1);
      setChaquetas(chaquetasRes);
      const all = await getProducts();
      setAll(all);
    };
    objFunc();
  }, []);

  return (
    <div>
      <Navbar />

      <header className=''>
        <video
          autoPlay
          loop
          muted
          playsInline
          src='https://cdn.shopify.com/videos/c/o/v/3e7fa3d1047f46f381e6d316f366df47.mp4'
          className='sm:w-full h-screen object-cover'
        >
          <source
            className='sm:w-full h-screen object-cover'
            src='https://cdn.shopify.com/videos/c/o/v/3e7fa3d1047f46f381e6d316f366df47.mp4'
            type='video/mp4'
            data-ly-processed='1712212206559'
          />
        </video>
      </header>
      <section>
        <GridArticle products={all} title='new in' />
        <CollectionsMain />
        <GridArticle products={pantalones} title='pantalones' />
        <ImageMainSection />
        <GridArticle products={chaquetas} title='chaquetas' />
        <DraggableCarrousel />
      </section>
    </div>
  );
};

export default HomePage;
