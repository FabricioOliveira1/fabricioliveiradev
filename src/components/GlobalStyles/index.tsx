import { createGlobalStyle } from "styled-components";
import RubikBold from './fonts/Rubik-Bold.ttf'
import RubikMedium from './fonts/Rubik-Medium.ttf'
import RubikRegular from './fonts/Rubik-Regular.ttf'
import theme from './theme';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'RubikRegular';
  src: local('Rubik Regular'), local('RubikRegular'), url(${RubikRegular});
}

@font-face {
  font-family: 'RubikMedium';
  src: local('Rubik Medium'), local('RubikMedium'), url(${RubikMedium});
}

@font-face {
  font-family: 'RubikBold';
  src: local('Rubik Bold'), local('RubikBold'), url(${RubikBold});
}

/* BREAKPOINTS
480PX
768PX
1024PX
1280PX */


body {
margin: 0;
padding: 0;
background: ${theme.colors.bgDark};
-webkit-font-smoothing: antialiased;
overflow: auto;
}

body p, h1, h2, h3, h4, a ul, li{
margin: 0;
padding: 0;
font-family: 'RubikRegular';
color: ${theme.colors.brandLight};
}

body svg {
fill: ${theme.colors.brandLight}
}
body section {
padding-block: 5em;
transition: 0.3s;
}

body section > * ,
body footer > *{
  max-width: 1024px;
}

 @keyframes slideRight {
  from {
    transform: translateX(500px);
  }
  to {
    transform: translateX(0px);
  }
}
@keyframes slideLeft {
  from {
    transform: translateX(-500px);
  }
  to {
    transform: translateX(0px);
  }
}
@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
} 
`

export default GlobalStyles;