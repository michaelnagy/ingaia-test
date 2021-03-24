import React from "react";
import logo from "./assets/logo.png";
import { Container, Header } from "./globalStyles";
import Search from "./components/Search/Search";
import { SearchContextProvider } from "./context";

function App() {
  return (
    <SearchContextProvider>
      <Container>
        <Header>
          <img src={logo} alt="logo" />
        </Header>
        <Search />
      </Container>
    </SearchContextProvider>
  );
}

export default App;
