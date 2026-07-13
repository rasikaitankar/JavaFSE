import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

it("renders home component on landing", () => {
  render(
    <Home />
  );
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});
