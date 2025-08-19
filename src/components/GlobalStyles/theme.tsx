export interface ThemeProps {
  colors: { 
    primaryColor: string;
    secondaryColor: string;
    textDark: string;
    brandLight: string;
    textOrange: string;
    backgroundGray: string;
    bgDark: string;
  };
  tagColors: {
    tagHtmlBg: string;
    tagCssBg: string;
    tagJsBg: string;
    tagReactBg: string;
    tagTypescriptBg: string;
  };
  size: {
    navHeight: string;
  };
}

const theme: ThemeProps = {
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
};

export default theme;