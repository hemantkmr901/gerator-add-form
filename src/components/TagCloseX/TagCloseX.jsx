/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { XClose31 } from "../../icons/XClose31";
import { XClose5 } from "../../icons/XClose5";
import "./style.css";

export const TagCloseX = ({ size, stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "sm",
    state: stateProp || "default",
  });

  return (
    <div
      className={`tag-close-x size-25-${state.size} state-1-${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {["md", "sm"].includes(state.size) && (
        <XClose31
          className={`${state.size === "md" ? "class-22" : "class-23"}`}
          color={state.state === "hover" ? "#667085" : "#98A2B3"}
        />
      )}

      {state.size === "lg" && <XClose5 className="x-close" color={state.state === "hover" ? "#667085" : "#98A2B3"} />}
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

TagCloseX.propTypes = {
  size: PropTypes.oneOf(["md", "lg", "sm"]),
  stateProp: PropTypes.oneOf(["hover", "default"]),
};
