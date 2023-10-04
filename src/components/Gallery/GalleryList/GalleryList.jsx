import './GalleryList.scss';
import galleryFirstMob from '../../../img/gallery-section/gallery-1-mobile.jpg';
import gallerySecondMob from '../../../img/gallery-section/gallery-2-mobile.jpg';
import galleryThirdMob from '../../../img/gallery-section/gallery-3-mobile.jpg';

export const GalleryList = () => {
  return (
    <ul className="gallery-list">
      <li className="gallery-item">
        <img className="gallery-img" src={galleryFirstMob} alt="our-gallery" />
      </li>
      <li className="gallery-item">
        <img className="gallery-img" src={gallerySecondMob} alt="our-gallery" />
      </li>
      <li className="gallery-item">
        <img className="gallery-img" src={galleryThirdMob} alt="our-gallery" />
      </li>
    </ul>
  );
};
