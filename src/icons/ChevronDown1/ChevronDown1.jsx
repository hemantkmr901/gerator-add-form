/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ChevronDown1 = ({ color = "#344054", className }) => {
  return (
    <svg
      className={`chevron-down-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5 7.5L10 12.5L15 7.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </svg>
  );
};

ChevronDown1.propTypes = {
  color: PropTypes.string,
};
