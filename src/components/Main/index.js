import CTABUtton from "../ui/Buttons/CTAButton"
import './Main.css'
import astronauta from '../../assets/undraw_launch_day_4e04.svg'

const Main = () => {
  return (
    <section id="home" className='main'>
      <div className="mainContainer">
        <h1>Olá eu sou<br/> <strong>Fabricio Oliveira<br/></strong> Desenvolvedor<br/> Front-end</h1>
        <p>Web Developer</p>
        <CTABUtton text={'Veja Meus Projetos'}/> 
      </div>
      <img className="mainImage" src={astronauta} alt='Astronauta no espaço'/>
    </section>
  )
}
export default Main