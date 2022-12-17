// import localFont from "@next/font/local";
import styled, { createGlobalStyle } from "styled-components";
import "./font.module.css";

// const Poppins_fonts = {
//   light: localFont({ src: "./fonts/Poppins/Poppins-100.ttf" }),
// };

interface Props {
  background?: string;
}

export const PageContainer = styled.div<Props>`
  min-height: 100vh;
  padding-top: var(--navbar-height);
  width: 100%;
  position: relative;
  color: var(--text-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: ${(props) => props.background};
  // border: 5px solid red;
`;

const breakpoints = {
  xs: "500px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

export const GlobalStyles = createGlobalStyle`

// @font-face {
//   font-family: "hemihead";
//   src: url("/hemihead.ttf") format("truetype");
// }

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {

  
  /*  FONTS */

  --poppins : Poppins, sans-serif;
  --lucky : "Luckiest Guy", cursive;
  --fontsize-header : 2rem;
  --line-height-header: 3rem;

  /* MOBILE FIRST VARIABLES / RESPONSIVE */

  --navbar-links-visibility: none;
  --hamburger-visibility: flex;
  --navbar-padding-right: 0;
  --header-width: max-content;
  --align-header:center;

  /* TEXT COLORS */
  
  --text-light: black;
  --text-dark: white;
  
  /* BG COLORS */
  
  --light-mode-bg: white;
  --dark-mode-bg: black;
  // --navbar-bg: linear-gradient(to right, #fcb900, #ff6900, #cf2e2e); 
  // --navbar-bg: white;
  // --navbar-bg: linear-gradient(to left, #FFB906, #FB098C, #06A5FF); 
  --navbar-bg: #000; 
  --home-bg:linear-gradient(90deg, dimgray, black);
  --menu-bg:#06A5FF;
  --gradient-blue: linear-gradient(135deg, #007cf0, #00dfd8);
  --gradient-orange: linear-gradient(135deg, #ff4d4d, #e1b106);
  
  /* HEIGHT & WIDTH */
  
  --navbar-height: 4rem;
  --page-title-width: 200px;
  
  /* ANIMATIONS */

  --clip-path: 0%;

  /* MEDIA QUERIES */
  
  @media screen and (min-width: ${breakpoints.md}){
    --navbar-links-visibility: flex;
    --hamburger-visibility: none;
    --navbar-padding-right: 4rem;
    --header-width: max-content;
    --align-header:flex-start;
    --fontsize-header : clamp(46px, 4.75vw, 70px);
    --line-height-header:4.25rem;

  }

}



html,
body {
  padding: 0;
  margin: 0;
}

.noscroll {
  overflow: hidden;
}

* button {
  outline: none;
  border: none;
  background:none;
}

* button:hover {
  cursor: pointer;
}

* ul{
  list-style-type: none;
}

* a{
  text-decoration:none;
  color:inherit;
}


// DARK MODE / prefers-color-scheme 

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: var(--dark-mode-bg);
  }
}
`;
