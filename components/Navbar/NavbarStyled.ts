import styled from "styled-components";

const Wrapper = styled.nav`
  width: 100%;
  height: var(--navbar-height);
  position: fixed;
  z-index: 1000;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--navbar-bg);
`;

const NavbarContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-right: var(--navbar-padding-right);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-dark);
  background: rgba(255, 255, 255, 0.25);
  z-index: 1000;
  backdrop-filter: saturate(180%) blur(5px);
`;

const BackgroundShapes = styled.span`
  height: 15%;
  width: 100%;
  background: linear-gradient(to left, #ffb906, #fb098c, #06a5ff);
  background-size: 400%;
  background-position: left;
  animation: move 20s infinite alternate;
  @keyframes move {
    100% {
      background-position: right;
    }
  }
`;

const HamburgerBtn = styled.button`
  position: fixed;
  right: 0.5rem;
  z-index: 2500;
  height: var(--navbar-height);
  width: max-content;
  display: var(--hamburger-visibility);
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
`;

const NavLinksContainer = styled.ul`
  height: 100%;
  width: 100%;
  display: var(--navbar-links-visibility);
  align-items: center;
  justify-content: flex-end;
  // border: 1px solid green;
  & > * + * {
    margin-left: 1rem;
  }
`;

const NavLink = styled.li`
  height: max-content;
  transform: translateY(20px);
  opacity: 0;
  visibility: hidden;
`;

const NavBtn = styled.button`
  // color: var(--text-dark);
  font-family: var(--poppins);
  font-size: 0.75rem;
`;

export {
  Wrapper,
  NavbarContainer,
  NavLinksContainer,
  NavLink,
  NavBtn,
  HamburgerBtn,
  BackgroundShapes,
};
