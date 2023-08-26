import { createContext, useContext, useState } from "react";

import { AppWrapper } from "#components";

export const ParentContext = createContext({ count: 0 });

export const ShowCount = () => {
  const { count } = useContext(ParentContext);
  return <div>count: {count}</div>;
};

export const AddTwo = () => {
  const { count } = useContext(ParentContext);
  return <div>count plus two: {count + 2}</div>;
};

export const ParentComponent = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ParentContext.Provider value={{ count }}>
      {children}
      <button onClick={() => setCount((state) => state + 1)}>Add one</button>
    </ParentContext.Provider>
  );
};

ParentComponent.AddTwo = AddTwo;
ParentComponent.ShowCount = ShowCount;

export const Parent = ParentComponent;

export const Wrapper = () => (
  <Parent>
    <Parent.ShowCount />
  </Parent>
);

<AppWrapper>
  <Wrapper />
</AppWrapper>;
