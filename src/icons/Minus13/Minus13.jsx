/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Minus13 = ({ color = "#D0D5DD", className }) => {
  return (
    <svg
      className={`minus-13 ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M2.91675 7H11.0834"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

Minus13.propTypes = {
  color: PropTypes.string,
};
