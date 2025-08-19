import About from './components/About/index'
import Header from './components/Header/index';
import Main from './components/Main/index';
import Contact from './components/Contact/index';
import Skills from './components/Skills/index';
import Portifolio from './components/Portifolio/index';
import Footer from './components/Footer/index';
import theme from './components/GlobalStyles/theme';
import GlobalStyles from './components/GlobalStyles/index';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState, useRef } from 'react';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen)
  }

  let lastPosition = 0;
  function isScrolling() {
    const currentPosition = window.scrollY;
    if (lastPosition < currentPosition && currentPosition > 300) {
      if (headerRef.current) {
      headerRef.current.style.height = '0';
     }
    } else {
      if (headerRef.current) {
      headerRef.current.style.height = '5rem';
     }
    }
    lastPosition = currentPosition;
  }

  useEffect(() => {
    document.addEventListener('scroll', isScrolling);
  }, )

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header
          ref={headerRef}
          isMenuOpen={isMenuOpen}
          handleMenuOpen={handleMenuOpen}
        />
        <Main />
        <About />
        <Contact />
        <Skills />
        <Portifolio />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
