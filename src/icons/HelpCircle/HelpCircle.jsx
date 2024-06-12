/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const HelpCircle = ({ className }) => {
  return (
    <svg
      className={`help-circle ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_381_2967)">
        <path
          className="path"
          d="M6.05992 6.00004C6.21665 5.55449 6.52602 5.17878 6.93322 4.93946C7.34042 4.70015 7.81918 4.61267 8.2847 4.69252C8.75022 4.77236 9.17246 5.01439 9.47664 5.37573C9.78081 5.73706 9.94729 6.19439 9.94659 6.66671C9.94659 8.00004 7.94659 8.66671 7.94659 8.66671M7.99992 11.3334H8.00659M14.6666 8.00004C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00004C1.33325 4.31814 4.31802 1.33337 7.99992 1.33337C11.6818 1.33337 14.6666 4.31814 14.6666 8.00004Z"
          stroke="#667085"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_381_2967">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};
