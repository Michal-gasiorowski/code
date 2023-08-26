// Example from https://beta.reactjs.org/learn

import styles from "./Input.module.css";

export const Input = (props) => {
  return (
    <div className={styles.container}>
      {props.label}:{" "}
      <input className={styles.input} {...props} value={props.value} />
    </div>
  );
};
