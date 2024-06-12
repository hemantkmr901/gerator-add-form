import { CheckboxBase } from ".";

export default {
  title: "Components/CheckboxBase",
  component: CheckboxBase,
  argTypes: {
    size: {
      options: ["md", "sm"],
      control: { type: "select" },
    },
    type: {
      options: ["radio", "checkbox"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["disabled", "focused", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    checked: true,
    indeterminate: true,
    size: "md",
    type: "radio",
    stateProp: "disabled",
    className: {},
  },
};
