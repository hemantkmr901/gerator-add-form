/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StepIconBase8 = ({ color = "#F9F5FF", className }) => {
  return (
    <svg
      className={`step-icon-base-8 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_2_26137)">
        <path
          className="path"
          d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
          fill={color}
        />
        <path
          className="path"
          d="M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16Z"
          fill="#7F56D9"
        />
        <path
          className="path"
          d="M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16Z"
          stroke="#7F56D9"
          strokeWidth="2"
        />
        <path
          className="path"
          clipRule="evenodd"
          d="M22.7952 9.8534L13.2485 19.0667L10.7152 16.3601C10.2485 15.9201 9.51518 15.8934 8.98184 16.2667C8.46184 16.6534 8.31518 17.3334 8.63518 17.8801L11.6352 22.7601C11.9285 23.2134 12.4352 23.4934 13.0085 23.4934C13.5552 23.4934 14.0752 23.2134 14.3685 22.7601C14.8485 22.1334 24.0085 11.2134 24.0085 11.2134C25.2085 9.98674 23.7552 8.90674 22.7952 9.84007V9.8534Z"
          fill="white"
          fillRule="evenodd"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_2_26137">
          <path
            className="path"
            d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

StepIconBase8.propTypes = {
  color: PropTypes.string,
};
