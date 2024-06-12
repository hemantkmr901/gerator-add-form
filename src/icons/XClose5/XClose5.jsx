/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const XClose5 = ({ color = "#667085", className }) => {
  return (
    <svg
      className={`x-close-5 ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </svg>
  );
};

XClose5.propTypes = {
  color: PropTypes.string,
};
