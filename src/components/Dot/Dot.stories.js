import { Dot } from ".";

export default {
  title: "Components/Dot",
  component: Dot,
  argTypes: {
    size: {
      options: ["md", "lg", "sm"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "md",
    outline: true,
    className: {},
    dotClassName: {},
  },
};
