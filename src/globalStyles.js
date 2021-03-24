import styled, { createGlobalStyle, css } from "styled-components";
import backgroundImage from "./assets/background.jpg";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    font-family: "Nunito", sans-serif;
  }
`;

//tipography
export const nunito16 = css`
  font-family: "Nunito";
  font-style: bold;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

export const nunito16Bold = css`
  font-family: "Nunito";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
`;

export const nunito28 = css`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
`;

// flexbox helpers
export const flexRow = css`
  display: flex;
  flex-direction: row;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

// media query helpers
export const mobile = `@media (max-width: 320px)`;

export const tablet = `@media (max-width: 768px)`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${flexColumn};
  background-color: #1e1e1e;
  background-image: url(${backgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export const Header = styled.header`
  width: 100%;
  ${flexRow};
  justify-content: center;
  img {
    max-width: 502px;
    overflow: auto;
    margin: 20px 40px 0 40px;
  }
`;
