import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CharactersList from "./CharactersList";
import { Pagination } from "./CharactersList";
import { useCharacters } from "../../queries";
import { SearchContext } from "../../context";

const mockData = {
  data: {
    results: [{ name: "Morty", image: "" }],
    info: { next: 2, prev: null, count: 40 },
  },
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
  describe("Pagination Component", () => {
    it("renders", () => {
      useCharacters.mockImplementation(() => mockData);
      renderWithContext();
      const pagination = screen.getByText("1");
      expect(pagination).toBeInTheDocument();
    });
    it("tests arrow click", () => {
      const mockCallback = jest.fn();
      render(
        <Pagination info={mockData.data.info} setPage={mockCallback} page={1} />
      );
      const arrowRight = screen.getByTestId("arrow-right");
      userEvent.click(arrowRight);
      expect(mockCallback).toHaveBeenCalledTimes(1);
    });
  });
});
