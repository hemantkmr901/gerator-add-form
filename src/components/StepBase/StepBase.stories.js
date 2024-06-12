import { StepBase } from ".";

export default {
  title: "Components/StepBase",
  component: StepBase,
  argTypes: {
    status: {
      options: ["incomplete", "current", "complete"],
      control: { type: "select" },
    },
    size: {
      options: ["md", "lg", "sm"],
      control: { type: "select" },
    },
    type: {
      options: ["icon-only", "text-line", "icon-top", "icon-left", "featured-icon-top", "featured-icon-left"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hover", "focus", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    connector: true,
    status: "incomplete",
    size: "md",
    type: "icon-only",
    stateProp: "hover",
    className: {},
    connectorWrapClassName: {},
    concreteComponentNodeStatusIncompleteClassName: {},
    concreteComponentNodeContentClassName: {},
    concreteComponentNodeDotClassName: {},
    connectorClassName: {},
    textAndSupportingClassName: {},
    textClassName: {},
    text: "Your details",
    supportingTextClassName: {},
  },
};
