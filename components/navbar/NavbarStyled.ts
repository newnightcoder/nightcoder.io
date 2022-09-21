import styled from "styled-components";

const NavbarContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 4rem;
  grid-row: 1;
  background: var(--navbar-bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const NavLinksContainer = styled.ul`
  list-style-type: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const NavLink = styled.button`
  outline: none;
  border: none;
  background-color: inherit;
`;

export { NavbarContainer, NavLinksContainer, NavLink };
