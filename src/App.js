import './App.css'

import About from './components/About';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Portifolio from './components/Portifolio';
import Footer from './components/Footer';

import {learningRepos, personalRepos} from './components/Repositorios/index.js' ;

import scrollreveal from 'scrollreveal';
import { useEffect } from 'react';



function App() {
  /*async function handleRepositorios () {
    const response = await fetch('https://api.github.com/users/FabricioOliveira1/repos')
  if (response.status === 200) {
    const obj = await response.json()
  }
    scrollreveal({
      origin: 'start',
      distance: '200px',
      duration: 1500,
  }).reveal(`
  
mainImage

  .mainContainer`);*/

  useEffect(() => {
    scrollreveal({reset: true})
    scrollreveal().reveal('.mainContainer', { origin: 'left', distance: '500px', duration: 300, })
    scrollreveal().reveal('.mainImage', { origin: 'left', distance: '-500px', duration: 300, })
    scrollreveal().reveal('.aboutContainer', { origin: 'left', distance: '500px', duration: 300, })
    scrollreveal().reveal('.aboutContainer-reverse', { origin: 'left', distance: '-500px', duration: 300, })
    scrollreveal().reveal('.skills', {duration: 300})
    scrollreveal().reveal('.mainSkills', {origin: 'top', distance: '100px', duration: 1000})
    scrollreveal().reveal('.powerups', {origin: 'bottom', distance: '100px', duration: 1000})
    scrollreveal().reveal('.personalProjects', { origin: 'right', distance: '500px', duration: 300, })
    scrollreveal().reveal('.learningProjects', { origin: 'left', distance: '50px', duration: 300, })
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
      <div>
        <Header />
        <Main />
        <About />
        <Contact />
        <Skills />
        <Portifolio learningRepos={repos} highlightrepos={highlightrepos}/>
        <Footer />
      </div>
    );
  }

  


export default App;
