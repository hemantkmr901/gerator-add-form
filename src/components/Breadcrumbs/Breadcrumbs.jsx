/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronRight } from "../../icons/ChevronRight";
import { SlashDivider } from "../../icons/SlashDivider";
import { BreadcrumbButton } from "../BreadcrumbButton";
import "./style.css";

export const Breadcrumbs = ({
  divider,
  type,
  breakpoint,
  className,
  breadcrumbButtonText = "Settings",
  breadcrumbButtonCurrentFalseTypeClassName,
  visible = true,
  visible1 = true,
  breadcrumbButtonText1 = "Team",
  breadcrumbButtonCurrentFalseTypeClassNameOverride,
}) => {
  return (
    <div className={`breadcrumbs type-0-${type} breakpoint-${breakpoint} ${className}`}>
      {type === "text" && (
        <BreadcrumbButton className="breadcrumb-button-base" current={false} icon stateProp="default" type="text" />
      )}

      {divider === "slash" && type === "text" && <SlashDivider className="slash-divider" />}

      {["button-brand", "button-gray", "text-with-line"].includes(type) && (
        <div className="tabs">
          <BreadcrumbButton
            className="breadcrumb-button-base"
            current={false}
            icon
            stateProp="default"
            type={type === "button-brand" ? "button-brand" : type === "button-gray" ? "button-gray" : "text"}
          />
          {divider === "slash" && <SlashDivider className="slash-divider" />}

          {divider === "chevron" && <ChevronRight className="chevron-right" />}

          <BreadcrumbButton
            className={breadcrumbButtonCurrentFalseTypeClassName}
            current={false}
            icon={false}
            stateProp="default"
            text={breadcrumbButtonText}
            type={type === "button-brand" ? "button-brand" : type === "button-gray" ? "button-gray" : "text"}
          />
          {divider === "chevron" && (
            <>
              <ChevronRight className="chevron-right" />
              <>
                {visible && (
                  <BreadcrumbButton
                    className="breadcrumb-button-base"
                    current={false}
                    icon={false}
                    stateProp="default"
                    text="..."
                    type={type === "button-brand" ? "button-brand" : type === "button-gray" ? "button-gray" : "text"}
                  />
                )}
              </>
              <>{visible1 && <ChevronRight className="chevron-right" />}</>
              <BreadcrumbButton
                className={breadcrumbButtonCurrentFalseTypeClassNameOverride}
                current
                icon={false}
                stateProp="default"
                text={breadcrumbButtonText1}
                type={type === "button-brand" ? "button-brand" : type === "button-gray" ? "button-gray" : "text"}
              />
            </>
          )}

          {divider === "slash" && (
            <>
              <SlashDivider className="slash-divider" />
              <>
                {visible && (
                  <BreadcrumbButton
                    className="breadcrumb-button-base"
                    current={false}
                    icon={false}
                    stateProp="default"
                    text="..."
                    type={type === "button-brand" ? "button-brand" : type === "button-gray" ? "button-gray" : "text"}
                  />
                )}
              </>
              <>{visible1 && <SlashDivider className="slash-divider" />}</>
              <BreadcrumbButton
                className={breadcrumbButtonCurrentFalseTypeClassNameOverride}
                current
                icon={false}
                stateProp="default"
                text={breadcrumbButtonText1}
                type={type === "button-brand" ? "button-brand" : type === "button-gray" ? "button-gray" : "text"}
              />
            </>
          )}
        </div>
      )}

      {type === "text" && divider === "chevron" && <ChevronRight className="chevron-right" />}

      {type === "text" && (
        <BreadcrumbButton
          className="breadcrumb-button-base"
          current={false}
          icon={false}
          stateProp="default"
          text="Settings"
          type="text"
        />
      )}

      {type === "text" && divider === "chevron" && (
        <>
          <ChevronRight className="chevron-right" />
          <BreadcrumbButton
            className="breadcrumb-button-base"
            current={false}
            icon={false}
            stateProp="default"
            text="..."
            type="text"
          />
          <ChevronRight className="chevron-right" />
          <BreadcrumbButton
            className="breadcrumb-button-base"
            current
            icon={false}
            stateProp="default"
            text="Team"
            type="text"
          />
        </>
      )}

      {divider === "slash" && type === "text" && (
        <>
          <SlashDivider className="slash-divider" />
          <BreadcrumbButton
            className="breadcrumb-button-base"
            current={false}
            icon={false}
            stateProp="default"
            text="..."
            type="text"
          />
          <SlashDivider className="slash-divider" />
          <BreadcrumbButton
            className="breadcrumb-button-base"
            current
            icon={false}
            stateProp="default"
            text="Team"
            type="text"
          />
        </>
      )}
    </div>
  );
};

Breadcrumbs.propTypes = {
  divider: PropTypes.oneOf(["chevron", "slash"]),
  type: PropTypes.oneOf(["button-gray", "text", "text-with-line", "button-brand"]),
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  breadcrumbButtonText: PropTypes.string,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  breadcrumbButtonText1: PropTypes.string,
};
