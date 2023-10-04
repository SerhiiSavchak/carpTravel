import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import { EffectFade } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import './ServicesSlider.scss';
import imgFirstMob from '../../../img/services-section/services-1-mobile.jpg';
import imgSecondMob from '../../../img/services-section/services-2-mobile.jpg';
import imgThirdMob from '../../../img/services-section/services-3-mobile.jpg';
import imgFourthMob from '../../../img/services-section/services-4-mobile.jpg';
import imgFifthMob from '../../../img/services-section/services-5-mobile.jpg';
import imgFirstTab from '../../../img/services-section/services-1-tab.jpg';
import imgSecondTab from '../../../img/services-section/services-2-tab.jpg';
import imgThirdTab from '../../../img/services-section/services-3-tab.jpg';
import imgFourthTab from '../../../img/services-section/services-4-tab.jpg';
import imgFifthTab from '../../../img/services-section/services-5-tab.jpg';
import imgFirstDesc from '../../../img/services-section/services-1-desc.jpg';
import imgSecondDesc from '../../../img/services-section/services-2-desc.jpg';
import imgThirdDesc from '../../../img/services-section/services-3-desc.jpg';
import imgFourthDesc from '../../../img/services-section/services-4-desc.jpg';
import imgFifthDesc from '../../../img/services-section/services-5-desc.jpg';

export const ServicesSlider = ({ step }) => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper && swiper.slideNext) {
      swiper.slideTo(step - 1, 500);
    }
  }, [step, swiper]);
  return (
    <Swiper
      effect={'fade'}
      modules={[EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      initialSlide={step - 1}
      onSwiper={s => setSwiper(s)}
    >
      <SwiperSlide>
        <picture>
          <source
            srcSet={imgFirstDesc}
            media="(min-width: 1280px)"
            type="image/jpeg"
          />

          <source
            srcSet={imgFirstTab}
            media="(min-width: 768px)"
            type="image/jpeg"
          />
          <img
            className="swiper-img"
            loading="lazy"
            alt="our services"
            src={imgFirstMob}
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source
            srcSet={imgSecondDesc}
            media="(min-width: 1280px)"
            type="image/jpeg"
          />

          <source
            srcSet={imgSecondTab}
            media="(min-width: 768px)"
            type="image/jpeg"
          />
          <img
            className="swiper-img"
            loading="lazy"
            alt="our services"
            src={imgSecondMob}
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source
            srcSet={imgThirdDesc}
            media="(min-width: 1280px)"
            type="image/jpeg"
          />

          <source
            srcSet={imgThirdTab}
            media="(min-width: 768px)"
            type="image/jpeg"
          />
          <img
            className="swiper-img"
            loading="lazy"
            alt="our services"
            src={imgThirdMob}
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source
            srcSet={imgFourthDesc}
            media="(min-width: 1280px)"
            type="image/jpeg"
          />

          <source
            srcSet={imgFourthTab}
            media="(min-width: 768px)"
            type="image/jpeg"
          />
          <img
            className="swiper-img"
            loading="lazy"
            alt="our services"
            src={imgFourthMob}
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source
            srcSet={imgFifthDesc}
            media="(min-width: 1280px)"
            type="image/jpeg"
          />

          <source
            srcSet={imgFifthTab}
            media="(min-width: 768px)"
            type="image/jpeg"
          />
          <img
            className="swiper-img"
            loading="lazy"
            alt="our services"
            src={imgFifthMob}
          />
        </picture>
      </SwiperSlide>
    </Swiper>
  );
};
