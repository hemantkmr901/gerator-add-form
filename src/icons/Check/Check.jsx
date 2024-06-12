/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Check = ({ className }) => {
  return (
    <svg
      className={`check ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10 3L4.5 8.5L2 6"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6666"
      />
    </svg>
  );
};
