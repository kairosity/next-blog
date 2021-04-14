import React from "react";
import SkipToMain from "../SkipToMain";
import {
  getByRole,
  getByText,
  render,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("skip to main link is present", () => {
  const { getByRole } = render(<SkipToMain />);
  const skipToMainLink = getByRole("link", { name: "Skip to Main" });

  expect(skipToMainLink).toBeInTheDocument();
});

test("skip to main link not visible", () => {
  const { getByRole } = render(<SkipToMain />);
  const skipToMainLink = getByRole("link", { name: "Skip to Main" });

  expect(skipToMainLink).toHaveStyle({ color: "#0d6efd" });
});
