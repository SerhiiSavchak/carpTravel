import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import './GallerySlider.scss';
import galleryFirstDesc from '../../../img/gallery-section/gallery-1-desc.jpg';
import gallerySecondDesc from '../../../img/gallery-section/gallery-2-desc.jpg';
import galleryThirdDesc from '../../../img/gallery-section/gallery-3-desc.jpg';

export const GallerySlider = () => {
  return (
    <Swiper
      navigation
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 6000 }}
      watchSlidesProgress={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="gallery-img" src={galleryFirstDesc} alt="our-gallery" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="gallery-img"
          src={gallerySecondDesc}
          alt="our-gallery"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className="gallery-img" src={galleryThirdDesc} alt="our-gallery" />
      </SwiperSlide>
    </Swiper>
  );
};
