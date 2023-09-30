import './App.scss';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { About } from 'components/About/About';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
};
