import './App.css'

import About from './components/About';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Portifolio from './components/Portifolio';
import Footer from './components/Footer';

import nathlogo from './assets/nathalia-brum-img.png'
import learningRepos from './components/Repositorios'
import { useEffect } from 'react';

const cardsInfo = [
  { projectName: 'nathaliabrum',
    title:'Site Social Media Nathalia',
    tags: ['javascript','react', 'css'],
    description: 'Site pessoal da profissional de Social Media Nathalia Brum',
    image: nathlogo
  }
  
]

function App() {
  /*async function handleRepositorios () {
    const response = await fetch('https://api.github.com/users/FabricioOliveira1/repos')
  if (response.status === 200) {
    const obj = await response.json()
  }*/
       
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
  
    return (
      <div>
        <Header />
        <Main />
        <About />
        <Contact />
        <Skills />
        <Portifolio learningRepos={repos} cardsInfo={cardsInfo}/>
        <Footer />
      </div>
    );
  }

  


export default App;
