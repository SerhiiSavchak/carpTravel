import './Career.scss';

import { Container } from 'components/Container/Container';
import { CareerList } from './CareerList/CareerList';
import { CareerForm } from './CareerForm/CareerForm';

export const Career = () => {
  return (
    <>
      <section className="career-section">
        <Container>
          <div className="career-title-wrap">
            <h2 className="career-title">
              Choose <span className="career-title-span">us</span>
            </h2>
            <p className="career-top-text">
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.
            </p>
          </div>
          <h3 className="career-subtitle">Why us ?</h3>

          <div className="career-main-wrap">
            <CareerList />
            <div className="career-wrap">
              <p className="career-form-text">
                Don't miss your opportunity!
                <br /> Fill out the form right now <br /> and join our team!
              </p>
              <CareerForm tablet={true} />
            </div>
          </div>
        </Container>
      </section>
      <section className="career-form-section">
        <Container>
          <p className="career-form-text">
            Don't miss your opportunity!
            <br /> Fill out the form right now and join our team!
          </p>
          <CareerForm />
        </Container>
      </section>
    </>
  );
};
