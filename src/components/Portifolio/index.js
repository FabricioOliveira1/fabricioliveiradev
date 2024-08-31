import './Portifolio.css'
import Card from '../ui/Card'


const Portifolio = ({cardsInfo}) => {

  return (
    <section className='portifolio'>
      <h2>Projetos</h2>
      <div className='personalProjects'>
        <h3>Destaques</h3>
        <ul className='personalProjects-list'>
          {cardsInfo.map((card) =>  <Card key={card.projectName} info={card} /> )}
        </ul>
      </div>
    </section>

  )
}

export default Portifolio