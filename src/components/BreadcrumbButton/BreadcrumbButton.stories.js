import { BreadcrumbButton } from ".";

export default {
  title: "Components/BreadcrumbButton",
  component: BreadcrumbButton,
  argTypes: {
    type: {
      options: ["button-gray", "text", "button-brand"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["default", "focused", "hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    current: true,
    type: "button-gray",
    icon: true,
    stateProp: "default",
    className: {},
    text: "Projects",
  },
};
