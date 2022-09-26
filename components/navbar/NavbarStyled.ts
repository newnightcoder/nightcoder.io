import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: var(--navbar-height);
  position: fixed;
  inset: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--navbar-bg);
  background-size: 400%;
  background-position: left;
  animation: move 20s infinite alternate;
  @keyframes move {
    100% {
      background-position: right;
    }
  }
`;

const NavbarContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  padding-right: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-dark);
  background: rgba(255, 255, 255, 0.25);
  z-index: 1000;
  backdrop-filter: saturate(180%) blur(5px);
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const HamburgerBtn = styled.button`
  position: fixed;
  right: 3rem;
  z-index: 2500;
  height: var(--navbar-height);
  width: max-content;
  display: var(--hamburger-visibility);
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
`;

const NavLinksContainer = styled.ul`
  display: var(--navbar-links-visibility);
  height: 100%;
  width: max-content;
  align-items: center;
  justify-content: space-evenly;
  & > * + * {
    margin-left: 3rem;
  }
`;

const NavLink = styled.li`
  background-color: transparent;
  transform: translateY(20px);
  opacity: 0;
  visibility: hidden;
`;

const NavBtn = styled.button`
  color: var(--text-dark);
`;

export {
  Wrapper,
  NavbarContainer,
  NavLinksContainer,
  NavLink,
  NavBtn,
  LogoContainer,
  HamburgerBtn,
};
