import WhatsappButton from '../ui/Buttons/WhatsappButton';
import Nav from '../Nav'; 
import OpenNav from '../OpenNav';
import { useEffect, useState } from 'react';
import styled from 'styled-components';


const StyledHeader = styled.section`

height: ${props => props.$headerHeight};
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

const Header = ({ isMenuOpen, isHeaderVisible, handleMenuOpen }) => {

  const [headerHeight, setHeaderHeight] = useState('5rem') 

  useEffect(() => {
    if (isMenuOpen){
      setHeaderHeight('100vh')
    } else {
      setHeaderHeight('5rem')
    }
  },[isMenuOpen])

  useEffect(() => {
    isHeaderVisible ? setHeaderHeight('5rem') : setHeaderHeight('0')
  },[isHeaderVisible]) 

  return (
    <StyledHeader $headerHeight={headerHeight}>
      <StyledContainer>
        <WhatsappButton />
        <Nav handleMenuOpen={handleMenuOpen} />
      </StyledContainer>
      <OpenNav isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen}/>   
    </StyledHeader>
  )
}

export default Header;