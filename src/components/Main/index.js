import CTABUtton from "../ui/Buttons/CTAButton"
import './Main.css'
import astronauta from '../../assets/undraw_launch_day_4e04.svg'

const Main = () => {
  return (
    <section id="home" className='main'>
      <h1>Olá eu sou<br/> <strong>Fabricio Oliveira</strong> Desenvolvedor<br/> Front-end</h1>
      <p>Web Developer</p>
      <CTABUtton text={'Veja Meus Projetos'}/> 
      <img src={astronauta} alt='Astronauta no espaço'/>
    </section>
  )
}
export default Main