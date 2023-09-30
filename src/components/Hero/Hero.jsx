import './Hero.scss';
import sprite from '../../img/icons/sprite.svg';
import { Container } from 'components/Container/Container';

export const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <div className="hero-main-wrap">
          <div className="hero-text-wrap">
            <p className="hero-top-text">
              <span className="hero-text-span">7</span>
              DAYS
            </p>

            <p className="hero-top-text">JOURNEY</p>
          </div>

          <div className="hero-wrap">
            <h1 className="hero-title">
              <span className="hero-title-span">Uncover</span> Carpathian’s
              Secrets
            </h1>
            <p className="hero-text">
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
          </div>
          <div className="hero-bottom-wrap">
            <p className="hero-bottom-text">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <button className="hero-btn" type="button">
              <svg className="hero-btn-icon">
                <use href={sprite + '#btn-left-mob'}></use>
              </svg>
              <svg className="hero-btn-icon-desc">
                <use href={sprite + '#btn-left-desc'}></use>
              </svg>
              JOIN NOW
              <svg className="hero-btn-icon">
                <use href={sprite + '#btn-right-mob'}></use>
              </svg>
              <svg className="hero-btn-icon-desc">
                <use href={sprite + '#btn-right-desc'}></use>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
