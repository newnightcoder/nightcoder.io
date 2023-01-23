// import localFont from "@next/font/local";
import styled, { createGlobalStyle } from "styled-components";

// const Poppins_fonts = {
//   light: localFont({ src: "./fonts/Poppins/Poppins-100.ttf" }),
// };

interface Props {
  background?: string;
  justify?: string;
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
  justify-content: ${(props) => props.justify};
  // background-color: ${(props) => props.background};
  // border: 5px solid red;
`;

export const breakpoints = {
  xs: "500px",
  xsNumber: 500,
  sm: "640px",
  smNumber: 640,
  md: "768px",
  mdNumber: 768,
  lg: "1024px",
  lgNumber: 1024,
  xl: "1280px",
  xlNumber: 1280,
  xxl: "1536px",
  xxlNumber: 1536,
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
  --lang-emoji-right:auto;
  --lang-emoji-left:50%;
  --navbar-padding-right: 0;
  --header-width: max-content;
  --align-header: center;
  --mobile-menu-display: block;
  --about-items-container-width: 100%;
  --about-items-whitespace: wrap;
  --projects-container-justify:flex-start;
  --project-img-height: 0;
  --project-img-width: 0;
  --project-list-width: 45vmax;
  --project-list-height: max-content;
  --fontsize-project-list: 9vmax;
  --project-columns: 1fr;
  --project-areas: "title"
                   "img"
                   "about" 
                   "som"
                   "ok"
                   "next";
  --fontsize-project-title: 4rem;
  --flex-direction-about-container: column;
  --width-about-title: 100%;
  --width-about-desc: 100%;
  --position-about-title: relative;
  --stack-columns: repeat(4, max-content);
  --stack-rows: repeat(6, max-content);
  --card-size: calc((98vw - 40px) / 4);

  
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
  --gradient-blue-2: linear-gradient(135deg, #38BDF8, #2563EB);
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
    --lang-emoji-right:1vw;
    --lang-emoji-left:auto;
    --navbar-padding-right: 4rem;
    --header-width: max-content;
    --align-header: flex-start;
    --fontsize-header: clamp(46px, 4.75vw, 70px);
    --line-height-header: 4.25rem;
    --mobile-menu-display: none;
    --about-items-container-width: 60vmax;
    --about-items-whitespace: nowrap;
    --projects-container-justify: flex-end;
    --project-img-height: 90%;
    --project-img-width: 60vmax;
    --project-list-width: 30vmax;
    --project-list-height: calc(100vh - var(--navbar-height));
    --fontsize-project-list: 5vmax;
    --project-columns:repeat(5, 1fr);
    --project-areas:  "img img img title title"
                      "about about about about about" 
                      "som som som ok ok"
                      "next next next next next";
    --fontsize-project-title: 6vw;
    --flex-direction-about-container: row;
    --width-about-title: 40%;
    --width-about-desc: 60%;
    --position-about-title: sticky;
    --stack-columns: repeat(4, max-content);
    --stack-rows: repeat(4, max-content);
    --card-size: calc((98vw - 40px) / 8)
  }
}

html{
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
}

html,
body {
  padding: 0;
  margin: 0;


}


::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}


.noscroll {
  overflow: hidden;
}

* button {
  outline: none;
  border: none;
  background: none;
}

* button:hover {
  cursor: pointer;
}

* ul {
  list-style-type: none;
}

* a {
  text-decoration: none;
  color: inherit;
}

.project-in {
  animation: clipIn 1000ms forwards; 
  @keyframes clipIn {
    0% {
      // transform: scale(1.5);
      clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
    }
    // 60% {
    // }
    100% {
      // transform: scale(1);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
}

.project-out {
  animation: clipOut 1000ms forwards;
  @keyframes clipOut {
    0% {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    100% {
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
  }
}

.img-scale {
  animation: imgscale 1000ms forwards;
  @keyframes imgscale {
    0% {
      transform: scale(1.75);
    }
    100% {
      transform: scale(1);
    }
  }
}

.flip-card > :nth-child(1){
  transform: rotateY(180deg);
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
