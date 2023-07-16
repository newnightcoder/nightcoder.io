import styled from "styled-components";
import { darkTheme, lightTheme } from "../../styles/_globals";

interface Props {
  isBgDark?: boolean;
  isLightTheme?: boolean;
  active?: boolean;
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
  display: var(--hamburger-visibility);
  align-items: center;
  justify-content: center;
  transition: 1000ms color 1000ms;
  color: ${(props) =>
    props.isBgDark ? "var(--text-dark)" : "var(--text-light)"};
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
  color: ${(props) =>
    props.isLightTheme ? lightTheme.color : darkTheme.color};
`;

const BtnContent = styled.span<Props>`
  font-family: Courier, sans-serif;
  font-size: 0.85rem;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  text-decoration-color: ${(props) =>
    props.active && props.isLightTheme
      ? lightTheme.color
      : props.active && !props.isLightTheme
      ? darkTheme.color
      : "none"};
  transition: text-decoration-color 300ms;
`;

const OptionsContainer = styled.div`
  width: 110px;
  // position: fixed;
  // top: 10px;
  // right: 1vw;
  // z-index: 1500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid white;
`;

const DarkModeBtn = styled.button<Props>`
  // position: absolute;
  // right: var(--darkmode-btn-right);
  // left: var(--darkmode-btn-left);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${(props) => (props.isLightTheme ? lightTheme.color : darkTheme.color)};
  padding: 0 10px;
  color: ${(props) =>
    props.isLightTheme ? lightTheme.color : darkTheme.color};
  transition: color 300ms, border-color 300ms;
`;

const LocaleBtn = styled.button`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid red;
  // position: absolute;
  // right: var(--lang-emoji-right);
  // left: var(--lang-emoji-left);
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
