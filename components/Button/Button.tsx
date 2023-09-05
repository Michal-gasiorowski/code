import { FC } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: string;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
