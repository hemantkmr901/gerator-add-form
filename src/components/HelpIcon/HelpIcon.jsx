/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const HelpIcon = ({ cursor = true, open, supportingText, tooltip, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    open: open || false,
    supportingText: supportingText || false,
    tooltip: tooltip || "top-no-arrow",
  });

  return (
    <div
      className={`help-icon ${state.tooltip} open-${state.open} supporting-text-${state.supportingText} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {((state.open && state.tooltip === "left") ||
        (state.open && state.tooltip === "top-arrow") ||
        (state.open && state.tooltip === "top-left") ||
        (state.open && state.tooltip === "top-no-arrow") ||
        (state.open && state.tooltip === "top-right")) && (
        <>
          <div className="tooltip">
            {state.tooltip === "top-no-arrow" && (
              <div className="content-6">
                <div className="text-10">
                  {!state.supportingText && <>This is a tooltip</>}

                  {state.supportingText && (
                    <>
                      <div className="text-11">This is a tooltip</div>
                      <p className="supporting-text-6">
                        Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user
                        understand meaning, function or alt-text.
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}

            {["left", "top-arrow", "top-left", "top-right"].includes(state.tooltip) && (
              <>
                <div className="content-7">
                  <div className="text-12">
                    {!state.supportingText && <>This is a tooltip</>}

                    {state.supportingText && (
                      <>
                        <div className="text-11">This is a tooltip</div>
                        <p className="supporting-text-6">
                          Tooltips are used to describe or identify an element. In most scenarios, tooltips help the
                          user understand meaning, function or alt-text.
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <img
                  className="img"
                  alt="Tooltip"
                  src={
                    state.supportingText && state.tooltip === "top-arrow"
                      ? "/img/tooltip-1.svg"
                      : state.tooltip === "top-right"
                      ? "/img/tooltip-2.svg"
                      : state.tooltip === "top-left"
                      ? "/img/tooltip-4.svg"
                      : state.tooltip === "left"
                      ? "/img/tooltip-10.svg"
                      : "/img/tooltip.svg"
                  }
                />
              </>
            )}
          </div>
          <>
            {cursor && (
              <div className="cursor">
                <div className="lines-wrapper">
                  <img className="lines" alt="Lines" src="/img/lines.svg" />
                </div>
              </div>
            )}
          </>
        </>
      )}

      {state.open && ["bottom", "right"].includes(state.tooltip) && (
        <div className="overlap">
          <div className="tooltip-2">
            <img
              className="tooltip-3"
              alt="Tooltip"
              src={
                state.tooltip === "bottom" && state.supportingText
                  ? "/img/tooltip-7.svg"
                  : state.tooltip === "right"
                  ? "/img/tooltip-8.svg"
                  : "/img/tooltip-6.svg"
              }
            />
            <div className="content-8">
              <div className="text-13">
                {!state.supportingText && <>This is a tooltip</>}

                {state.supportingText && (
                  <>
                    <div className="text-11">This is a tooltip</div>
                    <p className="supporting-text-6">
                      Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user
                      understand meaning, function or alt-text.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          {cursor && (
            <div className="overlap-group-wrapper">
              <div className="img-wrapper">
                <img className="lines" alt="Lines" src="/img/lines.svg" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        open: true,
      };

    case "mouse_leave":
      return {
        ...state,
        open: false,
      };
  }

  return state;
}

HelpIcon.propTypes = {
  cursor: PropTypes.bool,
  open: PropTypes.bool,
  supportingText: PropTypes.bool,
  tooltip: PropTypes.oneOf(["top-left", "right", "top-arrow", "bottom", "left", "top-no-arrow", "top-right"]),
};
