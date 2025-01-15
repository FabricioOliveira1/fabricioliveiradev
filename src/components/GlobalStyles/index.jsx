import { createGlobalStyle } from "styled-components";
import RubikBold from './fonts/Rubik-Bold.ttf'
import RubikMedium from './fonts/Rubik-Medium.ttf'
import RubikRegular from './fonts/Rubik-Regular.ttf'

export const theme = {
  primaryColor: "hsl(217, 75%, 13%)",
  colors: {
    primaryColor: "hsl(217, 75%, 13%)",
    secondaryColor: "hsl(243, 100%, 69%)",

    textDark: "hsl(245, 17%, 29%)",  
    brandLight: "hsl(0, 0%, 90%)",
    textOrange: "hsl(31, 94%, 55%)",
    backgroundGray:"hsl(0, 0%, 6%)",

    bgDark: 'hsl(0, 0%, 0%)',
  },
  tagColors: {
    tagHtmlBg: "hsl(13, 79%, 51%)",
    tagCssBg: "hsl(204, 100%, 36%)",
    tagJsBg: "hsl(53, 87%, 53%)",
    tagReactBg: "hsl(193, 86%, 65%)",
    tagTypescriptBg: "hsl(210, 63%, 48%)"
  },
  size: {
    navHeight: "7.2rem",
  }
  
}

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

:root {

--primary-color: hsl(217, 75%, 13%);
--secondary-color: hsl(243, 100%, 69%);

--text-dark: hsl(245, 17%, 29%);  
--brand-light: hsl(0, 0%, 90%);
--text-orange: hsl(31, 94%, 55%);
--background-gray:hsl(0, 0%, 6%);

--bg-dark: hsl(0, 0%, 0%);

--nav-height: 7.2rem;

--tag-html-bg: hsl(13, 79%, 51%);
--tag-css-bg: hsl(204, 100%, 36%);
--tag-js-bg: hsl(53, 87%, 53%);
--tag-react-bg: hsl(193, 86%, 65%);
--tag-typescript-bg: hsl(210, 63%, 48%);
}

/* BREAKPOINTS
480PX
768PX
1024PX
1280PX */


body {
margin: 0;
padding: 0;
background: ${theme.bgDark};
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
`

export default GlobalStyles;