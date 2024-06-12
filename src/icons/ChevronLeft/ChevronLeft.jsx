/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ChevronLeft = ({ className }) => {
  return (
    <svg
      className={`chevron-left ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15 18L9 12L15 6"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
