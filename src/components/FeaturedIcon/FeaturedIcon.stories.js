import { FeaturedIcon } from ".";

export default {
  title: "Components/FeaturedIcon",
  component: FeaturedIcon,
  argTypes: {
    size: {
      options: ["md", "sm", "lg", "xl"],
      control: { type: "select" },
    },
    color: {
      options: ["warning", "gray", "success", "brand", "error"],
      control: { type: "select" },
    },
    type: {
      options: ["glass", "modern", "dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "md",
    color: "warning",
    type: "glass",
    className: {},
  },
};
