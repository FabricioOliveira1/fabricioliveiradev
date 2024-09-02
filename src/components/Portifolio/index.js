import './Portifolio.css'
import HighlightCard from '../ui/Cards/HighlightCard'
import SliderCard from '../ui/Cards/SliderCard'


const Portifolio = ({cardsInfo}) => {

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
          {cardsInfo.map((card) =>  <SliderCard key={card.projectName} info={card} /> )}
        </ul>
      </div>
    </section>

  )
}

export default Portifolio