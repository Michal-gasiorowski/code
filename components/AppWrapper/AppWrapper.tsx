import { createContext, useContext, useEffect, useRef, useState } from "react";

import { Button } from "#components/Button";
import pl from "#pl";
import styles from "./AppWrapper.module.css";

export const AppContext = createContext({ log: (arg: string) => {} });

export const useAppContext = () => useContext(AppContext);

const AppWrapperComponent = ({ children, log = false }) => {
  const [data, setData] = useState([]);
  const codeWrapperRef = useRef(null);

  const handleLog = (arg: string) => {
    console.log(arg);
    setData((state) => [...state, arg]);
  };

  const clearLog = () => {
    setData([]);
  };

  useEffect(() => {
    if (codeWrapperRef.current) {
      codeWrapperRef.current.scrollTop = codeWrapperRef.current.scrollHeight;
    }
  }, [data]);

  return (
    <AppContext.Provider value={{ log: handleLog }}>
      <div className={styles.wrapper}>{children}</div>
      {log && (
        <div className={styles.logWrapper}>
          <div className={styles.logHeading}>
            <div>{pl.components.AppWrapper.console}</div>
            <Button onClick={clearLog}>{pl.components.AppWrapper.clear}</Button>
          </div>
          <div className={styles.codeWrapper} ref={codeWrapperRef}>
            <code>
              <ul className={styles.logEntry}>
                {data.map((n, idx) => (
                  <li key={idx}>{n ? n : "{empty}"}</li>
                ))}
                {data.length === 0 && (
                  <li>{pl.components.AppWrapper.noLogs}</li>
                )}
              </ul>
            </code>
          </div>
        </div>
      )}
    </AppContext.Provider>
  );
};

AppWrapperComponent.useContext = useAppContext;

export const AppWrapper = AppWrapperComponent;
