import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,
  argTypes: {
    status: {
      options: ["incomplete", "current", "complete"],
      control: { type: "select" },
    },
    size: {
      options: ["md", "lg", "sm"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["focused", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "incomplete",
    size: "md",
    stateProp: "focused",
    statusIncompleteClassName: {},
    contentClassName: {},
    dotClassName: {},
  },
};
