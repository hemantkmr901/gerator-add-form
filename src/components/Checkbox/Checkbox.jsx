/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CheckboxBase } from "../CheckboxBase";
import "./style.css";

export const Checkbox = ({
  supportingText = true,
  checked,
  indeterminate,
  size,
  type,
  text,
  state,
  className,
  checkboxBaseCheckedFalseClassName,
}) => {
  return (
    <div className={`checkbox text-2-${text} size-32-${size} ${className}`}>
      {text && (
        <>
          <div className="input">
            <CheckboxBase
              checked={!checked ? false : true}
              className={`${
                type === "radio"
                  ? "class-26"
                  : checked && size === "md" && type === "checkbox"
                  ? "class-27"
                  : !checked && size === "sm" && type === "checkbox"
                  ? "class-28"
                  : !checked && size === "md" && type === "checkbox"
                  ? "class-29"
                  : "class-30"
              }`}
              indeterminate={false}
              size={size === "md" ? "md" : "sm"}
              stateProp={
                state === "disabled"
                  ? "disabled"
                  : state === "hover"
                  ? "hover"
                  : state === "default"
                  ? "default"
                  : "focused"
              }
              type={type === "radio" ? "radio" : "checkbox"}
            />
          </div>
          <div className="text-and-supporting-2">
            <div className="text-15">Remember me</div>
            {supportingText && <p className="supporting-text-7">Save my login details for next time.</p>}
          </div>
        </>
      )}

      {!text && (
        <CheckboxBase
          checked={!checked ? false : true}
          className={checkboxBaseCheckedFalseClassName}
          indeterminate={indeterminate ? true : undefined}
          size={size === "md" ? "md" : "sm"}
          stateProp={
            state === "disabled"
              ? "disabled"
              : state === "hover"
              ? "hover"
              : state === "default"
              ? "default"
              : "focused"
          }
          type={type === "radio" ? "radio" : "checkbox"}
        />
      )}
    </div>
  );
};

Checkbox.propTypes = {
  supportingText: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  size: PropTypes.oneOf(["md", "sm"]),
  type: PropTypes.oneOf(["radio", "checkbox"]),
  text: PropTypes.bool,
  state: PropTypes.oneOf(["default", "focused", "hover", "disabled"]),
};
