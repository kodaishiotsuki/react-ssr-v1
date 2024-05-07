import React from "react";
import { hydrateRoot } from "react-dom/client";
import CountUp from "./countup";

const container = document.querySelector("#react-app-target");
if (container) {
  hydrateRoot(container, <CountUp />);
} else {
  console.error("Failed to find the root container.");
}
