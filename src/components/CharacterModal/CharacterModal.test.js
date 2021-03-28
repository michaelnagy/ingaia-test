import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterModal from "./CharacterModal";

const renderComponent = () => {
  return render(<CharacterModal />);
};

describe("CharacterModal Component", () => {
  it("renders character information", () => {
    renderComponent();
    const infoBlocks = screen.getAllByTestId("info-block");
    expect(infoBlocks).toHaveLength(3);
  });
  it("renders image block", () => {
    renderComponent();
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain("character/avatar");
  });
});
