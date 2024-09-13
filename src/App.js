import About from './components/About';
import Header from './components/Header';
import Main from './components/Main';

import './App.css'
import Contact from './components/Contact';
import Skills from './components/Skills';
import Portifolio from './components/Portifolio';

import nathlogo from './assets/nathalia-brum-img.png'
import Footer from './components/Footer';
import { useState } from 'react';
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

  const [learningRepos, setlearningRepos] = useState([{name: 'Teste Repo', description: 'Essa é uma descrição em React', id: 1}])

   async function getRepositories() {
    const response = await fetch('https://api.github.com/users/FabricioOliveira1/repos')
    if (response.status === 200) {
      const obj = await response.json()
      setlearningRepos(obj)
    }
  }

  useEffect(() => {
    getRepositories()
  } ,[]) 

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
