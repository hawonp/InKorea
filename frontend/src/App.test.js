import { render, screen } from "@testing-library/react";
import Guide from "./pages/Guide/Guide";

test("renders learn react link", () => {
  render(<Guide />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
