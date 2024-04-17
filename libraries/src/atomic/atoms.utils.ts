import * as IconsFa from "react-icons/fa";
import * as IconsIo from "react-icons/io";

export const ALL_ICONS = { ...IconsFa, ...IconsIo };
export type AllIconsType = keyof typeof ALL_ICONS;

export enum LibStatusEnum {
  "primary" = "primary",
  "success" = "success",
  "danger" = "danger",
  "info" = "info",
  "warning" = "warning",
  "control" = "control",
}

export enum LibSizeEnum {
  "xs" = "xs",
  "sm" = "sm",
  "md" = "md",
  "lg" = "lg",
  "xl" = "xl",
  "exl" = "exl",
  "sxl" = "sxl",
}
export const LIB_SIZE_VALUES: Record<LibSizeEnum, string> = {
  [LibSizeEnum.xs]: "0.25rem",
  [LibSizeEnum.sm]: "0.5rem",
  [LibSizeEnum.md]: "1rem",
  [LibSizeEnum.lg]: "2rem",
  [LibSizeEnum.xl]: "3rem",
  [LibSizeEnum.exl]: "4rem",
  [LibSizeEnum.sxl]: "5rem",
}

export interface IconPropInterface {
  status?: LibStatusEnum;
  size?: LibSizeEnum;
  icon: AllIconsType;
  style?: React.CSSProperties;
  onClick?: () => void;
}
