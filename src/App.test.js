import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders logo", () => {
    render(<App />);
    const linkElement = screen.getByAltText(/logo/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("renders the search input", () => {
    render(<App />);
    const linkElement = screen.getByText(/Search/i);
    expect(linkElement).toBeInTheDocument();
  });
});
