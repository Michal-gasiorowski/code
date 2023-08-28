import { FC } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: string;
};

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
