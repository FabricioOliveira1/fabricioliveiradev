import styled from 'styled-components'

const StyledCTABUtton = styled.a`
   
  background-color: white;
  color: black;
  width: 12rem;
  border: 1px black solid;
  border-radius: 40px;
  text-decoration: none;
  font-size: 16px;
  padding: 0.75rem 1rem;
  text-align: center;
  text-transform: uppercase;
  font-family: 'RubikMedium';

`

const CTABUtton = ({children, link, page = ''}) => {
  return (
    <StyledCTABUtton href={link} target={page}>
      {children}
    </StyledCTABUtton>
  )
}

export default CTABUtton;