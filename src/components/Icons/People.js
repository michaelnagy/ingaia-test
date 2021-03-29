import * as React from "react";

function People(props) {
  return (
    <svg
      width={13}
      height={12}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.727 10.818v-1.09a2.182 2.182 0 00-2.182-2.183H2.182A2.182 2.182 0 000 9.727v1.091M4.364 5.364a2.182 2.182 0 100-4.364 2.182 2.182 0 000 4.364zM12 10.818v-1.09a2.183 2.183 0 00-1.636-2.112M8.182 1.07a2.182 2.182 0 010 4.228"
        stroke="#7B7B7B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default People;
