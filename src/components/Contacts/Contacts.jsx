import './Contacts.scss';
import { Container } from 'components/Container/Container';

export const Contacts = () => {
  return (
    <section className="contacts-section">
      <Container>
        <h2 className="contacts-title">
          Contact <span className="contacts-title-span">us</span>
        </h2>
        <ul className="contacts-list">
          <li className="contacts-item">
            <a className="contacts-link" href="/">
              +38 (098) 12 34 567
            </a>
            <a className="contacts-link" href="/">
              +38 (073) 12 34 567
            </a>
            <h3 className="contacts-subtitle">Phone number</h3>
          </li>
          <li className=" contacts-item">
            <a className="contacts-link" href="/">
              support@carptravel.com
            </a>
            <h3 className="contacts-subtitle">E-mail</h3>
          </li>
          <li className=" contacts-item">
            <a className="contacts-link" href="/">
              facebook
            </a>
            <a className="contacts-link" href="/">
              instagram
            </a>
            <a className="contacts-link" href="/">
              youtube
            </a>
            <a className="contacts-link" href="/">
              tiktok
            </a>
            <h3 className="contacts-subtitle">Follow us</h3>
          </li>
        </ul>
        <form className="contacts-form">
          <label className="contacts-label">
            Full name
            <input className="contacts-input" />
          </label>
          <label className="contacts-label">
            E-mail
            <input className="contacts-input" />
          </label>
          <label className="contacts-label">
            Message
            <textarea className="contacts-input textarea" />
          </label>
          <button className="contacts-btn" type="submit">
            send
          </button>
        </form>
      </Container>
    </section>
  );
};
