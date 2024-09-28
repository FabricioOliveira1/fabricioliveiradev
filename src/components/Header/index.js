import WhatsappButton from '../ui/Buttons/WhatsappButton';
import Nav from '../Nav';
import './Header.css'
import OpenNav from '../OpenNav';
import { useState } from 'react';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  function handleMenuOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <section className="header">
      <div className='header-container'>
        <WhatsappButton />
        <Nav handleMenuOpen={handleMenuOpen} isOpen={isOpen} />
      </div>
      <OpenNav isOpen={isOpen} /> 
      
    </section>
  )
}

export default Header;