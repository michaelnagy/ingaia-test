import React from "react";
import { SearchWrapper, Input } from "./styles";

function SearchInput(props) {
  return <Input />;
}

function SearchButton(props) {
  return <button type="button">Search</button>;
}

function Search() {
  return (
    <>
      <SearchWrapper>
        <SearchInput />
        <SearchButton />
      </SearchWrapper>
    </>
  );
}

export default Search;
