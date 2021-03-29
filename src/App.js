import React from "react";
import logo from "./assets/logo.png";
import { Container, Header } from "./globalStyles";
import Search from "./components/Search/Search";
import CharactersList from "./components/CharactersList/CharactersList";
import CharacterModal from "./components/CharacterModal/CharacterModal";
import { AppContextProvider } from "./context";
import { QueryProvider } from "./queries";

function App() {
  return (
    <QueryProvider>
      <AppContextProvider>
        <Container>
          <Header>
            <img src={logo} alt="logo" />
          </Header>
          <Search />
          <CharactersList />
          <CharacterModal />
        </Container>
      </AppContextProvider>
    </QueryProvider>
  );
}

export default App;
