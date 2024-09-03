import './Tag.css'

const Tag = ({currentTag}) => {


  let SpanbackgroundColor = '#ffffff'
  let SpanTextColor = '#ffffff'

  switch (currentTag) {
    case 'react':
      SpanbackgroundColor = '#59D1F3';
      SpanTextColor = '#000000'
      break
    case 'javascript':
      SpanbackgroundColor = '#EFD71F';
      SpanTextColor = '#000000'
      break
    case 'css':
      SpanbackgroundColor = '#006EB8';
      SpanTextColor = '#ffffff'
      break
    case 'typescript':
      SpanbackgroundColor = '#2D7AC8';
      SpanTextColor = '#ffffff'
      break
    case 'html':
      SpanbackgroundColor = '#E54A1F' ; 
      SpanTextColor = '#ffffff'
      break;
    default:  
  }

  return (
    <span style={{backgroundColor: SpanbackgroundColor, color: SpanTextColor}} className='tag'>{currentTag}</span>
  )
}

export default Tag