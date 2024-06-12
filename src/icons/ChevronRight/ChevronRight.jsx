/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ChevronRight = ({ className }) => {
  return (
    <svg
      className={`chevron-right ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6 12L10 8L6 4"
        stroke="#D0D5DD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
    </svg>
  );
};
