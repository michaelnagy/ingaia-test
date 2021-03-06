import styled from "styled-components";
import { flexRow, nunito16Bold, mobile } from "../../globalStyles";

export const SearchWrapper = styled.div`
  ${flexRow};
  justify-content: center;
  margin-top: 74px;
  padding: 0 32px;
`;

export const Input = styled.input`
  ${nunito16Bold};
  max-width: 196px;
  height: 42px;
  border: 2px solid #ffffff;
  color: white;
  border-radius: 8px;
  background-color: transparent;
  margin-right: 16px;
  padding-left: 14px;
  ${mobile} {
    padding-left: 8px;
  }
  overflow: auto;
  ::placeholder {
    color: #9f9f9f;
  }
`;

export const Button = styled.button`
  border: 2px solid #ffffff;
  color: white;
  border-radius: 8px;
  background-color: transparent;
  padding: 10px 17px;
`;
