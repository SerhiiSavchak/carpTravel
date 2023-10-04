import './CareerForm.scss';

export const CareerForm = ({ tablet }) => {
  return (
    <form className="career-form">
      <label className="career-form-label">
        Full name
        <input
          className="career-form-input"
          type="text"
          placeholder="John Smith"
        />
      </label>
      <label className="career-form-label">
        E-mail
        <input
          className="career-form-input"
          type="email"
          placeholder="johnsmith@email.com"
        />
      </label>
      <label className="career-form-label">
        Position
        <input
          className="career-form-input"
          type="text"
          placeholder="Movie maker"
        />
      </label>
      <label className="career-form-label">
        Phone
        <input
          className="career-form-input"
          type="tel"
          placeholder="+380 (097) 12 34 567"
        />
      </label>

      {tablet ? (
        <>
          <div className="career-checkbox-wrap">
            <input className="career-checkbox-input" type="checkbox" />
            <p className="career-checkbox-text">
              I confirm my consent to the processing of personal data.
            </p>
          </div>
          <label className="career-form-label">
            Message
            <textarea className="career-form-input textarea" type="textarea" />
          </label>
        </>
      ) : (
        <>
          <label className="career-form-label">
            Message
            <textarea className="career-form-input textarea" type="textarea" />
          </label>
          <div className="career-checkbox-wrap">
            <input className="career-checkbox-input" type="checkbox" />
            <p className="career-checkbox-text">
              I confirm my consent to the processing of personal data.
            </p>
          </div>
        </>
      )}

      <button className="career-form-btn" type="submit">
        send
      </button>
    </form>
  );
};
