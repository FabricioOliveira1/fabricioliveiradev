import MenuButton from '../ui/Buttons/MenuButton';
import styled from 'styled-components';

const StyledNav = styled.nav`
  
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
.navLinks {
    display: none;
}

.navLinks-list {
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: row;
} 

.navLinks-listItem {
    padding: 1rem;

}

.navLinks-listItem a {
    color: ${props => props.theme.colors.brandLight};
    text-decoration: none;
}
.navLinks-listItem a:hover {
  text-shadow: 2px 2px 8px ${props => props.theme.colors.brandLight};
}

@media (min-width: 1024px) {
    .navLinks {
        display: block;
    }
}
`;

const Nav = ({ handleMenuOpen }) => {

  return (
    <StyledNav>
      <div className='navLinks'>
        <ul className='navLinks-list'>
          <li className='navLinks-listItem'><a href='#home'>Inicio</a></li>
          <li className='navLinks-listItem'><a href='#about'>Sobre</a></li>
          <li className='navLinks-listItem'><a href='#portifolio'>Repositórios</a></li>
          <li className='navLinks-listItem'><a href='#projetos'>Projetos</a></li>
        </ul>
      </div>
      <MenuButton  handleMenuOpen={handleMenuOpen}/>
    </StyledNav>
  )
}

export default Nav