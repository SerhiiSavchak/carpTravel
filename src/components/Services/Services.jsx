import './Services.scss';
import { useState, useEffect } from 'react';
import { Container } from 'components/Container/Container';
import { ServicesList } from './ServicesList/ServicesList';
import { ServicesSlider } from './ServicesSlider/ServicesSlider';

export const Services = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (step !== 5) {
        setStep(step + 1);
      } else {
        setStep(1);
      }
      return () => clearInterval(intervalId);
    }, 6000);
    return () => {
      clearInterval(intervalId);
    };
  }, [step]);
  const getCurrentStepClass = step => {
    switch (step) {
      case 1:
        return 'first';

      case 2:
        return 'second';

      case 3:
        return 'third';

      case 4:
        return 'fourth';

      case 5:
        return 'fifth';

      default:
        break;
    }
  };
  const getCurrentTopText = step => {
    switch (step) {
      case 1:
        return 'Feel the adrenaline rush';

      case 2:
        return 'Destroy your limitations';

      case 3:
        return 'Get Inspired';

      case 4:
        return 'Overcome your fears';

      case 5:
        return 'Trust the flow';

      default:
        break;
    }
  };
  const getCurrentBottomText = step => {
    switch (step) {
      case 1:
        return 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.';

      case 2:
        return 'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.';

      case 3:
        return 'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.';

      case 4:
        return "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.";

      case 5:
        return 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.';

      default:
        break;
    }
  };

  return (
    <section className={`services-section ${getCurrentStepClass(step)}`}>
      <Container>
        <div className="services-top-wrap">
          <h2 className="services-title">
            we <span className="services-title-span">offer</span>
          </h2>
          <p className="services-top-text">
            <span className="services-top-span">{`0${step}/`}</span>
            05
          </p>
        </div>
        <div className="services-wrap">
          <ServicesSlider step={step} />
          <div className="services-bottom-wrap">
            <p className={`services-img-text ${getCurrentStepClass(step)}`}>
              {getCurrentTopText(step)}
            </p>
            <ServicesList
              step={step}
              setStep={setStep}
              getCurrentStepClass={getCurrentStepClass}
            />
            <p className="services-bottom-text">{getCurrentBottomText(step)}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
