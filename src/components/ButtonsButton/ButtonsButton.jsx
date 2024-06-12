/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Placeholder } from "../../icons/Placeholder";
import { Placeholder157 } from "../../icons/Placeholder157";
import { Dot } from "../Dot";
import "./style.css";

export const ButtonsButton = ({
  iconTrailing = true,
  iconLeading = true,
  size,
  hierarchy,
  icon,
  stateProp,
  className,
  override = <Placeholder157 className="placeholder-157" color="#475467" />,
  icon1 = <Placeholder157 className="placeholder-157" color="#344054" />,
  text = "Button CTA",
  textPaddingClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "md",
    hierarchy: hierarchy || "primary",
    icon: icon || "dot-leading",
    state: stateProp || "default",
  });

  return (
    <div
      className={`buttons-button ${state.hierarchy} icon-0-${state.icon} size-21-${state.size} state-3-${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.icon === "dot-leading" && (
        <>
          <Dot
            className="dot-instance"
            dotClassName={`${
              state.hierarchy === "primary" && ["default", "focused", "hover"].includes(state.state) && "class-20"
            } ${state.state === "disabled" && "class-21"}`}
            outline={false}
            size="md"
          />
          <div className="text-7">{text}</div>
        </>
      )}

      {state.icon === "default" && (
        <>
          <>{iconLeading && <>{icon1}</>}</>
          <div className={`text-padding ${textPaddingClassName}`}>
            {["primary", "secondary-color", "secondary-gray", "tertiary-color", "tertiary-gray"].includes(
              state.hierarchy
            ) && <div className="text-8">{text}</div>}

            {["link-color", "link-gray"].includes(state.hierarchy) && <>{text}</>}
          </div>
          <>
            {iconTrailing && (
              <>
                <>
                  {["lg", "md", "sm", "xl"].includes(state.size) && (
                    <Placeholder157
                      className="placeholder-157"
                      color={
                        state.hierarchy === "primary" && ["default", "focused", "hover"].includes(state.state)
                          ? "white"
                          : (state.hierarchy === "link-gray" && state.state === "default") ||
                            (state.hierarchy === "link-gray" && state.state === "focused") ||
                            (state.hierarchy === "tertiary-gray" && state.state === "default") ||
                            (state.hierarchy === "tertiary-gray" && state.state === "focused")
                          ? "#475467"
                          : (state.hierarchy === "link-gray" && state.state === "hover") ||
                            (state.hierarchy === "secondary-gray" && state.state === "default") ||
                            (state.hierarchy === "secondary-gray" && state.state === "focused") ||
                            (state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#344054"
                          : state.state === "disabled"
                          ? "#98A2B3"
                          : state.state === "hover" &&
                            ["link-color", "secondary-color", "tertiary-color"].includes(state.hierarchy)
                          ? "#53389E"
                          : state.hierarchy === "secondary-gray" && state.state === "hover"
                          ? "#182230"
                          : "#6941C6"
                      }
                    />
                  )}

                  {state.size === "two-xl" && (
                    <Placeholder
                      className="placeholder-159"
                      color={
                        state.hierarchy === "primary" && ["default", "focused", "hover"].includes(state.state)
                          ? "white"
                          : (state.hierarchy === "link-gray" && state.state === "default") ||
                            (state.hierarchy === "link-gray" && state.state === "focused") ||
                            (state.hierarchy === "tertiary-gray" && state.state === "default")
                          ? "#475467"
                          : (state.hierarchy === "link-gray" && state.state === "hover") ||
                            (state.hierarchy === "secondary-gray" && state.state === "default") ||
                            (state.hierarchy === "secondary-gray" && state.state === "focused") ||
                            (state.hierarchy === "tertiary-gray" && state.state === "focused") ||
                            (state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#344054"
                          : state.state === "disabled"
                          ? "#98A2B3"
                          : state.state === "hover" &&
                            ["link-color", "secondary-color", "tertiary-color"].includes(state.hierarchy)
                          ? "#53389E"
                          : state.hierarchy === "secondary-gray" && state.state === "hover"
                          ? "#182230"
                          : "#6941C6"
                      }
                    />
                  )}
                </>
              </>
            )}
          </>
        </>
      )}

      {state.icon === "only" && <>{override}</>}
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

ButtonsButton.propTypes = {
  iconTrailing: PropTypes.bool,
  iconLeading: PropTypes.bool,
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  hierarchy: PropTypes.oneOf([
    "tertiary-color",
    "link-color",
    "tertiary-gray",
    "secondary-color",
    "link-gray",
    "primary",
    "secondary-gray",
  ]),
  icon: PropTypes.oneOf(["dot-leading", "only", "default"]),
  stateProp: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
  text: PropTypes.string,
};
