import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      options: ["md", "sm"],
      control: { type: "select" },
    },
    type: {
      options: ["radio", "checkbox"],
      control: { type: "select" },
    },
    state: {
      options: ["default", "focused", "hover", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    supportingText: true,
    checked: true,
    indeterminate: true,
    size: "md",
    type: "radio",
    text: true,
    state: "default",
    className: {},
    checkboxBaseCheckedFalseClassName: {},
  },
};
