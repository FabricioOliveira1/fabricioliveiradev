import rocketLaunch from '../../assets/undraw_maker_launch_crhe.svg'
import stars from '../../assets/undraw_stars_re_6je7.svg'
import styled from 'styled-components'
import { motion } from 'motion/react'

const StyledAbout = styled.section`
  
  background: ${({ theme }) => theme.colors.bgDark};
  padding-inline: 1.5rem;

  font-size: 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 1.5rem;

h2 {
  color: ${({ theme }) => theme.colors.brandLight};
  text-align: center;
  padding: 1.5rem;
  font-size: 32px;
  
}
strong {
  color: ${({ theme }) => theme.colors.secondaryColor};
}
p {
  line-height: 1.5rem;
  
}

a{
  text-decoration: underline dotted 2px ${({ theme }) => theme.colors.secondaryColor};
}
a:visited {
  color: ${({ theme }) => theme.colors.secondaryColor};
}

img {
  max-width: 15rem;
}

.aboutContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  
}
.aboutContainer-reverse {
  
}

@media (min-width: 1024px) {
  .aboutContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
  }
  .aboutContainer-reverse i {
    order: 2;
  }
  .aboutContainer-reverse img {
    order: 1;
  }
}
`

const About = () => {


  return (
    <StyledAbout id='about'>
      <motion.h2 initial={{
        y: 100,
        opacity: 0
      }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: .7 }
        }}>
        Sobre <strong>mim</strong>
      </motion.h2>
      <motion.div initial={{
            x: -100,
            opacity: 0
          }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: .7 }
            }} className='aboutContainer'>
        <p>Sou um desenvolvedor <strong>Front-end</strong>, tenho 31 anos e moro Rio de Janeiro. Atualmente cursando faculdade de <strong>Analise e Desenvolvimento de Sistemas</strong>, e cursos para especialização em <strong>React</strong>.
          <strong> O meu principal objetivo é evoluir como desenvolvedor</strong>. Então, se você é uma empresa que procura por uma presença melhor na internet, ou se deseja <strong>contratar</strong>, pode entrar em contato comigo <a target='blank' href="https://wa.me/5521997592837?">aqui</a>, ou ver alguns trabalhos <a href='#portifolio'>aqui</a>.</p>
        <img src={rocketLaunch} alt='Imagem de um personagem lançando um foguete' />
      </motion.div>
      <motion.div initial={{
            x: 100,
            opacity: 0
          }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: .7 }
            }} className='aboutContainer aboutContainer-reverse'>
        <i>
          <p >"Today is the opportunity to build the tomorrow you want."
          </p>
          <p><strong>Ken Poirot</strong></p>
        </i>
        <img src={stars} alt='Imagem de um personagem lançando um foguete' />
      </motion.div>
    </StyledAbout>
  )
}

export default About;