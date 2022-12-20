import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 10px 2vw;
  display: grid;
  grid-template-rows: 150px max-content;
  justify-content: center;
  font-family: var(--poppins);
  // border: 1px solid white;
`;

const Title = styled.div`
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--poppins);
  z-index: 5;
  // border: 1px solid red;
`;

const ContentContainer = styled.div`
  grid-row: 2;
  width: 100%;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3vw;
  // border: 1px solid red;
`;

const AboutItemsContainer = styled.div`
  height: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 10px;
  z-index: 5;
  // border: 1px solid pink;
  & * + * {
    margin-top: 15px;
  }
`;

const ImgContainer = styled.div`
  height: min-content;
  // max-width: 400px;
  position: sticky;
  top: 7rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 500ms;
  z-index: 2;
  // transition-timing-function: ease-out
  border: 3px solid #333;
  // &:after {
  //   content: "";
  //   height: calc(100% + 4px);
  //   width: calc(100% + 4px);
  //   position: absolute;
  //   top: -2px;
  //   left: -2px;
  //   background-image: var(--gradient-orange);
  //   border-radius: 50%;
  //   z-index: -1;
  // }
  &:hover {
    transform: scale(1.2);
  }
`;

export {
  Title,
  Container,
  ContentContainer,
  AboutItemsContainer,
  ImgContainer,
};
