import { FC } from "react";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
  value: string;
  onChange: (e: any) => void;
};

export const Input: FC<InputProps> = (props) => {
  return (
    <div className={styles.container}>
      {props.label}:{" "}
      <input className={styles.input} {...props} value={props.value} />
    </div>
  );
};
