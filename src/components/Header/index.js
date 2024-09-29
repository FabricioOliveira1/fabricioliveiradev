import WhatsappButton from '../ui/Buttons/WhatsappButton';
import Nav from '../Nav';
import './Header.css'
import OpenNav from '../OpenNav';
import { useEffect, useState } from 'react';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [headerHeight, setHeaderHeight] = useState('0vh') 

  function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen)
  }

    let lastPosition = 0;
    console.log('lastposition: ', lastPosition)

    function isScrolling() {
        
        const currentPosition = window.scrollY;
        console.log(currentPosition)

        if(isHeaderVisible && lastPosition < currentPosition) {
          console.log('↓↓↓')
          console.log(currentPosition)
          setIsHeaderVisible(false)
          
      }
       if (!isHeaderVisible && lastPosition > currentPosition) {
           console.log('↑↑↑'); 
           console.log(currentPosition)
           setIsHeaderVisible(true)
           
      }
      lastPosition = currentPosition

      

    } 
      
    useEffect(() => {
      document.addEventListener('scroll', isScrolling);
      
    },[isHeaderVisible])

   useEffect(() => {
    isHeaderVisible ? setHeaderHeight('4rem') : setHeaderHeight('0')
  },[isHeaderVisible]) 

  return (
    <section className="header" style={{'height' : `${headerHeight}`}}>
      <div className='header-container' >
        <WhatsappButton />
        <Nav handleMenuOpen={handleMenuOpen} />
      </div>
      <OpenNav isMenuOpen={isMenuOpen} /> 
      
    </section>
  )
}

export default Header;