import './CareerList.scss';

export const CareerList = () => {
  return (
    <ul className="career-list">
      <li className="career-item">
        <h4 className="career-list-title">Professional development</h4>
        <p className="career-text">
          We offer growth opportunities and a creative environment to nurture
          your talents.
        </p>
      </li>
      <li className="career-item">
        <h4 className="career-list-title">Teamwork</h4>
        <p className="career-text">
          Join our close-knit family, where support and inspiration abound.
        </p>
      </li>
      <li className="career-item">
        <h4 className="career-list-title third">
          Stimulating work environment
        </h4>
        <p className="career-text">
          Flexibility and remote options for a comfortable experience.
        </p>
      </li>
      <li className="career-item">
        <h4 className="career-list-title">Exciting challenges</h4>
        <p className="career-text">
          Unleash your potential through unforgettable projects showcasing
          Carpathian beauty.
        </p>
      </li>
    </ul>
  );
};
