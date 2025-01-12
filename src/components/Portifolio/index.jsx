import HighlightCard from '../ui/Cards/HighlightCard'
import SliderCard from '../ui/Cards/SliderCard'
import styled from 'styled-components'
import fundoBanner from '../../assets/fundo-banner.jpg'


const StyledPortifolio = styled.section`

  background: linear-gradient( ${props => props.theme.colors.bgDark} 20%, rgb(255, 255, 255, 0) 80%, ${props => props.theme.colors.bgDark}), url(${fundoBanner}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

 h2 {
  text-align: center;
  color: ${props => props.theme.colors.secondaryColor};
}

 h3 {
  text-align: center;
}

 h4 {
  margin-block: 0;
}
 .personalProjects-list,
 .learningProjects {
  padding-inline: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.learningProjects {
  display: block; 
  
}

.learningProjects ul {
  display: flex;
  flex-wrap: nowrap;
  padding-left: 0;  
  overflow: auto;
  
}

.learningProjects ul::-webkit-scrollbar {
  display: none;
}



@media (min-width: 768px) {
   .personalProjects-list {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
   .learningProjects ul{
    overflow-x: scroll;
  }
   .learningProjects ul:hover::-webkit-scrollbar {
    display: initial;
    background-color: ${props => props.theme.colors.textDark};
    height: .7rem;
  }
   .learningProjects ul::-webkit-scrollbar-thumb   {
    background-color: ${props => props.theme.colors.brandLight};
    border-radius: 20px;
  }
  
}
`

const Portifolio = ({ learningRepos, highlightrepos }) => {

  return (
    <StyledPortifolio id='portifolio'>
      <h2>Projetos</h2>
      <div className='personalProjects'>
        {/* <h3>Destaques</h3>
        <ul className='personalProjects-list'>
          {highlightrepos.map((repo) => 
           <HighlightCard key={repo.id} info={repo} /> 
          )}
        </ul> */}
      </div>
      <div className='learningProjects'>
        <h3>Projetos de Cursos</h3>
        <ul>
          {learningRepos.map((repo) =>  <SliderCard key={repo.id}  info={repo} /> )}
        </ul>
      </div>
    </StyledPortifolio>
  )
}

export default Portifolio