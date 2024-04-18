import {
  IconPropInterface,
  ALL_ICONS,
  LIB_SIZE_VALUES,
  LibSizeEnum,
  LibStatusEnum,
} from "../atoms.utils";
import '../../assets/styles/atoms.style.css';

export const Icon = ({
  status = LibStatusEnum.control,
  size = LibSizeEnum.md,
  style = { display: "flex" },
  icon,
}: IconPropInterface) => {
  const IconComponent = ALL_ICONS[icon];
  const sizeValues = LIB_SIZE_VALUES;
  return (
    <IconComponent
      size={sizeValues[size]}
      className={"icon_color_" + status}
      style={style}
    />
  );
};
