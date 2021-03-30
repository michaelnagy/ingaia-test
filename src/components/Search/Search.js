import React from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { SearchWrapper, Input, Button } from "./styles";
import { SearchContext } from "../../context";

export function SearchButton(props) {
  const button = React.useRef(null);
  useHotkeys("enter", () => {
    if (button === document.activeElement) {
      props.setSearch(props.inputValue);
    }
  });

  return (
    <Button
      ref={button}
      onClick={() => props.setSearch(props.inputValue)}
      type="button"
      {...props}
    >
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
      <SearchWrapper role="main">
        <SearchInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SearchButton setSearch={setSearch} inputValue={inputValue} />
      </SearchWrapper>
    </>
  );
}

export default Search;
