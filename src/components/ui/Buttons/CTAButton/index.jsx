import styled from 'styled-components'
import './CTAButton.css'

const StyledCTAButton = styled.a`

  background: rgb(179,179,179);
  background: linear-gradient(9deg, rgba(179,179,179,1) 41%, rgba(255,255,255,1) 100%);
  color: var(--bg-dark);
  width: 12rem;
  border-radius: 40px;
  text-decoration: none;
  font-family: 'RubikRegular';
  font-size: 16px;
  font-weight: 700;
  padding: 0.75rem 1rem;
  text-align: center;
  text-transform: uppercase;
`

const CTABUtton = ({children}) => {

  return (
    <StyledCTAButton href='#portifolio'>
      {children}
    </StyledCTAButton>
  )
}

export default CTABUtton