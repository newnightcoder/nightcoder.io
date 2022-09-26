import { createGlobalStyle } from "styled-components";

const breakpoints = {
  xs: "500px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: " 1536px",
};

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  
 
  /* MOBILE FIRST VARIABLES / RESPONSIVE */

  --navbar-links-visibility: none;
  --hamburger-visibility: flex;
  
  /* TEXT COLORS */
  
  --text-light: black;
  --text-dark: white;
  
  /* BG COLORS */
  
  --light-mode-bg: white;
  --dark-mode-bg: black;
  --navbar-bg: linear-gradient(to right, #fcb900, #ff6900, #cf2e2e); 
  --navbar-bg: white;
  --navbar-bg: linear-gradient(to left, #FFB906, #FB098C, #06A5FF); 
  // --home-bg:linear-gradient(90deg, green, black);
  --home-bg:linear-gradient(90deg, dimgray, black);
  --menu-bg:#06A5FF;
  
  /* HEIGHT & WIDTH */
  
  --navbar-height: 4rem;
  --page-title-width: 200px;
  
  /* ANIMATIONS */

  --clip-path: 0%;

  /* MEDIA QUERIES */
  
  @media screen and (min-width: ${breakpoints.md}){
    --navbar-links-visibility: flex;
    --hamburger-visibility: none;

  
  }
}



html,
body {
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
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
