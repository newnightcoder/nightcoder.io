import styled from "styled-components";
import { darkTheme, lightTheme } from "../../styles/_globals";

interface Props {
  isLightTheme: boolean;
}

const Container = styled.div<Props>`
  height: var(--navbar-height);
  width: var(--navbar-height);
  position: fixed;
  z-index: 3000;
  left: 1rem;
  border-radius: 50%;
  background: ${(props) =>
    props.isLightTheme ? lightTheme.color : darkTheme.color};
  transition: background 300ms;
`;

const LogoLink = styled.a<Props>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => (props.isLightTheme ? "white" : "black")};
  transition: color 300ms;
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, LogoContainer, LogoLink };
