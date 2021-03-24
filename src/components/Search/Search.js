import React from "react";
import { SearchWrapper, Input, Button } from "./styles";
import { SearchContext } from "../../context";

function SearchInput() {
  const [search, setSearch] = React.useContext(SearchContext);
  console.log("------------------------------------");
  console.log(search, setSearch);
  console.log("------------------------------------");
  return (
    <Input
      placeholder="Search characters"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

function SearchButton(props) {
  return (
    <Button type="button" onClick={() => null}>
      Search
    </Button>
  );
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
