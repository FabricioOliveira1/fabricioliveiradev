import WhatsappButton from '../Buttons/WhatsappButton';
import Nav from '../Nav';
import './Header.css'

const Header = () => {
  return (
    <section className="header">
      <WhatsappButton />
      <Nav/>
    </section>
  )
}

export default Header;