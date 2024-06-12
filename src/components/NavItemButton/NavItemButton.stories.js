import { NavItemButton } from ".";

export default {
  title: "Components/NavItemButton",
  component: NavItemButton,
  argTypes: {
    size: {
      options: ["md", "lg"],
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
    current: true,
    size: "md",
    stateProp: "focused",
  },
};
