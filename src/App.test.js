import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders purchases title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Purchases/i);
  expect(titleElement).toBeInTheDocument();
});
