import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading Component", () => {
  it("renders on the screen", () => {
    render(<Loading />);
    const loadingText = screen.getByText("Loading");
    expect(loadingText).toBeInTheDocument();
    const image = screen.getByAltText("Loading");
    expect(image).toBeInTheDocument();
  });
});
