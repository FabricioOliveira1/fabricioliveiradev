import styled from 'styled-components';

interface TagProps {
  currentTag: string;
}

function handleTagColors (currentTag:string) {
  switch (currentTag) {
    case 'React':
      return "color: #000000; background: #59D1F3"
      break
    case 'React Native':
      return "color: #ffffff; background: #006EB8"
      break
    case 'Expo':
      return "color: #ffffff; background: #000000"
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

const StyledTag = styled.span<{ $currentTag:string }>`

  padding-inline: 0.5rem;
  border-radius: 20px;
  display: inline-block;
  text-align: center;
  font-family: 'RubikMedium';
  margin:0rem 0.3rem 0.3rem 0rem;
  ${({ $currentTag }) => handleTagColors($currentTag)};

:first-letter {
  text-transform: capitalize;
}
`

const Tag: React.FC<TagProps> = ({ currentTag }) => {

  return (
    <StyledTag $currentTag={currentTag}>{currentTag}</StyledTag>
  )
}

export default Tag;