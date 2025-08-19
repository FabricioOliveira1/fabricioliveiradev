import styled from 'styled-components'
import fundoBanner from '../../assets/fundo-banner.jpg'
import { projects, projectsProps } from '../../projects'
import ProjectCard from '../ui/ProjectCard'

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
 
  @media (min-width: 768px) {
    align-items: center;
    .cards {
      background-color: ${props => props.theme.colors.secondaryColor};
      height: 13.75rem;
    }
    .cards:hover {
    transform: scale(1.05); 
    height: auto;
    background-color: ${props => props.theme.colors.primaryColor}; 
  }
}
`
const Portifolio = () => {
  return (
    <StyledPortifolio id='portifolio'>
      <h2>Projetos</h2>
      {projects.map((project: projectsProps) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </StyledPortifolio>
  )
}

export default Portifolio