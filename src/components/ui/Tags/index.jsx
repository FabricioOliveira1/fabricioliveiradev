import styled from 'styled-components';
import './Tag.css'

function handleTagColors (currentTag) {
  switch (currentTag) {
    case 'React':
      return "color: #000000; background: #59D1F3"
      break
    case 'JavaScript':
      return "color: #000000; background: #EFD71F"
      break
    case 'CSS':
      return "color: #ffffff; background: #006EB8"
      break
    case 'TypeScript':
      return "color: #ffffff; background: #2D7AC8"
      break
    case 'HTML':
      return "color: #ffffff; background: #E54A1F"
      break;
    default:  
      return "color: #000000; background: #ffffff"
  }
}

const StyledTag = styled.span`

  padding-inline: 0.5rem;
  border-radius: 20px;
  display: inline-block;
  text-align: center;
  font-family: 'RubikMedium';
  margin-right: 0.3rem;
  ${({ $currentTag }) => handleTagColors($currentTag)};

:first-letter {
  text-transform: capitalize;
}
`
const Tag = ({currentTag}) => {

  return (
    <StyledTag $currentTag ={currentTag}>{currentTag}</StyledTag>
  )
}

export default Tag;