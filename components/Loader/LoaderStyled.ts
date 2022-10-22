import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  inset: 0;
  background: #000;
  color: var(--text-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpanWrapper = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpanTop = styled.span`
  padding: 0 20px;
  font-size: 4rem;
  font-weight: bold;
  font-family: helvetica;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #ff4d4d, #f9cb28);
`;
const SpanBtm = styled.span`
  padding: 0 20px;
  font-size: 4rem;
  font-weight: bold;
  font-family: helvetica;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #007cf0, #00dfd8);
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.25);
`;

const Footer = styled.footer`
  height: 3vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.25);
`;

export { Container, Footer, SpanTop, SpanBtm, Line, SpanWrapper };
