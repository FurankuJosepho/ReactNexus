import "../CSS/header.css";
import { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-router-dom";
function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openLinks, setOpenLinks] = useState(false);

  return (
    <header className="navbar">
      <button
        className="hamburger-btn"
        onClick={() => setOpenLinks(!openLinks)}
      >
        <ReorderIcon />
      </button>
      <nav className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/" className="logo">
          <h2>NEXUS</h2>
        </Link>
        <div className="hiddenLinks">
          <Link to="/store">SHOP</Link>
          <Link to="/login" id="login">
            LOGIN
          </Link>
          <Link to="/cart">CART</Link>
          <Link to="/live">LIVE</Link>
        </div>
        </div>
        <ul className="links">
          <span className="close-btn material-symbols-rounded">close</span>
          <Link to="/store">SHOP</Link>
          <Link to="/login" id="login">
            LOGIN
          </Link>
          <Link to="/cart">CART</Link>
          <Link to="/live">LIVE</Link>
          <input type="text" placeholder="Search you Games here.." />
        </ul>
      </nav>
    </header>
  );
}

export default header;
