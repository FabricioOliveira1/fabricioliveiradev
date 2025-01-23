import { useEffect, useState } from 'react';
import Contact from '../Contact';
import styled from 'styled-components';

const StyledOpenNav = styled.div`

  height: ${({ $menuHeight }) => $menuHeight};
  background-color: ${({theme}) => theme.colors.bgDark};
  width: 100vw;
  overflow: hidden;
  transition: 0.3s;

.openNavList {
  list-style: none;
  padding: 0;
}

.openNavList li {
  text-align: center;
  padding-block: 20px;
}

.openNav-listItem a{
  font-size: 16px;
  text-decoration: none;
  color: ${({theme}) => theme.colors.brandLight};
}
`

const OpenNav = ({ isMenuOpen, handleMenuOpen }) => {

  const [menuHeight, setMenuHeight] = useState('0vh') 

  useEffect(() => {
    isMenuOpen ? setMenuHeight('100vh') : setMenuHeight('0')
  }, [isMenuOpen])

  return (
    <StyledOpenNav $menuHeight={menuHeight}>
      <ul className='openNavList'>
        <li className='openNav-listItem'><a onClick={ () => {handleMenuOpen()} } href='#main'>Inicio</a></li>
        <li className='openNav-listItem'><a href='#about'>Sobre</a></li>
        <li className='openNav-listItem'><a href='https://github.com/FabricioOliveira1?tab=repositories' target="_blank">Repositórios</a></li>
        <li className='openNav-listItem'><a href='#portifolio'>Projetos</a></li>
      </ul>
      <Contact/>
    </StyledOpenNav>
  )
}

export default OpenNav;