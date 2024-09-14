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





const cardsInfo = [
  { projectName: 'nathaliabrum',
    title:'Site Social Media Nathalia',
    tags: ['javascript','react', 'css'],
    description: 'Site pessoal da profissional de Social Media Nathalia Brum',
    image: nathlogo
  }
  
]

function App() {

  const [learningRepos, setlearningRepos] = useState([ /*Aqui a lista de objetos precisa estar formatado apenas com os dados necessarios*/
    {id: 1,
      name: 'Teste Repo',
      description: 'Essa é uma descrição em React',
      languages: ['CSS', 'JavaScript', 'TypeScript'], /*precisa chegar aqui formatado se existe ou nao React*/
      githubLink: 'https://fabricio-oliveira-portifolio.vercel.app/',
      pageLink: 'https://fabricio-oliveira-portifolio.vercel.app/',
      backgrounImage: arrowlink,
      },
    {id: 2,
      name: 'Teste Repo 2',
      description: 'Essa é uma descrição em React 2',
      languages: ['React','CSS', 'JavaScript', 'TypeScript'],
      githubLink: 'https://fabricio-oliveira-portifolio.vercel.app/',
      pageLink: 'https://fabricio-oliveira-portifolio.vercel.app/',
      backgrounImage: arrowlink,
      }
  ])


   {/*async function getDatafromAPIRepositories() {

    AQUI FICARÁ RESPONSAVEL PELA LOGICA DE BUSCA NOS REPOSITÓRIOS E FORMATAÇÃO
    SERÁ NECESSARIO FORMATAR TAGS E VERIFICAR SE EXISTE REACT NO TEXTO DE DESCRIPTION

    const []

    const response = await fetch('https://api.github.com/users/FabricioOliveira1/repos')
    if (response.status === 200) {
      const obj = await response.json()
      setlearningRepos(obj)
  }

      
  if(learningRepos.description.includes('React') && !learningRepos.description.includes('React')) {
    setLanguages(['React', ...languages])
  }
  
  
  
  */}

  {/*async function getLanguages(repo) {
    const response = await fetch(info.languages_url)
    if (response.status === 200) {
      const obj = await response.json()
      setLanguages(Object.keys(obj))
  }

  }*/}

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
