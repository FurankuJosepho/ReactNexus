import "../CSS/header.css";
import { useState } from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from "react-router-dom";
function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openLinks, setOpenLinks] = useState(false);

  return (
    <header className="navbar">
      <button className="hamburger-btn" onClick={() => setOpenLinks(!openLinks)}>
        <ReorderIcon/>
      </button>
      <div className="logo" id={openLinks ? "open" : "close"}>
        <Link to='/' className="logo Nexus">NEXUS</Link>
        <div className="hiddenLinks">
        <Link to='/'>Shop</Link>
        <Link to='/login'>Login</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/live'>Live</Link>
      </div>
      </div>
      <div className="links">
        <Link to='/'>Shop</Link>
        <Link to='/login'>Login</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/live'>Live</Link>
      </div>
    </header>
  );
}

export default header;
