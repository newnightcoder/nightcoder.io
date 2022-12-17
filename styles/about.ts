import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 2vw;
  display: flex;
  font-family: var(--poppins);
  // border: 1px solid white;
`;

const Text = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  // border: 1px solid pink;
`;
const Img = styled.div`
  height: 100%;
  width: 50%;
  border: 1px solid green;
`;

const Title = styled.h1`
  font-family: var(--poppins);
`;

export { Title, Container, Text, Img };
