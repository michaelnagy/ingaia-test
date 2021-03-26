import React from "react";
import logo from "./assets/logo.png";
import { Container, Header } from "./globalStyles";
import Search from "./components/Search/Search";
import CharactersList from "./components/CharactersList/CharactersList";
import CharacterModal from "./components/CharacterModal/CharacterModal";
import { SearchContextProvider } from "./context";
import { QueryProvider } from "./queries";

function App() {
  return (
    <QueryProvider>
      <SearchContextProvider>
        <Container>
          <Header>
            <img src={logo} alt="logo" />
          </Header>
          <Search />
          <CharactersList />
          <CharacterModal />
        </Container>
      </SearchContextProvider>
    </QueryProvider>
  );
}

export default App;
