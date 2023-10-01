import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Login from "./pages/login";
import Live from "./pages/live";
import Store from "./pages/store";
import Cart from "./pages/cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopContextProvide from "./context/shopContext";

function App() {
  return (
    <>
      <ShopContextProvide>
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/store" exact element={<Store />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/live" exact element={<Live />} />
          </Routes>
        </Router>
        <Footer />
      </ShopContextProvide>
    </>
  );
}

export default App;
