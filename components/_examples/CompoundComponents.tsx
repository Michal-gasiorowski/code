import { createContext, useContext, useState } from "react";

import { Button } from "#components";

const ParentContext = createContext({ count: 0 });

const ParentComponent = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ParentContext.Provider value={{ count }}>
      {children}
      <br />
      <Button onClick={() => setCount((state) => state + 1)}>Add one</Button>
    </ParentContext.Provider>
  );
};

const ShowCount = () => {
  const { count } = ParentComponent.useContext();
  return <div>count: {count}</div>;
};

const AddTwo = () => {
  const { count } = ParentComponent.useContext();
  return <div>count plus two: {count + 2}</div>;
};

ParentComponent.AddTwo = AddTwo;
ParentComponent.ShowCount = ShowCount;
ParentComponent.useContext = () => useContext(ParentContext);

export const Parent = ParentComponent;
