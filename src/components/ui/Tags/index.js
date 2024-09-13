import './Tag.css'

const Tag = ({currentTag}) => {


  let SpanbackgroundColor = '#ffffff'
  let SpanTextColor = '#ffffff'

  switch (currentTag) {
    case 'React':
      SpanbackgroundColor = '#59D1F3';
      SpanTextColor = '#000000'
      break
    case 'JavaScript':
      SpanbackgroundColor = '#EFD71F';
      SpanTextColor = '#000000'
      break
    case 'CSS':
      SpanbackgroundColor = '#006EB8';
      SpanTextColor = '#ffffff'
      break
    case 'TypeScript':
      SpanbackgroundColor = '#2D7AC8';
      SpanTextColor = '#ffffff'
      break
    case 'HTML':
      SpanbackgroundColor = '#E54A1F' ; 
      SpanTextColor = '#ffffff'
      break;
    default:  
      SpanbackgroundColor = '#ffffff'
      SpanTextColor = '#000000'
  }

  return (
    <span style={{backgroundColor: SpanbackgroundColor, color: SpanTextColor}} className='tag'>{currentTag}</span>
  )
}

export default Tag