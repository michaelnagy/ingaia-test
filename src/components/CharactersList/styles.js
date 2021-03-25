import styled from "styled-components";
import {
  flexRow,
  flexColumn,
  nunito16Bold,
  nunito20,
  nunito12,
} from "../../globalStyles";

export const CharactersListWrapper = styled.ul`
  ${flexRow};
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 74px;
  padding: 0 235px;
`;

export const CharacterWrapper = styled.li`
  position: relative;
  margin: 12px;
  ${nunito16Bold};
  ${flexColumn};
  justify-content: center;
  width: 224px;
  height: 224px;
  border: 2px solid #606060;
  border-radius: 8px;
  overflow: hidden;
  :hover {
    border: 2px solid #cbd736;
    box-shadow: 0px 0px 0px 3px #c9d636, 0px 0px 5px 4px #c9d636,
      inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6);
  }
  img {
    width: 100%;
  }
`;

export const NameWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(23px);
  color: white;
`;

export const NameTitle = styled.div`
  ${nunito20};
  padding: 7px 7px 0 7px;
`;

export const NameSubTitle = styled.div`
  ${nunito12};
  padding: 0 7px 7px 7px;
`;
