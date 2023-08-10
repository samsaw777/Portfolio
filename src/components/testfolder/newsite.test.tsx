import { render, screen } from "@testing-library/react";
import NewSite from "./newsite";

test.only("testing the render of the base site", () => {
  render(<NewSite />);

  const element = screen.getByText(/hello/i);
  expect(element).toBeInTheDocument();
});

// Documentation
/*

-> the test function accepts three parameters:
    1. the name of the test.
    2. callback function that call the test
    3. timeout -> this is optional parameter

-> test and expect are global functions that are provided by jest


*/
