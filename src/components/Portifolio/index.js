import './Portifolio.css'
import HighlightCard from '../ui/Cards/HighlightCard'
import SliderCard from '../ui/Cards/SliderCard'


const Portifolio = ({ learningRepos, cardsInfo }) => {

  

  return (
    <section className='portifolio'>
      <h2>Projetos</h2>
      <div className='personalProjects'>
        <h3>Destaques</h3>
        <ul className='personalProjects-list'>
          {cardsInfo.map((card) =>  <HighlightCard key={card.projectName} info={card} /> )}
        </ul>
      </div>
      <div className='learningProjects'>
        <h3>Cursos</h3>
        <ul>
          {learningRepos.map((repo) =>  <SliderCard key={repo.id}  info={repo} /> )}
        </ul>
      </div>
    </section>

  )
}

export default Portifolio