import WhatsappButton from '../ui/Buttons/WhatsappButton';
import Nav from '../Nav'; 
import OpenNav from '../OpenNav';
import { forwardRef } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  isMenuOpen: boolean;
  handleMenuOpen: () => void;
}

const StyledHeader = styled.section`

height: 5rem;
background: ${props => props.theme.colors.bgDark};
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: stretch; /* colocar mediaquerie para desktop */
overflow: hidden;
width: 100%;
padding-block: 0rem;
z-index: 20;
@media (min-width: 1024px) {
  align-items: center;
}
`
const StyledContainer = styled.div`
max-width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 1rem;

@media (min-width: 1024px) {
  width: 1024px;
}
` 
const Header = forwardRef<HTMLDivElement, HeaderProps>(({ isMenuOpen,  handleMenuOpen }, ref) => {

  return (
    <StyledHeader ref={ref} >
      <StyledContainer>
        <WhatsappButton />
        <Nav handleMenuOpen={handleMenuOpen} />
      </StyledContainer>
      <OpenNav isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen}/>   
    </StyledHeader>
  )
})

export default Header;