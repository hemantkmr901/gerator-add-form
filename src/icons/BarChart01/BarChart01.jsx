/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const BarChart01 = ({ className }) => {
  return (
    <svg
      className={`bar-chart-01 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M18 20V10M12 20V4M6 20V14"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
