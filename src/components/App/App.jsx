import './App.scss';
import { Preload } from 'components/Preload/Preload';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { About } from 'components/About/About';
import { Services } from 'components/Services/Services';
import { Career } from 'components/Career/Career';
import { Gallery } from 'components/Gallery/Gallery';
import { Contacts } from 'components/Contacts/Contacts';

export const App = () => {
  return (
    <>
      <Preload />
      <Header />
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contacts />
    </>
  );
};
