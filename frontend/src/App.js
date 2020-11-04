import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Switch from "react-bootstrap/esm/Switch";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <h2>Latest Products</h2>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={Product} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
