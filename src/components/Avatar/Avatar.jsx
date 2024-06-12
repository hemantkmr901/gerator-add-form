/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { User01102 } from "../../icons/User01102";
import { User0157 } from "../../icons/User0157";
import { User0175 } from "../../icons/User0175";
import { User0184 } from "../../icons/User0184";
import { User0193 } from "../../icons/User0193";
import { VerifiedTick2 } from "../../icons/VerifiedTick2";
import "./style.css";

export const Avatar = ({ contrastBorder = true, size, placeholder, text, statusIcon, stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "xl",
    placeholder: placeholder || false,
    text: text || true,
    statusIcon: statusIcon || "false",
    state: stateProp || "default",
  });

  return (
    <div
      className={`avatar text-${state.text} placeholder-${state.placeholder} state-${state.state} size-${state.size} ${state.statusIcon} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {((state.placeholder && state.statusIcon === "false") ||
        (state.statusIcon === "company" && !state.text) ||
        (state.statusIcon === "online-indicator" && !state.text) ||
        state.statusIcon === "verified" ||
        state.text) && (
        <div className="overlap-group">
          {(state.statusIcon === "company" ||
            state.statusIcon === "online-indicator" ||
            (state.size === "xs" && state.statusIcon === "verified")) && (
            <>
              <>{contrastBorder && <div className="contrast-border" />}</>
            </>
          )}

          {state.text && <div className="text">OR</div>}

          {state.placeholder && ["two-xl", "xl"].includes(state.size) && (
            <User0157
              className={`${
                state.size === "xl" && ["company", "online-indicator"].includes(state.statusIcon) && "class"
              } ${state.size === "two-xl" && ["company", "online-indicator"].includes(state.statusIcon) && "class-2"} ${
                state.statusIcon === "false" && state.size === "xl" && "class-3"
              } ${state.statusIcon === "false" && state.size === "two-xl" && "class-4"}`}
            />
          )}

          {((!state.placeholder && state.statusIcon === "company") ||
            (!state.placeholder && state.statusIcon === "online-indicator") ||
            (state.placeholder && state.size === "two-xl" && state.statusIcon === "company") ||
            (state.placeholder && state.size === "two-xl" && state.statusIcon === "online-indicator") ||
            (state.placeholder && state.size === "xl" && state.statusIcon === "company") ||
            (state.placeholder && state.size === "xl" && state.statusIcon === "online-indicator")) && (
            <div className="avatar-online" />
          )}

          {state.size === "lg" && state.placeholder && (
            <User0175
              className={`${state.statusIcon === "false" && "class-5"} ${
                ["company", "online-indicator"].includes(state.statusIcon) && "class-6"
              }`}
            />
          )}

          {state.placeholder && state.size === "lg" && ["company", "online-indicator"].includes(state.statusIcon) && (
            <div className="avatar-company-icon" />
          )}

          {state.size === "md" && state.placeholder && (
            <User0184
              className={`${["company", "online-indicator"].includes(state.statusIcon) && "class-7"} ${
                state.statusIcon === "false" && "class-8"
              }`}
              color="#667085"
            />
          )}

          {state.placeholder && state.size === "md" && ["company", "online-indicator"].includes(state.statusIcon) && (
            <div className="div" />
          )}

          {state.placeholder && state.size === "sm" && <User0193 className="user" color="#667085" />}

          {state.placeholder && state.size === "sm" && ["company", "online-indicator"].includes(state.statusIcon) && (
            <div className="avatar-company-icon-2" />
          )}

          {state.size === "xs" && state.placeholder && <User01102 className="user-01-102" />}

          {state.placeholder && state.size === "xs" && ["company", "online-indicator"].includes(state.statusIcon) && (
            <div className="avatar-company-icon-3" />
          )}

          {state.statusIcon === "verified" && (
            <VerifiedTick2
              className={`${
                state.size === "xl"
                  ? "class-9"
                  : state.size === "two-xl"
                  ? "class-10"
                  : state.size === "lg"
                  ? "class-11"
                  : state.size === "md"
                  ? "class-12"
                  : state.size === "sm"
                  ? "class-13"
                  : "class-14"
              }`}
            />
          )}
        </div>
      )}

      {state.statusIcon === "false" && !state.text && !state.placeholder && (
        <>
          <>{contrastBorder && <div className="contrast-border-2" />}</>
        </>
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

Avatar.propTypes = {
  contrastBorder: PropTypes.bool,
  size: PropTypes.oneOf(["xl", "xs", "lg", "two-xl", "sm", "md"]),
  placeholder: PropTypes.bool,
  text: PropTypes.bool,
  statusIcon: PropTypes.oneOf(["company", "false", "verified", "online-indicator"]),
  stateProp: PropTypes.oneOf(["focused", "hover", "default"]),
};
