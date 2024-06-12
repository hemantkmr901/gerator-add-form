/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowsDown = ({ color = "black", className }) => {
  return (
    <svg
      className={`arrows-down ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M17 4V15M17 15L13 11M17 15L21 11M7 4V20M7 20L3 16M7 20L11 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

ArrowsDown.propTypes = {
  color: PropTypes.string,
};
