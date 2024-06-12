import { Breadcrumbs } from ".";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    divider: {
      options: ["chevron", "slash"],
      control: { type: "select" },
    },
    type: {
      options: ["button-gray", "text", "text-with-line", "button-brand"],
      control: { type: "select" },
    },
    breakpoint: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    divider: "chevron",
    type: "button-gray",
    breakpoint: "desktop",
    className: {},
    breadcrumbButtonText: "Settings",
    breadcrumbButtonCurrentFalseTypeClassName: {},
    visible: true,
    visible1: true,
    breadcrumbButtonText1: "Team",
    breadcrumbButtonCurrentFalseTypeClassNameOverride: {},
  },
};
