import { AppWrapper, Button } from "#components";
import { useEffect, useMemo } from "react";

export function ParentComponent() {
  const { log } = AppWrapper.useContext();

  const workerInstance = useMemo(() => {
    if (typeof window !== "undefined")
      return new Worker(new URL("./webWorker.ts", import.meta.url));
  }, []);

  useEffect(() => {
    workerInstance.onmessage = (e) => {
      log("App: Message received from worker");
      log(e.data);
    };

    return () => {
      if (workerInstance) workerInstance.terminate();
    };
  }, [workerInstance]);

  const handleClick = () => {
    log("App: Sending message to worker");
    workerInstance.postMessage([1, 3, 5]);
  };

  return (
    <div>
      <Button onClick={handleClick}>Post array to worker!</Button>
    </div>
  );
}
