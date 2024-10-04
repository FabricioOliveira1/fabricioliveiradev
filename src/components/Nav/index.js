import './Nav.css'
import MenuButton from '../ui/Buttons/MenuButton';

const Nav = ({ handleMenuOpen }) => {


  return (
    <nav className='nav'>
      <div className='navLinks'>
        <ul className='navLinks-list'>
          <li className='navLinks-listItem'><a href='#home'>Inicio</a></li>
          <li className='navLinks-listItem'><a href='#about'>Sobre</a></li>
          <li className='navLinks-listItem'><a href='#portifolio'>Repositórios</a></li>
          <li className='navLinks-listItem'><a href='#projetos'>Projetos</a></li>
        </ul>
      </div>
      <MenuButton  handleMenuOpen={handleMenuOpen}/>
    </nav>
  )
}

export default Nav