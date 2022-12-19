import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 30px 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: var(--poppins);
  // border: 1px solid white;
`;

const Title = styled.h1`
  font-family: var(--poppins);
  z-index: 5;
  // border: 1px solid red;
`;

const FlexContainer = styled.div`
  width: 100%;
  max-width: 900px;
  // display: flex;
  // align-items: flex-start;
  // justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2vw;
  // border: 1px solid red;
`;

const Text = styled.div`
  height: 100%;
  // width: 50%;
  // max-width: 400px;
  // padding: 15px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 10px;
  z-index: 5;
  // background-color: #333;
  // border: 1px solid pink;
  & * + * {
    margin-top: 15px;
  }
`;

const ImgContainer = styled.div`
  height: min-content;
  max-width: 400px;
  position: sticky;
  top: 7rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 500ms;
  z-index: 2;
  // transition-timing-function: ease-out
  // border: 7px solid #333;
  &:after {
    content: "";
    height: calc(100% + 4px);
    width: calc(100% + 4px);
    position: absolute;
    top: -2px;
    left: -2px;
    background-image: var(--gradient-orange);
    border-radius: 50%;
    z-index: -1;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export { Title, Container, FlexContainer, Text, ImgContainer };
