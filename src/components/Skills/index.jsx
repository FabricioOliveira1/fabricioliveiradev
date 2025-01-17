import javascriptIcon from '../../assets/javascript-icon.png'
import figmaIcon from '../../assets/figma.png'
import canvaIcon from '../../assets/canva.svg'
import notionIcon from '../../assets/notion.svg'
import wordpressIcon from '../../assets/wordpress.png'
import elementorIcon from '../../assets/elementor.png'
import typescriptIcon from '../../assets/typescript-icon.png'
import reactIcon from '../../assets/react-icon.png'
import styledIcon from '../../assets/styled-components-icon.svg'
import CSSIcon from '../../assets/css-icon.png'
import styled from 'styled-components'

const StyledSkills = styled.section`
  
  background-color: ${props => props.theme.colors.primaryColor};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  overflow: hidden;

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

.typescriptIcon,
.javascriptIcon,
.reactIcon {
  margin-top: 0.4rem;
}

.powerups {
  background: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
}

.list {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 0;
  animation-name: slide-in;
  animation: normal;
  animation-iteration-count: infinite;
}

li {
  font-size: 18px;
  display: inline;
  white-space: nowrap; /* no break lines */
}
@keyframes slide-in {
  from {
    translate: 0;
  }
  to {
    translate: 150px;
  }
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
        <img className='CSSIcon' src={CSSIcon} width="65" height="65" alt='Icone do CSS' />
          <h3>CSS</h3>
        </div>
        
        
      </div>
      <div className='powerups'>
        <ul className='list'>
          <li><p>Styled Components /&nbsp;</p></li>
          <li><p>Tailwind /&nbsp;</p></li>
          <li><p>SASS /&nbsp;</p></li>
          <li><p>WordPress /&nbsp;</p></li>
          <li><p>Elementor /&nbsp;</p></li>
          <li><p>Figma /&nbsp;</p></li>
          <li><p>Canva /&nbsp;</p></li>
          <li><p>Notion /&nbsp;</p></li>
          <li><p>GitHub /&nbsp;</p></li>
          <li><p>Node.js</p></li>
        </ul>
      </div>
    </StyledSkills>
  )
}

export default Skills;