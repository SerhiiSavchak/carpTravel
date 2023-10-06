import './Header.scss';
import logo from '../../img/logo-mobile.svg';
import { useState } from 'react';
import { Container } from 'components/Container/Container';
import { Menu } from './Menu/Menu';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onMenuClick = () => {
    setOpenMenu(true);
  };
  return (
    <header className="header">
      <Container>
        <nav className="header-nav">
          <a className="header-logo-link" href="/">
            <img className="header-logo" alt="logo" src={logo} />
          </a>
          <button className="header-btn" type="button" onClick={onMenuClick}>
            menu
          </button>
          <ul className="header-list">
            <li className="header-item">
              <a href="/" className="header-link">
                About
              </a>
            </li>
            <li className="header-item">
              <a href="/" className="header-link">
                Services
              </a>
            </li>
            <li className="header-item">
              <a href="/" className="header-link">
                Career
              </a>
            </li>
            <li className="header-item">
              <a href="/" className="header-link">
                Gallery
              </a>
            </li>
            <li className="header-item">
              <a href="/" className="header-link">
                Contacts
              </a>
            </li>
          </ul>
          <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </nav>
      </Container>
    </header>
  );
};
