import './Preload.scss';

export const Preload = () => {
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
  return (
    <div className="preload">
      {imgs.map(src => (
        <img rel="preload" alt="test" src={src} />
      ))}
    </div>
  );
};
