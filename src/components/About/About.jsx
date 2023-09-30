import './About.scss';
import { Container } from 'components/Container/Container';
export const About = () => {
  return (
    <section className="about-section">
      <Container>
        <div className="about-main-wrap">
          <h2 className="about-title">
            who <span className="about-title-span">we are</span>
          </h2>
          <div className="about-top-wrap">
            <p className="about-top-text">
              <span className="about-top-text-span">a team of enthusiasts</span>{' '}
              who are fully committed to the mission of creating unforgettable
              and extraordinary trips to the most beautiful parts of the
              Carpathians. Our goal is not just to show you{' '}
              <br className="about-br" /> the natural wonders of the mountains,
              but to provide you with a deep immersion in their magical
              atmosphere.
            </p>
            <p className="about-top-text">
              <span className="about-top-text-span"> We believe</span> that
              nature has the power to inspire, strengthen character and provide
              new perspectives. Therefore, each of our tours is aimed at
              unlocking <br className="about-br" /> your potential, enriching
              your spiritual world and creating unforgettable memories.
            </p>
          </div>
          <div className="about-wrap">
            <p className="about-text">From vacationers </p>
            <p className="about-text">to active travelers</p>
            <p className="about-text">we have a tour for everyone.</p>
          </div>
        </div>
        <p className="about-bottom-text">
          <span className="about-bottom-text-span">We use methods</span> that
          are time-tested and proven. Our expert guides with in-depth knowledge
          of the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </Container>
    </section>
  );
};
