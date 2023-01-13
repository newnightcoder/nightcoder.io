import styled from "styled-components";

interface Props {
  isBgDark?: boolean;
}

const Wrapper = styled.nav`
  width: 100%;
  height: var(--navbar-height);
  position: fixed;
  z-index: 1000;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: var(--navbar-bg);
  // background: rgba(0, 0, 0, 0.05);
  // border: 1px solid lightgray;
`;

const NavbarContainer = styled.div<Props>`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-right: var(--navbar-padding-right);
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  z-index: 999;
  -webkit-backdrop-filter: saturate(180%) blur(10px);
  backdrop-filter: saturate(180%) blur(10px);
`;

const BackgroundShapes = styled.span`
  height: 7%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;
  filter: blur(1px);
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

const NavBtn = styled.button<Props>`
  font-family: var(--poppins);
  font-size: 0.75rem;
  transition: 1000ms color 1000ms;
  color: ${(props) =>
    props.isBgDark ? "var(--text-dark)" : "var(--text-light)"};
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
