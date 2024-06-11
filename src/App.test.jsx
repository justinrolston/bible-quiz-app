import { describe, it, expect } from "vitest";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("App render", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
