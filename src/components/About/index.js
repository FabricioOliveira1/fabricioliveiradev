import './About.css'
import rocketLaunch from '../../assets/undraw_maker_launch_crhe.svg'
import stars from '../../assets/undraw_stars_re_6je7.svg'

const About = () => {
  return (
    <section id='about' className='about'>
      <h2>Sobre <strong>mim</strong></h2>
      <p>Sou um desenvolvedor <strong>Front-end</strong>, tenho 30 anos e moro Rio de Janeiro. Atualmente cursando faculdade de <strong>Analise e Desenvolvimento de Sistemas</strong>, e cursos para especialização em <strong>React</strong>.
      <strong>O meu principal objetivo é evoluir como desenvolvedor</strong>. Então, se você é uma empresa que procura por uma presença melhor na internet, ou se deseja <strong>contratar</strong>, pode entrar em contato comigo <a target='blank' href="https://wa.me/5521997592837?">aqui</a>, ou ver alguns trabalhos <a href='#projects'>aqui</a>.</p>
      <img src={rocketLaunch} alt='Imagem de um personagem lançando um foguete'/>
      <i>
        <p>"Today is the opportunity to build the tomorrow you want."</p>
        <p><strong>Ken Poirot</strong></p>
     </i>
     <img src={stars} alt='Imagem de um personagem lançando um foguete'/>
    </section>
  )
}

export default About;