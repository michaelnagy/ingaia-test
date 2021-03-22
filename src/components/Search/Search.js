import React from "react";
import { SearchWrapper, Input } from "./styles";

function SearchInput() {
  return <Input placeholder="Search characters" />;
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
