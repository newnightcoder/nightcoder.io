import styled from "styled-components";

const Card = styled.div`
  height: var(--card-size);
  width: var(--card-size);
  cursor: pointer;
  background-color: transparent;
  perspective: 1000px;
  // &:hover > :nth-child(1) {
  //   transform: rotateY(180deg);
  // }
`;

const CardInner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  transition: transform 500ms;
  transform-style: preserve-3d;
  // border: 1px solid transparent;
`;

const CardFront = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.65);
  backface-visibility: hidden;
  border: 1px solid transparent;
`;

const CardBack = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px;
  position: absolute;
  background-color: rgb(0, 0, 0);
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border: 1px solid white;
`;

export { Card, CardInner, CardFront, CardBack };
