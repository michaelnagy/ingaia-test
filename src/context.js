import React from "react";

export const SearchContext = React.createContext(["", () => {}]);
export const CharacterContext = React.createContext([{}, () => {}]);

export const AppContextProvider = ({ children }) => {
  const [search, setSearch] = React.useState("");
  const [character, setCharacter] = React.useState({});
  return (
    <SearchContext.Provider value={[search, setSearch]}>
      <CharacterContext.Provider value={[character, setCharacter]}>
        {children}
      </CharacterContext.Provider>
    </SearchContext.Provider>
  );
};
