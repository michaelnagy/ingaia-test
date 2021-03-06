import styled, { createGlobalStyle, css } from "styled-components";
import backgroundImage from "./assets/background.jpg";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    font-family: "Nunito", sans-serif;
  }
`;

//colors
export const color = {
  yellowFont: "#CBD736",
  transparentGray: "rgba(0, 0, 0, 0.6)",
  bluishGray: "#D3D3D3",
};

//tipography

export const nunito12 = css`
  font-family: "Nunito";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
`;

export const nunito13 = css`
  font-family: "Nunito";
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
`;

export const nunito14 = css`
  font-family: "Nunito";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
`;

export const nunito16 = css`
  font-family: "Nunito";
  font-style: normal;
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

export const nunito18 = css`
  font-family: "Nunito";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24.55px;
`;

export const nunito20 = css`
  font-family: "Nunito";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
`;

export const nunito24 = css`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
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
  height: auto;
  min-height: 100vh;
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

export const OnMobile = styled.div`
  ${({ hide }) => hide && "display: block"};
  ${({ show }) => show && "display: none"};
  ${mobile} {
    ${({ hide }) => hide && "display: none"};
    ${({ show }) => show && "display: block"};
  }
  ${({ styled }) => styled}
`;
