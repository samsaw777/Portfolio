/*

The component should render the test hello and if name is passed into the component
It shoukf render hello abd the name

*/

import { render, screen } from "@testing-library/react";
import InputTest from "./inputfield";

test("Teting the inputtest", () => {
  render(<InputTest />);

  const element = screen.getByText(/hello/i);
  expect(element).toBeInTheDocument();
});

test("Testing the inputtest with name", () => {
  render(<InputTest name="sameep" />);

  const element = screen.getByText(/hello sameep/i);
  expect(element).toBeInTheDocument();
});
