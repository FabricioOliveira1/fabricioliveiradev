import About from './components/About';
import Header from './components/Header';
import Main from './components/Main';

import './App.css'
import Contact from './components/Contact';
import Skills from './components/Skills';
import Portifolio from './components/Portifolio';

import nathlogo from './assets/nathalia-brum-img.png'
import Footer from './components/Footer';


const cardsInfo = [
  { projectName: 'nathaliabrum',
    title:'Site Social Media Nathalia',
    tags: ['javascript','react', 'css'],
    description: 'Site pessoal da profissional de Social Media Nathalia Brum',
    image: nathlogo
  },{ projectName: 'nathaliabrum',
    title:'Site Social Media Nathalia',
    tags: ['javascript','react', 'css'],
    description: 'Site pessoal da profissional de Social Media Nathalia Brum',
    image: nathlogo
  },{ projectName: 'nathaliabrum',
    title:'Site Social Media Nathalia',
    tags: ['javascript','react', 'css'],
    description: 'Site pessoal da profissional de Social Media Nathalia Brum',
    image: nathlogo
  },
  
]

function App() {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Contact />
      <Skills />
      <Portifolio cardsInfo={cardsInfo}/>
      <Footer />
    </div>
  );
}

export default App;
