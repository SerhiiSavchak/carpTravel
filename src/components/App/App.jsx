import './App.scss';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { About } from 'components/About/About';
import { Services } from 'components/Services/Services';
import { Career } from 'components/Career/Career';
import { Gallery } from 'components/Gallery/Gallery';
import { Contacts } from 'components/Contacts/Contacts';
import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export const App = () => {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
      '../../img/bg/services-section/bg-services-1-mobile.webp',
      '../../img/bg/services-section/bg-services-1-tablet.webp',
      '../../img/bg/services-section/bg-services-1-desc.webp',
      '../../img/bg/services-section/bg-services-2-mobile.webp',
      '../../img/bg/services-section/bg-services-2-tablet.webp',
      '../../img/bg/services-section/bg-services-2-desc.webp',
      '../../img/bg/services-section/bg-services-3-mobile.webp',
      '../../img/bg/services-section/bg-services-3-tablet.webp',
      '../../img/bg/services-section/bg-services-3-desc.webp',
      '../../img/bg/services-section/bg-services-4-mobile.webp',
      '../../img/bg/services-section/bg-services-4-tablet.webp',
      '../../img/bg/services-section/bg-services-4-desc.webp',
      '../../img/bg/services-section/bg-services-5-mobile.webp',
      '../../img/bg/services-section/bg-services-5-tablet.webp',
      '../../img/bg/services-section/bg-services-5-desc.webp',
    ];
    const cacheImages = async srcArray => {
      const promises = await srcArray.map(src => {
        return new Promise(function (resolve, reject) {
          const img = new Image();
          img.src = src;
          img.onload = resolve();
          img.onerror = reject();
        });
      });
      await Promise.all(promises);
      setIsLoading(false);
    };

    cacheImages(imgs);
  }, []);

  return (
    <>
      {!isloading ? (
        <>
          <Header />
          <Hero />
          <About />
          <Services />
          <Career />
          <Gallery />
          <Contacts />
        </>
      ) : (
        <ClipLoader
          loading={isloading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </>
  );
};
