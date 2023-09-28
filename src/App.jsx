import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home  from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path="/" exact element={<Home/>}/>
    </Routes>
    </Router>


      <Footer />
    </>
  );
}

export default App;
