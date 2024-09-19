import About from './components/About';
import Header from './components/Header';
import Main from './components/Main';

import './App.css'
import Contact from './components/Contact';
import Skills from './components/Skills';
import Portifolio from './components/Portifolio';

import nathlogo from './assets/nathalia-brum-img.png'
import arrowlink from './assets/arrow-link.png'
import Footer from './components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';

/*import { obj } from '../src/components/object.js'*/

const cardsInfo = [
  { projectName: 'nathaliabrum',
    title:'Site Social Media Nathalia',
    tags: ['javascript','react', 'css'],
    description: 'Site pessoal da profissional de Social Media Nathalia Brum',
    image: nathlogo
  }
  
]

function App() {

    const [learningRepos, setlearningRepos] = useState([]);

    async function handleRepositorios () {
      const response = await fetch('https://api.github.com/users/FabricioOliveira1/repos')
    if (response.status === 200) {
      const obj = await response.json()
      
      const repositorios = obj.map(repo => {

        return(
          {
            id: repo.id,
            name: repo.name,
            description: repo.description || '',
            languages_url: repo.languages_url,
            githubLink: 'https://fabricio-oliveira-portifolio.vercel.app/',
            pageLink: 'https://fabricio-oliveira-portifolio.vercel.app/',
            backgrounImage: arrowlink,
          }
        )
        
      })
      setlearningRepos(repositorios)
    }
    }

    

      useEffect(() => {
        handleRepositorios()
      },[])

      

  return (
    <div>
      <Header />
      <Main />
      <About />
      <Contact />
      <Skills />
      <Portifolio learningRepos={learningRepos} cardsInfo={cardsInfo}/>
      <Footer />
    </div>
  );
}

export default App;
