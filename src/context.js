import React from "react";

export const SearchContext = React.createContext(["", () => {}]);

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = React.useState("");
  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {children}
    </SearchContext.Provider>
  );
};
