import './Contacts.scss';
import { Container } from 'components/Container/Container';

export const Contacts = () => {
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className="contacts-section">
      <Container>
        <h2 className="contacts-title">
          Contact <span className="contacts-title-span">us</span>
        </h2>
        <div className="contacts-main-wrap">
          <div className="contacts-top-wrap">
            <ul className="contacts-top-list">
              <li className="contacts-top-item">
                <a className="contacts-link top" href="/">
                  +38 (098) 12 34 567
                </a>
              </li>
              <li className="contacts-top-item">
                <a className="contacts-link top" href="/">
                  +38 (073) 12 34 567
                </a>
              </li>
            </ul>
            <h3 className="contacts-subtitle">Phone number</h3>
          </div>
          <div className="contacts-wrap">
            <a className="contacts-link" href="/">
              support@carptravel.com
            </a>
            <h3 className="contacts-subtitle">E-mail</h3>
          </div>
          <div className="contacts-bottom-wrap">
            <h3 className="contacts-subtitle bottom">Follow us</h3>
            <ul className="contacts-bottom-list">
              <li className="contacts-bottom-item">
                <a className="contacts-link bottom" href="/">
                  facebook
                </a>
              </li>
              <li className="contacts-bottom-item">
                <a className="contacts-link bottom" href="/">
                  instagram
                </a>
              </li>
              <li className="contacts-bottom-item">
                <a className="contacts-link bottom" href="/">
                  youtube
                </a>
              </li>
              <li className="contacts-bottom-item">
                <a className="contacts-link bottom" href="/">
                  tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contacts-form">
          <label className="contacts-label">
            Full name
            <input
              type="text"
              placeholder="John Smith"
              className="contacts-input"
            />
          </label>
          <label className="contacts-label">
            E-mail
            <input
              type="email"
              placeholder="johnsmith@email.com"
              className="contacts-input"
            />
          </label>
          <div className="contacts-btn-wrap ">
            <label className="contacts-label textarea">
              Message
              <textarea className="contacts-input textarea" />
            </label>
            <button className="contacts-btn" type="submit">
              send
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};
