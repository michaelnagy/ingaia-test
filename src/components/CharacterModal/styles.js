import styled from "styled-components";
import {
  flexRow,
  flexColumn,
  nunito16,
  nunito13,
  nunito14,
  nunito18,
  nunito28,
  nunito16Bold,
  nunito20,
  nunito12,
  color,
} from "../../globalStyles";

export const FixedWrapper = styled.div`
  position: fixed;
  background: transparent;
  width: 100%;
  height: 100vh;
  ${flexRow};
  justify-content: center;
  align-items: center;
`;

export const InformationBlock = styled.div`
  ${flexColumn};
  padding: 65px;
`;

export const InformationTitle = styled.h1`
  ${nunito13};
  letter-spacing: 0.65em;
  color: ${color.yellowFont};
  margin-bottom: 10px;
`;

export const About = styled.p`
  ${nunito16};
  color: ${color.bluishGray};
  margin: 0;
`;

export const InformationSmall = styled.span`
  ${nunito14};
  color: #8c8c8c;
  margin: 5px 0 0 0;
`;

export const InformationH2 = styled.h2`
  ${nunito28};
  color: white;
  margin: 0;
`;

export const InformationH3 = styled.h3`
  ${nunito18};
  color: ${color.bluishGray};
  margin: 0;
`;

export const CharactersPageContainer = styled.div`
  width: 70%;
  ${flexRow};
  height: 90vh;
`;

export const CharacterPageCard = styled.div`
  position: relative;
  width: 70%;
  flex: 1.5;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(30px);
  border-radius: 16px 0 0 16px;
  display: flex;
  align-items: center;
`;

export const CharacterInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.95);
  flex: 2.6;
  border-radius: 0 16px 16px 0;
  overflow: scroll;
`;

export const CharacterWrapper = styled.li`
  position: relative;
  margin: 12px;
  ${nunito16Bold};
  ${flexColumn};
  justify-content: center;
  width: 100%;
  height: 90%;
  border: 2px solid #606060;
  border-radius: 8px;
  overflow: hidden;
  ${flexRow};
  justify-content: center;
  align-items: center;
  margin-left: -20%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const NameWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${color.transparentGray};
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
