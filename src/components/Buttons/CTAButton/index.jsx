import styled from 'styled-components'

const StyledCTABUtton = styled.a`
  .CTAButton {
  background-color: white;
  color: black;
  width: 12rem;
  border: 1px black solid;
  border-radius: 40px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  padding: 0.75rem 1rem;
  text-align: center;
  text-transform: uppercase;
}
`

const CTABUtton = ({text}) => {
  return (
    <StyledCTABUtton href='https://fabricio-oliveira-portifolio.vercel.app/'>
      {text}
    </StyledCTABUtton>
  )
}

export default CTABUtton;