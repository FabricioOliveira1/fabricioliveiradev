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

  const [learningRepos, setlearningRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/FabricioOliveira1/repos')
      .then(data => {
        setlearningRepos(...learningRepos, data.json())
      })
  },[])

  console.log(learningRepos)

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
