import { IconPropInterface, LibSizeEnum, LibStatusEnum } from "../atoms.utils";
import { Icon } from "./icon";
import "../../assets/styles/button.style.css";

interface ButtonPropInterface {
  label: string;
  size?: LibSizeEnum;
  style?: React.CSSProperties;
  status?: LibStatusEnum;
  iconRight?: IconPropInterface;
  iconLeft?: IconPropInterface;
  onClick?: () => void;
}

export const Button = ({
  style = { display: "flex" },
  status = LibStatusEnum.primary,
  label,
  iconLeft,
  iconRight,
}: ButtonPropInterface) => {
  return (
    <button className={'lib_button status_' + status} style={style}>
      {iconLeft && <Icon {...iconLeft} />}
      {label}
      {iconRight && <Icon {...iconRight} />}
    </button>
  );
};
