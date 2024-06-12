/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { StatusCompleteSizeLgStateFocused } from "../../icons/StatusCompleteSizeLgStateFocused";
import { StatusCompleteSizeMdStateFocused } from "../../icons/StatusCompleteSizeMdStateFocused";
import { StatusCompleteSizeSmStateFocused } from "../../icons/StatusCompleteSizeSmStateFocused";
import { StepIconBase } from "../../icons/StepIconBase";
import { StepIconBase8 } from "../../icons/StepIconBase8";
import "./style.css";

export const ConcreteComponentNode = ({
  status,
  size,
  stateProp,
  statusIncompleteClassName,
  contentClassName,
  dotClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    status: status || "incomplete",
    size: size || "sm",
    state: stateProp || "default",
  });

  return (
    <>
      {["current", "incomplete"].includes(state.status) && (
        <div
          className={`concrete-component-node size-5-${state.size} ${state.status} state-2-${state.state} ${statusIncompleteClassName}`}
          onMouseLeave={() => {
            dispatch("mouse_leave");
          }}
          onMouseEnter={() => {
            dispatch("mouse_enter");
          }}
        >
          <div className={`dot-wrapper ${contentClassName}`}>
            <div className={`dot-2 ${dotClassName}`} />
          </div>
        </div>
      )}

      {state.size === "sm" && state.status === "complete" && ["default", "hover"].includes(state.state) && (
        <StepIconBase className="status-complete-size" color={state.state === "hover" ? "#F4EBFF" : "#F9F5FF"} />
      )}

      {((state.size === "lg" && state.state === "default" && state.status === "complete") ||
        (state.size === "lg" && state.state === "hover" && state.status === "complete") ||
        (state.size === "md" && state.state === "default" && state.status === "complete") ||
        (state.size === "md" && state.state === "hover" && state.status === "complete")) && (
        <StepIconBase8
          className={`${state.size === "lg" ? "class-15" : "class-16"}`}
          color={state.state === "hover" ? "#F4EBFF" : "#F9F5FF"}
        />
      )}

      {state.size === "sm" && state.status === "complete" && state.state === "focused" && (
        <StatusCompleteSizeSmStateFocused className="status-complete-size-sm-state-focused" />
      )}

      {state.size === "md" && state.status === "complete" && state.state === "focused" && (
        <StatusCompleteSizeMdStateFocused className="status-complete-size-md-state-focused" />
      )}

      {state.size === "lg" && state.status === "complete" && state.state === "focused" && (
        <StatusCompleteSizeLgStateFocused className="status-complete-size-lg-state-focused" />
      )}
    </>
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

ConcreteComponentNode.propTypes = {
  status: PropTypes.oneOf(["incomplete", "current", "complete"]),
  size: PropTypes.oneOf(["md", "lg", "sm"]),
  stateProp: PropTypes.oneOf(["focused", "hover", "default"]),
};
