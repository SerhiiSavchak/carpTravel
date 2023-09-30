import './Menu.scss';

import { Container } from 'components/Container/Container';

export const Menu = ({ openMenu, setOpenMenu }) => {
  const onCloseClick = () => {
    setOpenMenu(false);
  };
  return (
    <div className={openMenu ? 'menu-wrap open' : 'menu-wrap'}>
      <Container>
        <button className="menu-btn" type="button" onClick={onCloseClick}>
          close
        </button>
        <nav className="menu-nav">
          <ul className="menu-list">
            <li className="menu-item">
              <a href="/" className="menu-link">
                About
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                Services
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                Career
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                Gallery
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};
