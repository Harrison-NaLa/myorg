import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Icon } from "../../../atomic";
import { LibSizeEnum, LibStatusEnum } from "../../../atomic/atoms.utils";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Icons",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [
        LibSizeEnum.xs,
        LibSizeEnum.sm,
        LibSizeEnum.md,
        LibSizeEnum.lg,
        LibSizeEnum.exl,
        LibSizeEnum.sxl,
      ],
      defaultValue: LibSizeEnum.sxl
    },
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
  args: { onClick: fn() },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = {
  args: {
    status: LibStatusEnum.primary,
    icon: "FaHome",
  },
};
