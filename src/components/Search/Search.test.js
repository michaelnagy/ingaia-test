import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";
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
  it("simulate typing some value in the input", () => {
    renderSearch();
    const input = screen.getByPlaceholderText("Search characters");
    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });
});
