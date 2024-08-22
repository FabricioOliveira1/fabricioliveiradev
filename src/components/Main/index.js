import CTABUtton from "../Buttons/CTAButton"
import './Main.css'
import astronauta from '../../assets/undraw_launch_day_4e04.svg'

const Main = () => {
  return (
    <section className='main'>
      <h1>Olá eu sou<br/> <strong>Fabricio oliveira</strong> Desenvolvedor<br/> Front-end</h1>
      <p>Web Developer</p>
      <CTABUtton text={'Veja Meus Projetos'}/> 
      <img src={astronauta} alt='Astronauta no espaço'/>
    </section>
  )
}
export default Main