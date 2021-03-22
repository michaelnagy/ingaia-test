import styled, { createGlobalStyle, css } from "styled-components";
import backgroundImage from "./assets/background.jpg";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
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
export const mobile = `@media (max-width: 767.98px)`;

export const tablet = `@media (max-width: 991.98px)`;

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
  }
`;
