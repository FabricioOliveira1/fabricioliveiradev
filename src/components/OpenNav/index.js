import { useEffect, useState } from 'react';
import Contact from '../Contact';
import './OpenNav.css'

const OpenNav = ({ isOpen }) => {

  const [menuHeight, setMenuHeight] = useState('0vh') 

  useEffect(() => {
    isOpen ? setMenuHeight('100vh') : setMenuHeight('0')
  }, [isOpen])

  return (
    <div className='openNav' style={{ 'height':`${menuHeight}`}}>
      <ul className='openNavList'>
        <li className='openNav-listItem'><a href='#home'>Inicio</a></li>
        <li className='openNav-listItem'><a href='#about'>Sobre</a></li>
        <li className='openNav-listItem'><a href='#portifolio'>Repositórios</a></li>
        <li className='openNav-listItem'><a href='#projetos'>Projetos</a></li>
      </ul>
      <Contact/>
    </div>
  )
}

export default OpenNav;