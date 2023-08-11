import styled from "styled-components";

interface Props {
  isBgDark?: boolean;
  // isLightTheme?: boolean;
  active?: boolean;
}

const Wrapper = styled.nav`
  position: fixed;
  height: var(--navbar-height);
  width: 100%;
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
  height: 3%;
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

const HamburgerBtn = styled.button<Props>`
  position: fixed;
  right: 0.5rem;
  z-index: 2500;
  height: var(--navbar-height);
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color;
  color: ${({ theme }) => theme.color};
`;

const NavLinksContainer = styled.ul`
  height: 100%;
  width: 100%;
  display: var(--navbar-links-visibility);
  align-items: center;
  justify-content: flex-end;
  & > * + * {
    margin-left: 1rem;
  }
  // border: 1px solid green;
`;

const NavBtnContainer = styled.li`
  height: max-content;
  transform: translateY(20px);
  opacity: 0;
  visibility: hidden;
`;

const NavBtn = styled.button<Props>`
  font-family: var(--poppins);
  font-size: 0.75rem;
  transition: color 300ms;
  color: ${({ theme }) => theme.color};
`;

const BtnContent = styled.span<Props>`
  font-family: Courier, sans-serif;
  font-size: 0.85rem;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  text-decoration-color: ${(props) =>
    props.active ? props.theme.color : "none"};
  transition: text-decoration-color 300ms;
`;

const OptionsContainer = styled.div`
  width: 110px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid white;
`;

const DarkModeBtn = styled.button<Props>`
  height: 40px;
  width: 40px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 50%;
  transition: color 300ms, border-color 300ms;
`;

const LocaleBtn = styled.button`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid red;
`;

export {
  Wrapper,
  NavbarContainer,
  NavLinksContainer,
  NavBtnContainer,
  NavBtn,
  BtnContent,
  DarkModeBtn,
  LocaleBtn,
  HamburgerBtn,
  BackgroundShapes,
  OptionsContainer,
};
