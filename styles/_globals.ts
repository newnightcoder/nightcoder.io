import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  --light-mode-bg: white;
  --dark-mode-bg: black;
  --text-color-light: black;
  --text-color-dark: white;
  --navbar-height: 4rem;
  --hero-height: 6rem;
  --navbar-bg-color: white;
  --page-title-width: 200px;
  /* --navbar-bg-color: linear-gradient(to right, #fcb900, #ff6900, #cf2e2e); */
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
}

* button:hover {
  cursor: pointer;
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
