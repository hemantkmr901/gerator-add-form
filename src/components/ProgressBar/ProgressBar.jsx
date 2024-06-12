/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ProgressBar = ({
  progress,
  label,
  className,
  progressBarClassName,
  progressClassName,
  percentageClassName,
}) => {
  return (
    <div className={`progress-bar label-${label} ${className}`}>
      {["bottom", "right"].includes(label) && (
        <>
          <div className={`progress-wrapper ${progressBarClassName}`}>
            <div className={`progress ${progress} label-1-${label} ${progressClassName}`} />
          </div>
          <div className={`percentage ${percentageClassName}`}>
            {progress === "zero" && <>0%</>}

            {progress === "ten" && <>10%</>}

            {progress === "twenty" && <>20%</>}

            {progress === "thirty" && <>30%</>}

            {progress === "forty" && <>40%</>}

            {progress === "fifty" && <>50%</>}

            {progress === "sixty" && <>60%</>}

            {progress === "seventy" && <>70%</>}

            {progress === "eighty" && <>80%</>}

            {progress === "ninety" && <>90%</>}

            {progress === "one-hundred" && <>100%</>}
          </div>
        </>
      )}

      {["bottom-floating", "false", "top-floating"].includes(label) && (
        <div className="div-2">
          {progress === "zero" && ["bottom-floating", "top-floating"].includes(label) && (
            <>
              <div className="progress-2" />
              <div className="content-wrapper">
                <div className="div-wrapper">
                  <div className="text-14">0%</div>
                </div>
              </div>
            </>
          )}

          {((label === "bottom-floating" && progress === "eighty") ||
            (label === "bottom-floating" && progress === "fifty") ||
            (label === "bottom-floating" && progress === "forty") ||
            (label === "bottom-floating" && progress === "ninety") ||
            (label === "bottom-floating" && progress === "one-hundred") ||
            (label === "bottom-floating" && progress === "seventy") ||
            (label === "bottom-floating" && progress === "sixty") ||
            (label === "bottom-floating" && progress === "ten") ||
            (label === "bottom-floating" && progress === "thirty") ||
            (label === "bottom-floating" && progress === "twenty") ||
            label === "false" ||
            (label === "top-floating" && progress === "eighty") ||
            (label === "top-floating" && progress === "fifty") ||
            (label === "top-floating" && progress === "forty") ||
            (label === "top-floating" && progress === "ninety") ||
            (label === "top-floating" && progress === "one-hundred") ||
            (label === "top-floating" && progress === "seventy") ||
            (label === "top-floating" && progress === "sixty") ||
            (label === "top-floating" && progress === "ten") ||
            (label === "top-floating" && progress === "thirty") ||
            (label === "top-floating" && progress === "twenty")) && (
            <div className={`progress-3 label-4-${label} progress-${progress}`}>
              {["bottom-floating", "top-floating"].includes(label) && (
                <div className="tooltip-4">
                  <div className="div-wrapper">
                    <div className="text-14">
                      {progress === "ten" && <>10%</>}

                      {progress === "twenty" && <>20%</>}

                      {progress === "thirty" && <>30%</>}

                      {progress === "forty" && <>40%</>}

                      {progress === "fifty" && <>50%</>}

                      {progress === "sixty" && <>60%</>}

                      {progress === "seventy" && <>70%</>}

                      {progress === "eighty" && <>80%</>}

                      {progress === "ninety" && <>90%</>}

                      {progress === "one-hundred" && <>100%</>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.oneOf([
    "sixty",
    "zero",
    "thirty",
    "eighty",
    "twenty",
    "one-hundred",
    "ten",
    "fifty",
    "forty",
    "ninety",
    "seventy",
  ]),
  label: PropTypes.oneOf(["top-floating", "right", "false", "bottom", "bottom-floating"]),
};
