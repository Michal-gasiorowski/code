import { AppWrapper, Button, Input } from "#components";
import { forwardRef, useImperativeHandle, useRef } from "react";

export const FancyInputParent = () => {
  const inputRef = useRef(null);
  return (
    <>
      <Input ref={inputRef} label="Label" />
      <Button onClick={() => inputRef.current.focus()}>Focus on input</Button>
    </>
  );
};

export const Parent = () => {
  const childRef = useRef(null);

  const handleClick = () => {
    const log = childRef.current?.console;
    log && log();
  };

  return (
    <>
      <Child ref={childRef} />
      <Button onClick={handleClick}>Call child method</Button>
    </>
  );
};

export const Child = forwardRef((props, ref) => {
  const { log } = AppWrapper.useContext();

  useImperativeHandle(ref, () => ({
    console: () => {
      internalMethod();
    },
  }));

  const internalMethod = () => {
    log(`Hello, this is some random number: ${Math.random()}`);
  };

  return null;
});
