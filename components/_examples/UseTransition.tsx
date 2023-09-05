import { AppWrapper, Button } from "#components";
import { memo, useState, useTransition } from "react";

const Posts = memo(function PostsTab() {
  let items = [];
  for (let i = 0; i < 2000; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return (
    <div>
      <p>Posts (hidden for demo purposes)</p>
      <ul style={{ display: "none" }}>{items}</ul>
    </div>
  );
});

function SlowPost({ index }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 millisecond
  }
  return <li className="item">Post #{index + 1}</li>;
}

export const WithTransition = () => {
  const [tabToShow, setTabToShow] = useState("one");
  const [isPending, startTransition] = useTransition();
  const { log } = AppWrapper.useContext();

  const handleClick = (tab) => {
    log(`Switching to tab ${tab}`);
    startTransition(() => {
      log(`Transitioning to tab ${tab}`);
      setTabToShow(tab);
      log(`Transitioned to tab ${tab}`);
    });
    log(`Switched to tab ${tab}`);
    log("-----");
  };

  return (
    <div>
      <Button onClick={() => handleClick("one")} disabled={tabToShow === "one"}>
        Show tab one
      </Button>
      <Button onClick={() => handleClick("two")} disabled={tabToShow === "two"}>
        Show expensive tab
      </Button>
      <Button
        onClick={() => handleClick("three")}
        disabled={tabToShow === "three"}
      >
        Show tab three
      </Button>
      <div>
        {tabToShow === "one" && <p>Tab one</p>}
        {tabToShow === "two" && <Posts />}
        {tabToShow === "three" && <p>Tab three</p>}
      </div>
    </div>
  );
};

export const TransitionWithPending = () => {
  const [tabToShow, setTabToShow] = useState("one");
  const [isPending, startTransition] = useTransition();
  const { log } = AppWrapper.useContext();

  const handleClick = (tab) => {
    log(`Switching to tab ${tab}`);
    startTransition(() => {
      log(`Transitioning to tab ${tab}`);
      setTabToShow(tab);
      log(`Transitioned to tab ${tab}`);
    });
    log(`Switched to tab ${tab}`);
    log("-----");
  };

  return (
    <div>
      <Button
        onClick={() => handleClick("one")}
        disabled={tabToShow === "one" && !isPending}
      >
        Show tab one
      </Button>
      <Button
        onClick={() => handleClick("two")}
        disabled={tabToShow === "two" || isPending}
      >
        Show expensive tab
      </Button>
      <Button
        onClick={() => handleClick("three")}
        disabled={tabToShow === "three" && !isPending}
      >
        Show tab three
      </Button>
      {isPending && <p>Loading...</p>}
      {!isPending && (
        <>
          {tabToShow === "one" && <p>Tab one</p>}
          {tabToShow === "two" && <Posts />}
          {tabToShow === "three" && <p>Tab three</p>}
        </>
      )}
    </div>
  );
};

export const WithoutTransition = () => {
  const [tabToShow, setTabToShow] = useState("one");
  const { log } = AppWrapper.useContext();

  const handleClick = (tab) => {
    log(`Switching to tab ${tab}`);

    log(`Before setTabToShow(${tab})`);
    setTabToShow(tab);
    log(`After setTabToShow(${tab})`);

    log(`Switched to tab ${tab}`);
    log("-----");
  };

  return (
    <div>
      <Button onClick={() => handleClick("one")} disabled={tabToShow === "one"}>
        Show tab one
      </Button>
      <Button onClick={() => handleClick("two")} disabled={tabToShow === "two"}>
        Show expensive tab
      </Button>
      <Button
        onClick={() => handleClick("three")}
        disabled={tabToShow === "three"}
      >
        Show tab three
      </Button>
      <div>
        {tabToShow === "one" && <p>Tab one</p>}
        {tabToShow === "two" && <Posts />}
        {tabToShow === "three" && <p>Tab three</p>}
      </div>
    </div>
  );
};

export const WithTimeout = () => {
  const [tabToShow, setTabToShow] = useState("one");
  const { log } = AppWrapper.useContext();

  const handleClick = (tab) => {
    log(`Switching to tab ${tab}`);

    setTimeout(() => {
      log(`Timeout begins: ${tab}`);
      setTabToShow(tab);
      log(`Timeout ends: ${tab}`);
      log("-----");
    }, 0);

    log(`Switched to tab ${tab}`);
  };

  return (
    <div>
      <Button onClick={() => handleClick("one")} disabled={tabToShow === "one"}>
        Show tab one
      </Button>
      <Button onClick={() => handleClick("two")} disabled={tabToShow === "two"}>
        Show expensive tab
      </Button>
      <Button
        onClick={() => handleClick("three")}
        disabled={tabToShow === "three"}
      >
        Show tab three
      </Button>
      <div>
        {tabToShow === "one" && <p>Tab one</p>}
        {tabToShow === "two" && <Posts />}
        {tabToShow === "three" && <p>Tab three</p>}
      </div>
    </div>
  );
};
