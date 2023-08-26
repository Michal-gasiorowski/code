import { createContext, useContext, useEffect, useRef, useState } from "react";

import { s } from "nextra/dist/types-c8e621b7";
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
            <div>Konsola:</div>
            <button className={styles.logButton} onClick={clearLog}>
              Wyczyść
            </button>
          </div>
          <div className={styles.codeWrapper} ref={codeWrapperRef}>
            <code>
              <ul className={styles.logEntry}>
                {data.map((n, idx) => (
                  <li key={idx}>{n ? n : "{empty}"}</li>
                ))}
                {data.length === 0 && <li>Brak logów</li>}
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
