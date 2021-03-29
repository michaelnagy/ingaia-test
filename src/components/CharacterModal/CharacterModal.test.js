import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterModal from "./CharacterModal";
import { CharacterContext } from "../../context";

const mockData = {
  character: {
    name: "Morty",
    image: "",
    species: "test",
    gender: "test",
    status: "test",
    episode: [{ air_date: "30 May 2014" }, { air_date: "31 May 2014" }],
    origin: { name: "test" },
    location: { name: "test", residents: [0, 1] },
  },
};

const emptyMock = {};

const mockFunction = jest.fn();

const renderWithContext = (context) => {
  return render(
    <CharacterContext.Provider value={[context, mockFunction]}>
      <CharacterModal />
    </CharacterContext.Provider>
  );
};

describe("CharacterModal Component", () => {
  it("renders with empty context", () => {
    const { container } = renderWithContext(emptyMock);

    expect(container).toBeEmptyDOMElement();
  });
  it("renders character information", () => {
    renderWithContext(mockData);
    const infoBlocks = screen.getAllByTestId("info-block");
    expect(infoBlocks).toHaveLength(3);
  });
  it("renders image block", () => {
    renderWithContext(mockData);
    const imageBlock = screen.getByAltText(mockData.character.name);
    expect(imageBlock).toBeInTheDocument();
  });
});
