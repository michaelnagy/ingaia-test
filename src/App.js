import logo from "./assets/logo.png";
import { Container, Header } from "./globalStyles";

function App() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
    </Container>
  );
}

export default App;
