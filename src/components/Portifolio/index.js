import './Portifolio.css'
import HighlightCard from '../ui/Cards/HighlightCard'
import SliderCard from '../ui/Cards/SliderCard'


const Portifolio = ({ learningRepos, highlightrepos }) => {


  return (
    <section id='portifolio' className='portifolio'>
      <h2>Projetos</h2>
      <div className='personalProjects'>
        <h3>Destaques</h3>
        <ul className='personalProjects-list'>
          {highlightrepos.map((repo) => 
           <HighlightCard key={repo.id} info={repo} /> 
          )}
        </ul>
      </div>
      <div className='learningProjects'>
        <h3>Projetos de Cursos</h3>
        <ul>
          {learningRepos.map((repo) =>  <SliderCard key={repo.id}  info={repo} /> )}
        </ul>
      </div>
    </section>

  )
}

export default Portifolio