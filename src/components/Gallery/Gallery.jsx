import './Gallery.scss';

import { GallerySlider } from './GallerySlider/GallerySlider';
import { GalleryList } from './GalleryList/GalleryList';
import { Container } from 'components/Container/Container';

export const Gallery = () => {
  return (
    <section className="gallery-section">
      <Container>
        <h2 className="gallery-title">
          Our <span className="gallery-title-span">Gallery</span>
        </h2>
        <div className="gallery-top-wrap">
          <GalleryList />
        </div>
        <div className="gallery-bottom-wrap">
          <GallerySlider />
        </div>
      </Container>
    </section>
  );
};
