import styled from "styled-components";

const Card = styled.div`
  height: 8vmax;
  width: 8vmax;
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
  padding: 5px;
  position: absolute;
  background-color: rgb(0, 0, 0);
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export { Card, CardInner, CardFront, CardBack };
