/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Bell012 } from "../../icons/Bell012";
import "./style.css";

export const NavItemButton = ({ current, size, stateProp, icon = <Bell012 className="bell" color="#667085" /> }) => {
  const [state, dispatch] = useReducer(reducer, {
    current: current || false,
    size: size || "lg",
    state: stateProp || "default",
  });

  return (
    <div
      className={`nav-item-button ${state.size} ${state.state} current-${state.current}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {icon}
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

NavItemButton.propTypes = {
  current: PropTypes.bool,
  size: PropTypes.oneOf(["md", "lg"]),
  stateProp: PropTypes.oneOf(["focused", "hover", "default"]),
};
