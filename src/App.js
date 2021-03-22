import logo from "./assets/logo.png";
import { Container, Header } from "./globalStyles";
import Search from "./components/Search/Search";

function App() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
      <Search />
    </Container>
  );
}

export default App;
