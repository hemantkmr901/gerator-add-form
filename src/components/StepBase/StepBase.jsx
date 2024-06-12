/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { StepIconBase } from "../../icons/StepIconBase";
import { StepIconBase18 } from "../../icons/StepIconBase18";
import { StepIconBase19 } from "../../icons/StepIconBase19";
import { StepIconBase20 } from "../../icons/StepIconBase20";
import { StepIconBase21 } from "../../icons/StepIconBase21";
import { StepIconBase22 } from "../../icons/StepIconBase22";
import { StepIconBase23 } from "../../icons/StepIconBase23";
import { StepIconBase24 } from "../../icons/StepIconBase24";
import { StepIconBase25 } from "../../icons/StepIconBase25";
import { StepIconBase26 } from "../../icons/StepIconBase26";
import { StepIconBase8 } from "../../icons/StepIconBase8";
import { User0184 } from "../../icons/User0184";
import { User0193 } from "../../icons/User0193";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import { FeaturedIcon } from "../FeaturedIcon";
import "./style.css";

export const StepBase = ({
  connector = true,
  status,
  size,
  type,
  stateProp,
  className,
  connectorWrapClassName,
  concreteComponentNodeStatusIncompleteClassName,
  concreteComponentNodeContentClassName,
  concreteComponentNodeDotClassName,
  connectorClassName,
  textAndSupportingClassName,
  textClassName,
  text = "Your details",
  supportingTextClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    status: status || "incomplete",
    size: size || "sm",
    type: type || "text-line",
    state: stateProp || "default",
  });

  return (
    <div
      className={`step-base ${state.type} size-8-${state.size} status-1-${state.status} state-0-${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.type === "text-line" && (
        <div className="content">
          <div className="text-wrapper">{text}</div>
          <p className="supporting-text">Please provide your name and email</p>
        </div>
      )}

      {["featured-icon-left", "icon-left"].includes(state.type) && (
        <>
          <div className={`connector-wrap ${connectorWrapClassName}`}>
            {state.type === "icon-left" && ["current", "incomplete"].includes(state.status) && (
              <ConcreteComponentNode
                contentClassName={concreteComponentNodeContentClassName}
                dotClassName={concreteComponentNodeDotClassName}
                size={state.size === "md" ? "md" : state.size === "lg" ? "lg" : "sm"}
                stateProp={state.state === "hover" ? "hover" : state.state === "focus" ? "focused" : "default"}
                status={state.status === "current" ? "current" : "incomplete"}
                statusIncompleteClassName={concreteComponentNodeStatusIncompleteClassName}
              />
            )}

            {state.type === "featured-icon-left" && (
              <FeaturedIcon
                color="gray"
                icon={<User0184 className="user-01-84" color="#344054" />}
                size="lg"
                type="modern"
              />
            )}

            {(state.status === "current" ||
              state.status === "incomplete" ||
              (state.status === "complete" && state.type === "featured-icon-left")) && (
              <>
                <>{connector && <div className={`connector ${connectorClassName}`} />}</>
              </>
            )}

            {((state.size === "sm" &&
              state.state === "default" &&
              state.status === "complete" &&
              state.type === "icon-left") ||
              (state.size === "sm" &&
                state.state === "hover" &&
                state.status === "complete" &&
                state.type === "icon-left")) && (
              <>
                <StepIconBase className="step-icon-base" color={state.state === "hover" ? "#F4EBFF" : "#F9F5FF"} />
                <>{connector && <div className={`connector-2 ${connectorClassName}`} />}</>
              </>
            )}

            {((state.size === "lg" &&
              state.state === "default" &&
              state.status === "complete" &&
              state.type === "icon-left") ||
              (state.size === "lg" &&
                state.state === "hover" &&
                state.status === "complete" &&
                state.type === "icon-left") ||
              (state.size === "md" &&
                state.state === "default" &&
                state.status === "complete" &&
                state.type === "icon-left") ||
              (state.size === "md" &&
                state.state === "hover" &&
                state.status === "complete" &&
                state.type === "icon-left")) && (
              <>
                <StepIconBase8
                  className={`${state.size === "lg" ? "class-17" : "class-18"}`}
                  color={state.state === "hover" ? "#F4EBFF" : "#F9F5FF"}
                />
                <>{connector && <div className={`connector-2 ${connectorClassName}`} />}</>
              </>
            )}

            {state.size === "sm" &&
              state.state === "focus" &&
              state.status === "complete" &&
              state.type === "icon-left" && (
                <>
                  <StepIconBase18 className="step-icon-base-18" />
                  <>{connector && <div className={`connector-2 ${connectorClassName}`} />}</>
                </>
              )}

            {state.size === "md" &&
              state.state === "focus" &&
              state.status === "complete" &&
              state.type === "icon-left" && (
                <>
                  <StepIconBase19 className="step-icon-base-19" />
                  <>{connector && <div className={`connector-2 ${connectorClassName}`} />}</>
                </>
              )}

            {state.size === "lg" &&
              state.type === "icon-left" &&
              state.state === "focus" &&
              state.status === "complete" && (
                <>
                  <StepIconBase20 className="step-icon-base-20" />
                  <>{connector && <div className={`connector-2 ${connectorClassName}`} />}</>
                </>
              )}
          </div>
          <div className={`text-and-supporting ${textAndSupportingClassName}`}>
            <div className={`text-2 ${textClassName}`}>{text}</div>
            <p className={`p ${supportingTextClassName}`}>Please provide your name and email</p>
          </div>
        </>
      )}

      {((state.status === "current" && state.type === "icon-only") ||
        (state.status === "current" && state.type === "icon-top") ||
        (state.status === "incomplete" && state.type === "icon-only") ||
        (state.status === "incomplete" && state.type === "icon-top")) && (
        <ConcreteComponentNode
          size={state.size === "md" ? "md" : state.size === "lg" ? "lg" : "sm"}
          stateProp={state.state === "hover" ? "hover" : state.state === "focus" ? "focused" : "default"}
          status={state.status === "current" ? "current" : "incomplete"}
          statusIncompleteClassName="step-icon-base-instance"
        />
      )}

      {state.type === "featured-icon-top" && (
        <>
          <FeaturedIcon
            color="gray"
            icon={
              state.size === "sm" ? (
                <User0193 className="user-01-93" color="#344054" />
              ) : (
                <User0184
                  className={`${state.size === "md" && "user-01-84"} ${state.size === "lg" && "class-19"}`}
                  color="#344054"
                />
              )
            }
            size={state.size === "md" ? "lg" : state.size === "lg" ? "xl" : "md"}
            type="modern"
          />
          <div className={`content-2 ${textAndSupportingClassName}`}>
            <div className={`text-3 ${textClassName}`}>{text}</div>
            <p className={`supporting-text-2 ${supportingTextClassName}`}>Please provide your name and email</p>
          </div>
        </>
      )}

      {((state.size === "sm" &&
        state.state === "default" &&
        state.status === "complete" &&
        state.type === "icon-only") ||
        (state.size === "sm" &&
          state.state === "default" &&
          state.status === "complete" &&
          state.type === "icon-top") ||
        (state.size === "sm" && state.state === "hover" && state.status === "complete" && state.type === "icon-only") ||
        (state.size === "sm" &&
          state.state === "hover" &&
          state.status === "complete" &&
          state.type === "icon-top")) && (
        <StepIconBase className="step-icon-base" color={state.state === "hover" ? "#F4EBFF" : "#F9F5FF"} />
      )}

      {((state.size === "lg" &&
        state.state === "default" &&
        state.status === "complete" &&
        state.type === "icon-only") ||
        (state.size === "lg" &&
          state.state === "default" &&
          state.status === "complete" &&
          state.type === "icon-top") ||
        (state.size === "lg" && state.state === "hover" && state.status === "complete" && state.type === "icon-only") ||
        (state.size === "lg" && state.state === "hover" && state.status === "complete" && state.type === "icon-top") ||
        (state.size === "md" &&
          state.state === "default" &&
          state.status === "complete" &&
          state.type === "icon-only") ||
        (state.size === "md" &&
          state.state === "default" &&
          state.status === "complete" &&
          state.type === "icon-top") ||
        (state.size === "md" && state.state === "hover" && state.status === "complete" && state.type === "icon-only") ||
        (state.size === "md" &&
          state.state === "hover" &&
          state.status === "complete" &&
          state.type === "icon-top")) && (
        <StepIconBase8
          className={`${state.size === "lg" ? "class-17" : "class-18"}`}
          color={state.state === "hover" ? "#F4EBFF" : "#F9F5FF"}
        />
      )}

      {((state.size === "lg" && state.state === "default" && state.type === "icon-top") ||
        (state.size === "lg" && state.state === "focus" && state.status === "current" && state.type === "icon-top") ||
        (state.size === "lg" &&
          state.state === "focus" &&
          state.status === "incomplete" &&
          state.type === "icon-top") ||
        (state.size === "lg" && state.state === "hover" && state.type === "icon-top") ||
        (state.size === "md" && state.state === "default" && state.type === "icon-top") ||
        (state.size === "md" && state.state === "focus" && state.status === "current" && state.type === "icon-top") ||
        (state.size === "md" &&
          state.state === "focus" &&
          state.status === "incomplete" &&
          state.type === "icon-top") ||
        (state.size === "md" && state.state === "hover" && state.type === "icon-top") ||
        (state.size === "sm" && state.status === "current" && state.type === "icon-top") ||
        (state.size === "sm" && state.status === "incomplete" && state.type === "icon-top")) && (
        <div className={`content-3 ${textAndSupportingClassName}`}>
          <div className={`text-4 ${textClassName}`}>{text}</div>
          <p className={`supporting-text-3 ${supportingTextClassName}`}>Please provide your name and email</p>
        </div>
      )}

      {state.type === "icon-only" && state.size === "sm" && state.state === "focus" && state.status === "complete" && (
        <StepIconBase21 className="step-icon-base-21" />
      )}

      {state.type === "icon-top" && state.size === "sm" && state.state === "focus" && state.status === "complete" && (
        <StepIconBase22 className="step-icon-base-22" />
      )}

      {state.type === "icon-top" && state.size === "sm" && state.status === "complete" && (
        <div className={`content-4 ${textAndSupportingClassName}`}>
          <div className={`text-5 ${textClassName}`}>{text}</div>
          <p className={`supporting-text-4 ${supportingTextClassName}`}>Please provide your name and email</p>
        </div>
      )}

      {state.type === "icon-only" && state.size === "md" && state.state === "focus" && state.status === "complete" && (
        <StepIconBase23 className="step-icon-base-23" />
      )}

      {state.type === "icon-top" && state.size === "md" && state.state === "focus" && state.status === "complete" && (
        <>
          <StepIconBase24 className="step-icon-base-24" />
          <div className={`content-5 ${textAndSupportingClassName}`}>
            <div className={`text-6 ${textClassName}`}>{text}</div>
            <p className={`supporting-text-5 ${supportingTextClassName}`}>Please provide your name and email</p>
          </div>
        </>
      )}

      {state.size === "lg" && state.type === "icon-only" && state.state === "focus" && state.status === "complete" && (
        <StepIconBase25 className="step-icon-base-25" />
      )}

      {state.type === "icon-top" && state.size === "lg" && state.state === "focus" && state.status === "complete" && (
        <>
          <StepIconBase26 className="step-icon-base-26" />
          <div className={`content-5 ${textAndSupportingClassName}`}>
            <div className={`text-6 ${textClassName}`}>{text}</div>
            <p className={`supporting-text-5 ${supportingTextClassName}`}>Please provide your name and email</p>
          </div>
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

StepBase.propTypes = {
  connector: PropTypes.bool,
  status: PropTypes.oneOf(["incomplete", "current", "complete"]),
  size: PropTypes.oneOf(["md", "lg", "sm"]),
  type: PropTypes.oneOf(["icon-only", "text-line", "icon-top", "icon-left", "featured-icon-top", "featured-icon-left"]),
  stateProp: PropTypes.oneOf(["hover", "focus", "default"]),
  text: PropTypes.string,
};
