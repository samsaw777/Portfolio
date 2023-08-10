/*

The component should render the test hello and if name is passed into the component
It shoukf render hello abd the name

*/

import { render, screen } from "@testing-library/react";
import InputTest from "./inputfield";

// Describe is used to group the tests in jest.
describe("InputTest", () => {
  test.only("Teting the inputtest", () => {
    render(<InputTest />);

    const element = screen.getByText(/hello/i);
    expect(element).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test.only("Testing the inputtest with name", () => {
    render(<InputTest name="sameep" />);

    const element = screen.getByText(/hello sameep/i);
    expect(element).toBeInTheDocument();
  });
});
