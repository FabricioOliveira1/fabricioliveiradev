import styled from 'styled-components'
import fundoBanner from '../../assets/fundo-banner.jpg'
import arrowLink from '../../assets/arrow-link.png'
import { projects, projectsProps } from '../../projects'

const StyledPortifolio = styled.section`

  background: linear-gradient( ${props => props.theme.colors.bgDark} 20%, rgb(255, 255, 255, 0) 80%, ${props => props.theme.colors.bgDark}), url(${fundoBanner}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: .7s ease-in slideUp;

  h2 {
  font-size: 32px;
  text-align: center;
  color: ${props => props.theme.colors.secondaryColor};
  }
  
  .personalProjects > h3 {
    font-size: 18px;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .barContainer {
    border-radius: 0 0 5px 5px;
    background-color: ${props => props.theme.colors.primaryColor};
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .cardContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap; 
  }
    .cardButton {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primaryColor};
    border-radius: 20px;
    padding-inline: 0.75rem;
    padding-block: 0.25rem;
    text-decoration: none;
  }

  .cards {
    border-radius: 0 0 5px 5px;
    width: 30rem;
    background-color: ${props => props.theme.colors.primaryColor}; 
    margin-bottom: 1.5rem;
    overflow: hidden;
    transition: ease-in-out transform 0.09s, ease-in-out height 0.09s 0.15s, ease-in-out background-color 0.09s 0.15s;
  }
  .image{
    max-width: 100%;
    height: fit-content;
  }
 
  @media (min-width: 768px) {
    align-items: center;
    .cards {
      background-color: ${props => props.theme.colors.secondaryColor};
      height: 13.75rem;
    }
    .cards:hover {
    transform: scale(1.05); 
    height: 17rem;
    background-color: ${props => props.theme.colors.primaryColor}; 
  }
}
`
const Portifolio = () => {
  return (
    <StyledPortifolio id='portifolio'>
      <h2>Projetos</h2>
      {projects.map((project: Pick<projectsProps, "name" | "pageLink" | "backImage"> ) => (
        <div key={project.name} className='personalProjects'>
          <div className='cardContainer'>
            <div className='cards'>
              <img className='image' alt="Logo do Hora Certa Med" src={`/images/RepoImages/${project.backImage}`} />
              <div className='barContainer'>
                <h4>{project.name}</h4>
                <a className='cardButton' href={project.pageLink} target="_blank">
                  <p>Ver sobre</p>
                  <img src={arrowLink} alt='Imagem de seta para seguir o link' width="25" height="25" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </StyledPortifolio>
  )
}

export default Portifolio