/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowUp9 = ({ color = "#4E5BA6", className }) => {
  return (
    <svg
      className={`arrow-up-9 ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

ArrowUp9.propTypes = {
  color: PropTypes.string,
};
