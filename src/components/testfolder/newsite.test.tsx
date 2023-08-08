import { render, screen } from "@testing-library/react";
import NewSite from "./newsite";

test("testing the render of the base site", () => {
  render(<NewSite />);

  const element = screen.getByText("Hello");
  expect(element).toBeInTheDocument();
});
