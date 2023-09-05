import { AppWrapper, Input } from "#components";
import { Suspense, memo, useDeferredValue, useState } from "react";

function slowReturn(value: string) {
  let startTime = performance.now();
  while (performance.now() - startTime < 250) {
    // Do nothing for 250 milliseconds
  }
  return value;
}

const DeferredValue = memo(function DeferredValue({
  value,
}: {
  value: string;
}) {
  return <p>Deferred value: {slowReturn(value)}</p>;
});

export const DeferredValueComponent = () => {
  const [value, setValue] = useState("");
  const deferredValue = useDeferredValue(value);
  const isStale = deferredValue !== value;
  const { log } = AppWrapper.useContext();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Input value={value} onChange={handleChange} label="type here: " />
      <p>Actual value: {value}</p>
      {isStale ? (
        <p>Calculating...</p>
      ) : (
        <DeferredValue value={deferredValue} />
      )}
    </div>
  );
};
