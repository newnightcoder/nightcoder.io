import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100%;
  color: var(--text-dark);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  color: var(--text-dark);
  border: 2px solid red;
`;

const AnimationContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  transform: translateY(4rem);
`;

export { PageContainer, Container, AnimationContainer };
