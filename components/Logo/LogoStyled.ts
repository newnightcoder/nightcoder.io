import styled from "styled-components";

const LogoContainer = styled.div`
  height: var(--navbar-height);
  width: max-content;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 50%;
  position: fixed;
  z-index: 3000;
  left: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export { LogoContainer };
