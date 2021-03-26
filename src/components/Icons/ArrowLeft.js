import * as React from "react";

import styled from "styled-components";

const Svg = styled.svg`
  ${({ prev }) => prev && `cursor: pointer;`}
`;

function ArrowLeft({ stroke = "#fff", ...restProps }) {
  return (
    <Svg
      width={11}
      height={21}
      viewBox="0 0 11 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="M10 1l-9 9.5 9 9.5"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </Svg>
  );
}

export default ArrowLeft;
