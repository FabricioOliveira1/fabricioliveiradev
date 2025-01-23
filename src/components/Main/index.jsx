import CTABUtton from "../ui/Buttons/CTAButton"
import fotoPricipal from '../../assets/foto-pricipal.png'
import fundoBanner from '../../assets/fundo-banner.jpg'
import styled from "styled-components"

const StyledMain = styled.section`
  
  background: linear-gradient( ${props => props.theme.colors.bgDark} 20%, rgb(255, 255, 255, 0) 80%, ${props => props.theme.colors.bgDark}),  url(${fundoBanner})  no-repeat; 
  
  background-size: cover;
  height: 50vh;
  padding-top: 15rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  
  .mainContainer{
    color: ${props => props.theme.colors.brandLight};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    font-size: 24px;
    animation: .7s ease-in slideUp;
    }
    
    strong, p{
      color: ${props => props.theme.colors.secondaryColor};
    }
      
    h1, p {
      padding: 0;
      margin: 0;
      text-align: center;
      line-height: 2.5rem;
    }
        
    img {
      width: 17rem;
      animation: .7s ease-in slideUp;
    }



@media (min-width: 1024px) {
  
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10rem 0 0 5rem;
  
  .mainContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }
  .mainContainer h1 {
    text-align: left;
  }
} 
`

const Main = () => {
  return (
    <StyledMain  id="main">
       <div className="mainContainer">
        <h1>Olá, eu sou<br/> <strong>Fabricio Oliveira<br/></strong> Desenvolvedor<br/> Front-end</h1>
        <p>Web Developer</p>
        <CTABUtton link={'#portifolio'}>
          Veja meus Projetos
        </CTABUtton> 
      </div>
      <img src={fotoPricipal} alt='Astronauta no espaço'/> 
    </StyledMain>
  )
}
export default Main;