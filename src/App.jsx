import About from './components/About/index.jsx'
import Header from './components/Header/index.jsx';
import Main from './components/Main/index.jsx';
import Contact from './components/Contact/index.jsx';
import Skills from './components/Skills/index.jsx';
import Portifolio from './components/Portifolio/index.jsx';
import Footer from './components/Footer/index.jsx';

import {learningRepos, personalRepos} from './components/Repositorios/index.jsx' ;
import GlobalStyles, { theme } from './components/GlobalStyles/index.jsx';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';

function App() {      

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true)

    
    function handleMenuOpen() {
      setIsMenuOpen(!isMenuOpen)
    }
    
    let lastPosition = 0;
    function isScrolling() {
      const currentPosition = window.scrollY; 
      if(isHeaderVisible && lastPosition < currentPosition && currentPosition > 300) {
          setIsHeaderVisible(false)
          setIsMenuOpen(false)
      } else {
        setIsHeaderVisible(true)
      }
      lastPosition = currentPosition;
    }

  useEffect(() => {
    document.addEventListener('scroll', isScrolling);
  },[])
      
      const repos = learningRepos.map(repo => {   
      return(
        {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          languages: repo.languages,
          githubLink: repo.githubLink,
          pageLink: repo.pageLink,
          backImage: repo.backImage,
        }
      )
    })

    

    const highlightrepos = personalRepos.map(repo => {          
      return(
        {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          languages: repo.tags,
          githubLink: repo.githubLink,
          pageLink: repo.pageLink,
          backImage: repo.backImage,
        }
      )
    })
  
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Header 
          isMenuOpen={isMenuOpen}
          isHeaderVisible={isHeaderVisible}
          handleMenuOpen={handleMenuOpen}
          />
          <Main />
          <About />
          <Contact />
          <Skills />
          <Portifolio learningRepos={repos} highlightrepos={highlightrepos}/>
          <Footer />
        </ThemeProvider>
      </>
    );
  }

export default App;
