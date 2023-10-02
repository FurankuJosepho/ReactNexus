import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Login from "./pages/login";
import Live from "./pages/live";
import Store from "./pages/store";
import Profile from "./pages/profile";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./context/shopContext";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/store" exact element={<Store />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/cart" exact element={<Profile />} />
            <Route path="/live" exact element={<Live />} />
          </Routes>
        </Router>
        <Footer />
      </ShopContextProvider>
    </>
  );
}

export default App;
