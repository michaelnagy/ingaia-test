import styled from "styled-components";
import { flexRow, nunito16Bold } from "../../globalStyles";

export const CharactersListWrapper = styled.ul`
  ${flexRow};
  justify-content: center;
  margin-top: 74px;
  padding: 0 32px;
`;

export const CharacterWrapper = styled.li`
  ${nunito16Bold};
  ${flexRow};
  justify-content: center;
  width: 224px;
  height: 224px;
  img {
    width: 100%;
  }
`;
