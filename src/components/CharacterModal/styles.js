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
  mobile,
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
  ${mobile} {
    padding: 20px;
  }
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
  ${mobile} {
    ${flexColumn};
    width: 90%;
    height: 80vh;
    margin-top: 14vh;
  }
`;

export const CharacterPageCard = styled.div`
  width: 70%;
  flex: 1.5;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(30px);
  border-radius: 16px 0 0 16px;
  display: flex;
  align-items: start;
  flex-direction: column;
  ${mobile} {
    border-radius: 16px 16px 0 0;
    max-height: 55px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const CharacterInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.95);
  flex: 2.6;
  border-radius: 0 16px 16px 0;
  overflow: scroll;
  ${mobile} {
    border-radius: 0 0 16px 16px;
    padding-top: 40px;
  }
`;

export const CharacterWrapper = styled.div`
  position: relative;
  margin: 0;
  ${nunito16Bold};
  ${flexColumn};
  justify-content: center;
  width: 100%;
  height: 80%;
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
  ${mobile} {
    margin: 0;
    width: 170px;
    height: 170px;
    position: absolute;
    top: -87px;
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

export const CloseModal = styled.button`
  height: 40px;
  margin: 20px;
  border: 2px solid #ffffff;
  border-radius: 8px;
  width: 85px;
  background: transparent;
  color: white;
  ${nunito16};
`;
