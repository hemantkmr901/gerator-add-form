/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const StepIconBase26 = ({ className }) => {
  return (
    <svg
      className={`step-icon-base-26 ${className}`}
      fill="none"
      height="44"
      viewBox="0 0 48 44"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_2_26606)">
        <g className="g" clipPath="url(#clip0_2_26606)">
          <path
            className="path"
            d="M4 20C4 8.95431 12.9543 0 24 0C35.0457 0 44 8.95431 44 20C44 31.0457 35.0457 40 24 40C12.9543 40 4 31.0457 4 20Z"
            fill="#F4EBFF"
          />
          <path
            className="path"
            d="M5 20C5 9.50659 13.5066 1 24 1C34.4934 1 43 9.50659 43 20C43 30.4934 34.4934 39 24 39C13.5066 39 5 30.4934 5 20Z"
            fill="#7F56D9"
          />
          <path
            className="path"
            d="M5 20C5 9.50659 13.5066 1 24 1C34.4934 1 43 9.50659 43 20C43 30.4934 34.4934 39 24 39C13.5066 39 5 30.4934 5 20Z"
            stroke="#7F56D9"
            strokeWidth="2"
          />
          <path
            className="path"
            clipRule="evenodd"
            d="M32.494 12.3167L20.5606 23.8334L17.394 20.45C16.8106 19.9 15.894 19.8667 15.2273 20.3334C14.5773 20.8167 14.394 21.6667 14.794 22.35L18.544 28.45C18.9106 29.0167 19.544 29.3667 20.2606 29.3667C20.944 29.3667 21.594 29.0167 21.9606 28.45C22.5606 27.6667 34.0106 14.0167 34.0106 14.0167C35.5106 12.4834 33.694 11.1334 32.494 12.3V12.3167Z"
            fill="white"
            fillRule="evenodd"
          />
        </g>
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="48"
          id="filter0_d_2_26606"
          width="48"
          x="0"
          y="-4"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            className="fe-morphology"
            in="SourceAlpha"
            operator="dilate"
            radius="4"
            result="effect1_dropShadow_2_26606"
          />
          <feOffset className="fe-offset" />
          <feComposite className="fe-composite" in2="hardAlpha" operator="out" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0.619152 0 0 0 0 0.465529 0 0 0 0 0.930549 0 0 0 0.24 0"
          />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_26606" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_26606"
            mode="normal"
            result="shape"
          />
        </filter>
        <clipPath className="clip-path" id="clip0_2_26606">
          <path
            className="path"
            d="M4 20C4 8.95431 12.9543 0 24 0C35.0457 0 44 8.95431 44 20C44 31.0457 35.0457 40 24 40C12.9543 40 4 31.0457 4 20Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
