import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search, { SearchButton } from "./Search";
import { SearchContextProvider } from "../../context";

function renderSearch() {
  return render(
    <SearchContextProvider>
      <Search />
    </SearchContextProvider>
  );
}

describe("Search Component", () => {
  it("renders the input", () => {
    renderSearch();
    const input = screen.getByPlaceholderText("Search characters");
    expect(input).toBeInTheDocument();
  });
  it("simulates typing some value in the input", () => {
    renderSearch();
    const input = screen.getByPlaceholderText("Search characters");
    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });
  describe("SearchButton Component", () => {
    it("tests button click", () => {
      const mockCallback = jest.fn();
      render(<SearchButton onClick={mockCallback} />);
      const button = screen.getByText("Search");
      userEvent.click(button);
      expect(mockCallback).toHaveBeenCalledTimes(1);
    });
  });
});
