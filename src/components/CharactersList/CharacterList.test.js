import React from "react";
import { render, screen } from "@testing-library/react";
import CharactersList from "./CharactersList";
import { useCharacters } from "../../queries";
import { SearchContext } from "../../context";

const mockData = {
  data: { results: [{ name: "Morty", image: "" }] },
};

const renderWithContext = () => {
  return render(
    <SearchContext.Provider value={["morty"]}>
      <CharactersList />
    </SearchContext.Provider>
  );
};

jest.mock("../../queries", () => ({
  useCharacters: jest.fn(),
}));

describe("CharacterList Component", () => {
  it("renders loading state", () => {
    useCharacters.mockImplementation(() => ({ isFetching: true }));
    renderWithContext();
    const linkElement = screen.getByText("Loading");
    expect(linkElement).toBeInTheDocument();
  });
  it("renders error state", () => {
    useCharacters.mockImplementation(() => ({
      error: { message: "Erro" },
      status: "error",
    }));
    renderWithContext();
    const linkElement = screen.getByText("Erro");
    expect(linkElement).toBeInTheDocument();
  });
  it("renders correctly", () => {
    useCharacters.mockImplementation(() => mockData);
    renderWithContext();
    const linkElement = screen.getByText("Morty");
    expect(linkElement).toBeInTheDocument();
  });
});
