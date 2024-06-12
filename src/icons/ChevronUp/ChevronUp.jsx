/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ChevronUp = ({ className }) => {
  return (
    <svg
      className={`chevron-up ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15 12.5L10 7.5L5 12.5"
        stroke="#344054"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </svg>
  );
};
