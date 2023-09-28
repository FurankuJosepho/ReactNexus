import "./CSS/header.css";
function header() {
  return (
    <header>
      <nav className="navbar">
        <span className="hamburger-btn material-symbols-rounded">menu</span>
        <a href="index.html" className="logo">
          <h2  id="active">NEXUS</h2>
        </a>
        <ul className="links">
          <span className="close-btn material-symbols-rounded">close</span>
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="login.html">
              LOGIN
            </a>
          </li>
          <li>
            <a href="#">CART</a>
          </li>
          <li>
            <a href="#">Lives</a>
          </li>
          <input type="text" placeholder="Search you Games here.." />
        </ul>
      </nav>
    </header>
  );
}

export default header;
