import { ProgressBar } from ".";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: {
      options: [
        "sixty",
        "zero",
        "thirty",
        "eighty",
        "twenty",
        "one-hundred",
        "ten",
        "fifty",
        "forty",
        "ninety",
        "seventy",
      ],
      control: { type: "select" },
    },
    label: {
      options: ["top-floating", "right", "false", "bottom", "bottom-floating"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    progress: "sixty",
    label: "top-floating",
    className: {},
    progressBarClassName: {},
    progressClassName: {},
    percentageClassName: {},
  },
};
