import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Home from "./screens/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <h2>Latest Products</h2>
          <Home />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
