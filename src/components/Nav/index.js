import MenuButton from '../ui/Buttons/MenuButton';

const Nav = ({ handleMenuOpen }) => {


  return (
    <nav className='nav'>
      <MenuButton  handleMenuOpen={handleMenuOpen}/>
    </nav>
  )
}

export default Nav