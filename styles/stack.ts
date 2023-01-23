import styled from "styled-components";

const CardContainer = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 4vh 1vw;
  display: grid;
  grid-template-columns: var(--stack-columns);
  grid-template-rows: var(--stack-rows);
  grid-gap: 10px;
  place-items: center normal;
  border: 2px solid red;
`;

export { CardContainer };
