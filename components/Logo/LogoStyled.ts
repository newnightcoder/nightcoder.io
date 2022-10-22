import styled from "styled-components";

const Container = styled.div`
  height: var(--navbar-height);
  width: var(--navbar-height);
  position: fixed;
  z-index: 3000;
  left: 1rem;
  border: 1px solid white;
  border-radius: 50%;
`;

const LogoLink = styled.a`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--text-dark);
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, LogoContainer, LogoLink };
