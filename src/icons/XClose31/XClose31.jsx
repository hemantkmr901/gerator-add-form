/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const XClose31 = ({ color = "#F670C7", className }) => {
  return (
    <svg
      className={`x-close-31 ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9 3L3 9M3 3L9 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

XClose31.propTypes = {
  color: PropTypes.string,
};
