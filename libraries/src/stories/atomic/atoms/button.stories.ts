import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../../../atomic";
import { LibStatusEnum } from "../../../atomic/atoms.utils";

const meta = {
  title: "Atoms/Buttons",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    status: {
      control: "select",
      options: [
        LibStatusEnum.primary,
        LibStatusEnum.control,
        LibStatusEnum.success,
        LibStatusEnum.warning,
        LibStatusEnum.danger,
        LibStatusEnum.info,
      ],
      defaultValue: LibStatusEnum.primary
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = {
  args: {
    label: "Click",
    status: LibStatusEnum.primary
  }
};


