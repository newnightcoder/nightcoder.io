// import localFont from "@next/font/local";
import styled, { createGlobalStyle } from "styled-components";

// const Poppins_fonts = {
//   light: localFont({ src: "./fonts/Poppins/Poppins-100.ttf" }),
// };

interface Props {
  // background?: string;
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
  z-index: 0;
  justify-content: ${(props) => props.justify};
  background-color: ${({ theme }) => theme.bg.home};
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

export const lightTheme = {
  homeSectionBg: "transparent",
  color: "#1A1A1A",
  bg: {
    home: "#F5F5F5",
    about: "#E8E8E8",
    project: "#D9D9D9",
    stack: "#CCCCCC",
    contact: "#B3B3B3",
  },
  bgText: {
    home: "rgba(230, 230, 230, 0.9)",
    about: "#E8E8E8",
    project: "#D9D9D9",
    stack: "#CCCCCC",
    contact: "#B3B3B3",
  },
};

export const darkTheme = {
  homeSectionBg: "transparent",
  color: "#F5F5F5",
  bg: {
    home: "#1A1A1A",
    about: "#4E4E4E",
    project: "#5A5A5A",
    stack: "#6A6A6A",
    contact: "#828282",
  },
  bgText: {
    home: "rgba(60, 60, 60, 0.9)",
    about: "#E8E8E8",
    project: "#D9D9D9",
    stack: "#CCCCCC",
    contact: "#B3B3B3",
  },
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

  --poppins : "Poppins", sans-serif;
  --lucky : "Luckiest Guy", cursive;
  --banger: "Bangers", cursive;
  --fontsize-header : 2.2rem;
  --line-height-header: 2.75rem;

  /* MOBILE FIRST VARIABLES / RESPONSIVE */

  --navbar-links-visibility: none;
  --hamburger-visibility: flex;
  --lang-emoji-right: auto;
  --lang-emoji-left: 50%;
  --navbar-padding-right: 0;
  --header-width: max-content;
  --align-header: center;
  // --mobile-menu-display: block;
  --about-items-container-width: 100%;
  --about-items-whitespace: wrap;
  // --projects-container-direction: column;
  // --projects-container-justify: center;
  --projects-container-columns: 1fr;
  --projects-container-rows: 4rem max-content 1fr;
  --projects-container-areas:   "."
                                "title"
                                "list";
  --project-img-display: none;
  // --project-img-width: 0;
  // --project-list-width: 45vmax;
  // --project-list-height: 100%;
  --project-list-width: max-content;
  --fontsize-project-list: 6vmax;
  --project-columns: 1fr;
  --project-areas: "title"
                   "img"
                   "shields"
                   "about" 
                   "som"
                   "ok"
                   "next";
  --fontsize-project-title: 4rem;
  --flex-direction-about-container: column;
  --width-about-title: 100%;
  --width-about-desc: 100%;
  --position-about-title: relative;
  --memory-cards-columns: repeat(3, max-content);
  --memory-cards-rows: repeat(4, max-content);
  --memory-cards-gap: 5px;
  --stack-table-flex-direction: column;
  --stack-table-align-items: center;
  --stack-column-width: 85%;
  --result-card-width: 100%;
  --result-card-height: 40px;
  
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
  // --menu-bg:#06A5FF;
  --menu-bg: dimgray;
  --gradient-blue: linear-gradient(135deg, #007cf0, #00dfd8);
  --gradient-blue-2: linear-gradient(135deg, #38BDF8, #2563EB);
  --gradient-orange: linear-gradient(135deg, #ff4d4d, #e1b106);
  --gradient-pink: linear-gradient(135deg, rgb(236 72 153), rgb(244 63 94));
  --gradient-green: linear-gradient(135deg, rgb(74 222 128), rgb(6 182 212));
  
  /* HEIGHT & WIDTH */
  
  --navbar-height: 4rem;
  --page-title-width: 200px;
  
  /* ANIMATIONS */
  
  --clip-path: 0%;
  
  /* MEDIA QUERIES */
  
  @media screen and (min-width: ${breakpoints.md}){
    --navbar-links-visibility: flex;
    --hamburger-visibility: none;
    --darkmode-btn-right: 5vw;
    --darkmode-btn-left: auto;
    --lang-emoji-right: 1vw;
    --lang-emoji-left: auto;
    --navbar-padding-right: 4rem;
    --header-width: max-content;
    --align-header: flex-start;
    // --fontsize-header: clamp(46px, 4.75vw, 70px);
    --fontsize-header: 4rem;
    --line-height-header: 5rem;
    // --mobile-menu-display: none;
    --about-items-container-width: 60vmax;
    --about-items-whitespace: nowrap;
    // --projects-container-direction: row;
    // --projects-container-justify: flex-end;
    --projects-container-columns: repeat(3, 1fr);
    --projects-container-rows: 2vh max-content 1fr;
    --projects-container-areas:  ". . ."
                                 "title title title"
                                 "img img list";
    --project-img-display: flex;
    // --project-img-height: 90%;
    // --project-img-width: 60vmax;
    // --project-list-height: calc(100vh - var(--navbar-height));
    --project-list-width: 100%;
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
    --memory-cards-columns: repeat(4, max-content);
    --memory-cards-rows: repeat(3, max-content);
    --memory-cards-gap: 10px;
    --stack-table-flex-direction: row;
    --stack-table-align-items: flex-start;
    --stack-column-width: auto;
    --result-card-width: 200px;
    --result-card-height: 40px;
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

.flip-card-x > :nth-child(1) { 
  transform: rotateX(180deg);
}

.flip-card-y > :nth-child(1) { 
  transform: rotateY(180deg);
}

// .split-screen {
//   animation: split 2000ms ease-in forwards;
//   animation-fill-mode: both;
//   @keyframes split{
//     0%{
//       clip-path:polygon(0% 100%, 50% 100%, 100% 100%, 100% 0, 0% 0, 0% 50%, 100% 50%, 100% 50%, 50% 50%, 0% 50%);
//     }
//     100%{
//       clip-path:polygon(0% 100%, 50% 100%, 100% 100%, 100% 0, 0% 0, 0% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
//     }
//   }
//   @media screen and (min-width:${breakpoints.md}){
//     @keyframes split{
//       0%{
//         clip-path:polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 50%, 50% 50%, 50% 100%, 100% 100%, 100% 0%);
//       }
//       100%{
//         clip-path:polygon(0% 0%, 0% 100%, 0% 100%, 0% 0, 100% 0, 100% 50%, 100% 50%, 100% 100%, 100% 100%, 100% 0%);
//       }
//     }
//   }
// }

// DARK MODE / prefers-color-scheme 

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    // background: var(--dark-mode-bg);
  }
}
`;
