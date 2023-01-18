import styled from "styled-components";

const CardContainer = styled.div`
  min-height: 100%;
  width: max-content;
  padding: 4vh 1vw;
  display: grid;
  grid-template-columns: var(--stack-columns);
  grid-template-rows: var(--stack-rows);
  grid-gap: 10px;
  place-items: center normal;
  border: 2px solid red;
`;

const Card = styled.div`
  height: 10vmax;
  width: 10vmax;
  cursor: pointer;
  background-color: transparent;
  perspective: 1000px;
  &:hover > :nth-child(1) {
    transform: rotateY(180deg);
  }
`;

const CardInner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  transition: transform 500ms;
  transform-style: preserve-3d;
`;

const CardFront = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.65);
  backface-visibility: hidden;
`;

const CardBack = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: pink;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export { CardContainer, Card, CardInner, CardFront, CardBack };
