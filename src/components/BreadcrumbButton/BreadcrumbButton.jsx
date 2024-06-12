/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { HomeLine20 } from "../../icons/HomeLine20";
import "./style.css";

export const BreadcrumbButton = ({ current, type, icon, stateProp, className, text = "Projects" }) => {
  const [state, dispatch] = useReducer(reducer, {
    current: current || false,
    type: type || "text",
    icon: icon || false,
    state: stateProp || "focused",
  });

  return (
    <div
      className={`breadcrumb-button icon-${state.icon} ${state.type} current-0-${state.current} state-0-${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {!state.icon && <div className="text-9">{text}</div>}

      {state.icon && (
        <HomeLine20
          className="home-line"
          color={
            !state.current && ["default", "focused"].includes(state.state)
              ? "#667085"
              : (!state.current && state.state === "hover" && state.type === "button-brand") ||
                (state.current && state.type === "button-brand") ||
                (state.current && state.type === "text")
              ? "#6941C6"
              : "#344054"
          }
        />
      )}
    </div>
  );
};

function reducer(state, action) {
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

BreadcrumbButton.propTypes = {
  current: PropTypes.bool,
  type: PropTypes.oneOf(["button-gray", "text", "button-brand"]),
  icon: PropTypes.bool,
  stateProp: PropTypes.oneOf(["default", "focused", "hover"]),
  text: PropTypes.string,
};
