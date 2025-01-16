import javascriptIcon from '../../assets/javascript-icon.png'
import figmaIcon from '../../assets/figma.png'
import canvaIcon from '../../assets/canva.svg'
import notionIcon from '../../assets/notion.svg'
import wordpressIcon from '../../assets/wordpress.png'
import elementorIcon from '../../assets/elementor.png'
import typescriptIcon from '../../assets/typescript-icon.png'
import reactIcon from '../../assets/react-icon.png'
import styledIcon from '../../assets/styled-components-icon.svg'
import styled from 'styled-components'

const StyledSkills = styled.section`
  
  background-color: ${props => props.theme.colors.primaryColor};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  text-align: center;
strong {
  color: ${props => props.theme.colors.secondaryColor};
}

.mainSkills {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap: 1rem;
}

.mainSkills div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.javascriptIcon {
  margin-top: 0.35rem;
}

.typescriptIcon g {
  mix-blend-mode: normal;
  fill: ${props => props.theme.colors.tagTypescriptBg};
}

.reactIcon {
  fill: ${props => props.theme.colors.tagReactBg};
}

.cssIcon {
  fill: ${props => props.theme.colors.tagCssBg};
}

.powerups {
  background: linear-gradient(22deg, #242331 4%, #2F2E41 79%);
  border-radius: 30px;
  padding: 1rem;
}

.list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 0;
  
}

li {
  font-size: 18px;
  list-style: none;
}

@media (min-width:1024px) {
  .powerups {
    margin-inline: auto;
    width: 50rem;
  }
  
} 

`

const Skills = () => {
  return (
    <StyledSkills>
      <h2>Minhas Skills e <strong>Power up's</strong></h2>
      <div className='mainSkills'>
        <div>
        <img className='reactIcon' src={reactIcon} width="54" height="54" alt='Icone do react' />
          <h3>React.js</h3>
        </div>
        <div>
          <img className='javascriptIcon' src={javascriptIcon} width="54" height="54" alt='Icone do Javascript' />
          <h3>Javascript</h3>
        </div>
        <div>
        <img className='typescriptIcon' src={typescriptIcon} width="54" height="54" alt='Icone do Typescript' />
          <h3>Typescript</h3>
        </div>
        <div>
        <img className='styledIcon' src={styledIcon} width="54" height="54" alt='Icone do Styled Components' />
          <h3>Styled Components</h3>
        </div>
        
      </div>
      <div className='powerups'>
        <ul className='list'>
          <li><img src={figmaIcon}  alt='Icone do Figma'/></li>
          <li><img src={canvaIcon}  alt='Icone do Canva' width="48" height="48"/></li>
          <li><img src={notionIcon}  alt='Icone do Notion' width="48" height="48"/></li>
          <li><img src={wordpressIcon}  alt='Icone do Wordpress' width="48" height="48"/></li>
          <li><img src={elementorIcon}  alt='Icone do Wordpress' width="48" height="48"/></li>
        </ul>
      </div>
    </StyledSkills>
  )
}

export default Skills