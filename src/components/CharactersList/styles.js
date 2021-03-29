import styled from "styled-components";
import { motion } from "framer-motion";
import {
  flexRow,
  flexColumn,
  nunito16Bold,
  nunito20,
  nunito12,
  tablet,
  color,
} from "../../globalStyles";

export const CharactersListContainer = styled.div`
  ${flexColumn};
  justify-content: center;
  align-items: center;
`;

export const CharactersListWrapper = styled.ul`
  ${flexRow};
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 74px;
  padding: 0 235px;
  ${tablet} {
    padding: 0;
  }
`;

export const CharacterWrapper = styled(motion.li)`
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
    border: 2px solid ${color.yellowFont};
    box-shadow: 0px 0px 0px 3px #c9d636, 0px 0px 5px 4px #c9d636,
      inset 0px 0px 0px 1px ${color.transparentGray};
  }
  img {
    width: 100%;
  }
  cursor: pointer;
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

export const PaginationWrapper = styled.div`
  ${flexRow};
  color: white;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const PaginationList = styled.ul`
  ${flexRow};
  padding: 0;
`;

export const Page = styled.li`
  ${flexRow};
  ${nunito20};
  font-weight: normal;
  margin: 0 20px;
  color: #909090;
  :hover {
    color: ${({ isCurrentPage }) =>
      isCurrentPage ? color.yellowFont : `white`};
  }
  :last-of-type {
    margin-right: 40px;
  }
  :first-of-type {
    margin-left: 40px;
  }
  ${({ isCurrentPage }) => !isCurrentPage && `cursor: pointer;`};
  ${({ isCurrentPage }) => isCurrentPage && `color: ${color.yellowFont}`};
`;
