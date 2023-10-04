import './ServicesList.scss';

export const ServicesList = ({ step, setStep, getCurrentStepClass }) => {
  const onItemClick = e => {
    if (e.target.nodeName !== 'P' && e.target.nodeName !== 'LI') {
      return;
    }
    const step = e.target.dataset.id;

    setStep(Number(step));
  };

  return (
    <ul
      onClick={onItemClick}
      className={`services-list ${getCurrentStepClass(step)}`}
    >
      <li data-num="1" className="services-item">
        <p
          data-id="1"
          className={step === 1 ? 'services-text current' : 'services-text'}
        >
          Atvs Traveling
        </p>
      </li>
      <li data-id="2" className="services-item">
        <p
          data-id="2"
          className={step === 2 ? 'services-text current' : 'services-text'}
        >
          Rock climbing
        </p>
      </li>
      <li data-id="3" className="services-item">
        <p
          data-id="3"
          className={step === 3 ? 'services-text current' : 'services-text'}
        >
          Hot air
          <br /> ballooning
        </p>
      </li>
      <li data-id="4" className="services-item">
        <p
          data-id="4"
          className={step === 4 ? 'services-text current' : 'services-text'}
        >
          Skydiving
        </p>
      </li>
      <li data-id="5" className="services-item">
        <p
          data-id="5"
          className={step === 5 ? 'services-text current' : 'services-text'}
        >
          Rafting
        </p>
      </li>
    </ul>
  );
};
