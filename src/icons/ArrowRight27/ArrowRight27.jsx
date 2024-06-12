/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowRight27 = ({ color = "#EF6820", className }) => {
  return (
    <svg
      className={`arrow-right-27 ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

ArrowRight27.propTypes = {
  color: PropTypes.string,
};
