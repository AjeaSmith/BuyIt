import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import Shipping from "./screens/Shipping";
import Payment from "./screens/Payment";
import PlaceOrder from "./screens/PlaceOrder";
import OrderDetails from "./screens/OrderDetail";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/profile" component={Profile} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={Payment} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/order/:id" component={OrderDetails} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
