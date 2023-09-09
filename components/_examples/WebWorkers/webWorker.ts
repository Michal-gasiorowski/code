import api from "./api";

self.onmessage = function (e) {
  console.log("Webworker: Message received from main script");
  console.log("Webworker: Posting message back to main script");
  self.postMessage(
    `Webworker: sum of all array items is ${api.addArrayItems(e.data)}`
  );
  console.log("Webworker: log after post message");
};

export {};
