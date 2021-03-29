import styled from "styled-components";
import { motion } from "framer-motion";
import { flexColumn, nunito24 } from "../../globalStyles";

export const LoadingWrapper = styled(motion.div)`
  ${flexColumn};
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(23px);
  img {
    width: 100%;
  }
  span {
    color: white;
    ${nunito24}
    margin-top: 20px;
    text-align: center;
  }
`;

export const LoadingCard = styled.div`
  border: 2px solid #606060;
  border-radius: 8px;
  width: 184px;
  height: 184px;
  overflow: hidden;
`;

export const LoadingContent = styled.div`
  ${flexColumn};
`;
