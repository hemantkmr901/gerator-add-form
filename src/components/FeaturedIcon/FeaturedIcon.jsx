/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AlertCircle1 } from "../../icons/AlertCircle1";
import { AlertCircle20 } from "../../icons/AlertCircle20";
import { AlertCircle26 } from "../../icons/AlertCircle26";
import { AlertCircle34 } from "../../icons/AlertCircle34";
import "./style.css";

export const FeaturedIcon = ({
  size,
  color,
  type,
  className,
  icon = <AlertCircle26 className="alert-circle-26" color="#344054" />,
}) => {
  return (
    <div className={`featured-icon size-26-${size} ${type} ${color} ${className}`}>
      {["dark", "light", "modern"].includes(type) && <>{icon}</>}

      {type === "glass" && (
        <div className="overlap-group-2">
          <div className="icon-background" />
          <div className="icon-glass">
            {size === "lg" && <AlertCircle20 className="alert-circle" color="white" />}

            {size === "md" && <AlertCircle26 className="alert-circle-26" color="white" />}

            {size === "sm" && <AlertCircle34 className="alert-circle-34" color="white" />}

            {size === "xl" && <AlertCircle1 className="alert-circle-1" color="white" />}
          </div>
        </div>
      )}
    </div>
  );
};

FeaturedIcon.propTypes = {
  size: PropTypes.oneOf(["md", "sm", "lg", "xl"]),
  color: PropTypes.oneOf(["warning", "gray", "success", "brand", "error"]),
  type: PropTypes.oneOf(["glass", "modern", "dark", "light"]),
};
