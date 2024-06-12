import { TagCloseX } from ".";

export default {
  title: "Components/TagCloseX",
  component: TagCloseX,
  argTypes: {
    size: {
      options: ["md", "lg", "sm"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "md",
    stateProp: "hover",
    className: {},
  },
};
