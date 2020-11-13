import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import FormContainer from "./components/FormContainer";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart/:id?" component={Cart} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
