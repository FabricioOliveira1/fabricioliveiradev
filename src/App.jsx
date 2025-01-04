import './App.css'

import About from './components/About/index.jsx'
import Header from './components/Header/index.jsx';
import Main from './components/Main/index.jsx';
import Contact from './components/Contact/index.jsx';
import Skills from './components/Skills/index.jsx';
import Portifolio from './components/Portifolio/index.jsx';
import Footer from './components/Footer/index.jsx';

import {learningRepos, personalRepos} from './components/Repositorios/index.jsx' ;

function App() {      
       
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
