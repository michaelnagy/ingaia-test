import React from "react";
import { SearchWrapper, Input, Button } from "./styles";
import { SearchContext } from "../../context";

export function SearchButton(props) {
  return (
    <Button type="button" {...props}>
      Search
    </Button>
  );
}

function SearchInput(props) {
  return <Input placeholder="Search characters" {...props} />;
}

function Search() {
  const [inputValue, setInputValue] = React.useState("");
  const [, setSearch] = React.useContext(SearchContext);
  return (
    <>
      <SearchWrapper>
        <SearchInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SearchButton onClick={() => setSearch(inputValue)} />
      </SearchWrapper>
    </>
  );
}

export default Search;
