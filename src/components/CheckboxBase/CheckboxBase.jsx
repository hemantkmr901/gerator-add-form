/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Check } from "../../icons/Check";
import { Check20 } from "../../icons/Check20";
import { Minus } from "../../icons/Minus";
import { Minus13 } from "../../icons/Minus13";
import "./style.css";

export const CheckboxBase = ({ checked, indeterminate, size, type, stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    checked: checked || false,
    indeterminate: indeterminate || false,
    size: size || "sm",
    type: type || "checkbox",
    state: stateProp || "default",
  });

  return (
    <div
      className={`checkbox-base size-30-${state.size} state-8-${state.state} checked-${state.checked} type-${state.type} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {((state.checked &&
        !state.indeterminate &&
        state.size === "sm" &&
        state.state === "default" &&
        state.type === "checkbox") ||
        (state.checked &&
          !state.indeterminate &&
          state.size === "sm" &&
          state.state === "focused" &&
          state.type === "checkbox") ||
        (state.checked &&
          !state.indeterminate &&
          state.size === "sm" &&
          state.state === "hover" &&
          state.type === "checkbox")) && <Check className="instance-node-2" />}

      {((state.indeterminate && state.size === "sm" && state.state === "default") ||
        (state.indeterminate && state.size === "sm" && state.state === "focused") ||
        (state.indeterminate && state.size === "sm" && state.state === "hover")) && (
        <Minus className="instance-node-2" />
      )}

      {state.checked && state.type === "radio" && <div className="check-2" />}

      {((state.checked && !state.indeterminate && state.size === "md" && state.type === "checkbox") ||
        (state.checked &&
          !state.indeterminate &&
          state.size === "sm" &&
          state.state === "disabled" &&
          state.type === "checkbox")) && (
        <Check20
          className={`${
            state.size === "sm"
              ? "instance-node-2"
              : state.state === "disabled" && state.size === "md"
              ? "class-24"
              : "class-25"
          }`}
          color={state.state === "disabled" ? "#D0D5DD" : "white"}
        />
      )}

      {((state.indeterminate && state.size === "md" && state.state === "default") ||
        (state.indeterminate && state.size === "md" && state.state === "focused") ||
        (state.indeterminate && state.size === "md" && state.state === "hover") ||
        (state.indeterminate && state.state === "disabled")) && (
        <Minus13
          className={`${
            state.size === "sm"
              ? "instance-node-2"
              : state.state === "disabled" && state.size === "md"
              ? "class-24"
              : "class-25"
          }`}
          color={state.state === "disabled" ? "#D0D5DD" : "white"}
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  if (
    state.checked === false &&
    state.indeterminate === false &&
    state.size === "sm" &&
    state.state === "hover" &&
    state.type === "checkbox"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          indeterminate: false,
          size: "sm",
          state: "hover",
          type: "checkbox",
        };
    }
  }

  if (
    state.checked === false &&
    state.indeterminate === false &&
    state.size === "sm" &&
    state.state === "hover" &&
    state.type === "radio"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          indeterminate: false,
          size: "sm",
          state: "hover",
          type: "radio",
        };
    }
  }

  if (
    state.checked === true &&
    state.indeterminate === false &&
    state.size === "sm" &&
    state.state === "hover" &&
    state.type === "checkbox"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          indeterminate: false,
          size: "sm",
          state: "hover",
          type: "checkbox",
        };
    }
  }

  if (
    state.checked === true &&
    state.indeterminate === false &&
    state.size === "sm" &&
    state.state === "hover" &&
    state.type === "radio"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          indeterminate: false,
          size: "sm",
          state: "hover",
          type: "radio",
        };
    }
  }

  if (
    state.checked === false &&
    state.indeterminate === false &&
    state.size === "md" &&
    state.state === "hover" &&
    state.type === "checkbox"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          indeterminate: false,
          size: "md",
          state: "hover",
          type: "checkbox",
        };
    }
  }

  if (
    state.checked === false &&
    state.indeterminate === false &&
    state.size === "md" &&
    state.state === "hover" &&
    state.type === "radio"
  ) {
    switch (action) {
      case "click":
        return {
          checked: true,
          indeterminate: false,
          size: "md",
          state: "hover",
          type: "radio",
        };
    }
  }

  if (
    state.checked === true &&
    state.indeterminate === false &&
    state.size === "md" &&
    state.state === "hover" &&
    state.type === "checkbox"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          indeterminate: false,
          size: "md",
          state: "hover",
          type: "checkbox",
        };
    }
  }

  if (
    state.checked === true &&
    state.indeterminate === false &&
    state.size === "md" &&
    state.state === "hover" &&
    state.type === "radio"
  ) {
    switch (action) {
      case "click":
        return {
          checked: false,
          indeterminate: false,
          size: "md",
          state: "hover",
          type: "radio",
        };
    }
  }

  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

CheckboxBase.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  size: PropTypes.oneOf(["md", "sm"]),
  type: PropTypes.oneOf(["radio", "checkbox"]),
  stateProp: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
};
