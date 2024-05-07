import React from "react";
import { hydrateRoot } from "react-dom/client";
import CountUp from "./countup";

const container = document.getElementById("root");
if (container) {
  hydrateRoot(container, <CountUp />);
} else {
  console.error("Failed to find the root container.");
}
