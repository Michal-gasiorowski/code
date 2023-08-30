import { FC, Ref, forwardRef, useImperativeHandle, useRef } from "react";

import styles from "./Input.module.css";

type InputProps = {
  label: string;
  value?: string;
  onChange?: (e: any) => void;
  ref: Ref<unknown>;
};

export const Input: FC<InputProps> = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <div className={styles.container}>
      {props.label}:{" "}
      <input className={styles.input} {...props} ref={inputRef} />
    </div>
  );
});
