/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Bell011 = ({ color = "#667085", className }) => {
  return (
    <svg
      className={`bell-01-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.79514 17.5C8.38275 18.0186 9.15462 18.3333 10 18.3333C10.8454 18.3333 11.6172 18.0186 12.2048 17.5M15 6.66663C15 5.34054 14.4732 4.06877 13.5355 3.13109C12.5978 2.19341 11.3261 1.66663 10 1.66663C8.67391 1.66663 7.40214 2.19341 6.46446 3.13109C5.52678 4.06877 5 5.34054 5 6.66663C5 9.24178 4.35039 11.0049 3.62472 12.1711C3.0126 13.1549 2.70654 13.6467 2.71777 13.7839C2.73019 13.9359 2.76238 13.9938 2.88481 14.0846C2.99538 14.1666 3.49382 14.1666 4.49071 14.1666H15.5093C16.5062 14.1666 17.0046 14.1666 17.1152 14.0846C17.2376 13.9938 17.2698 13.9359 17.2822 13.7839C17.2934 13.6467 16.9874 13.1549 16.3753 12.1711C15.6496 11.0049 15 9.24178 15 6.66663Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </svg>
  );
};

Bell011.propTypes = {
  color: PropTypes.string,
};
