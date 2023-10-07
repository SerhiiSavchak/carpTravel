import './App.scss';
import imgOneMob from '../../img/bg/services-section/bg-services-1-mobile.webp';
import imgOneTab from '../../img/bg/services-section/bg-services-1-tablet.webp';
import imgOneDesc from '../../img/bg/services-section/bg-services-1-desc.webp';
import imgSecondMob from '../../img/bg/services-section/bg-services-1-mobile.webp';
import imgSecondTab from '../../img/bg/services-section/bg-services-1-tablet.webp';
import imgSecondDesc from '../../img/bg/services-section/bg-services-1-desc.webp';
import imgThirdMob from '../../img/bg/services-section/bg-services-1-mobile.webp';
import imgThirdTab from '../../img/bg/services-section/bg-services-1-tablet.webp';
import imgThirdDesc from '../../img/bg/services-section/bg-services-1-desc.webp';
import imgFourthMob from '../../img/bg/services-section/bg-services-1-mobile.webp';
import imgFourthTab from '../../img/bg/services-section/bg-services-1-tablet.webp';
import imgFourthDesc from '../../img/bg/services-section/bg-services-1-desc.webp';
import imgFifthMob from '../../img/bg/services-section/bg-services-1-mobile.webp';
import imgFifthTab from '../../img/bg/services-section/bg-services-1-tablet.webp';
import imgFifthDesc from '../../img/bg/services-section/bg-services-1-desc.webp';

import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { About } from 'components/About/About';
import { Services } from 'components/Services/Services';
import { Career } from 'components/Career/Career';
import { Gallery } from 'components/Gallery/Gallery';
import { Contacts } from 'components/Contacts/Contacts';
import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    const imgs = [
      imgOneMob,
      imgOneTab,
      imgOneDesc,
      imgSecondMob,
      imgSecondTab,
      imgSecondDesc,
      imgThirdMob,
      imgThirdTab,
      imgThirdDesc,
      imgFourthMob,
      imgFourthTab,
      imgFourthDesc,
      imgFifthMob,
      imgFifthTab,
      imgFifthDesc,
    ];
    imgs.forEach(image => {
      new Image().src = image;
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contacts />
    </>
  );
};

// const imgs = [
//   '../../img/bg/services-section/bg-services-1-mobile.webp',
//   '../../img/bg/services-section/bg-services-1-tablet.webp',
//   '../../img/bg/services-section/bg-services-1-desc.webp',
//   '../../img/bg/services-section/bg-services-2-mobile.webp',
//   '../../img/bg/services-section/bg-services-2-tablet.webp',
//   '../../img/bg/services-section/bg-services-2-desc.webp',
//   '../../img/bg/services-section/bg-services-3-mobile.webp',
//   '../../img/bg/services-section/bg-services-3-tablet.webp',
//   '../../img/bg/services-section/bg-services-3-desc.webp',
//   '../../img/bg/services-section/bg-services-4-mobile.webp',
//   '../../img/bg/services-section/bg-services-4-tablet.webp',
//   '../../img/bg/services-section/bg-services-4-desc.webp',
//   '../../img/bg/services-section/bg-services-5-mobile.webp',
//   '../../img/bg/services-section/bg-services-5-tablet.webp',
//   '../../img/bg/services-section/bg-services-5-desc.webp',
// ];
