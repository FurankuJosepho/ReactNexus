/* eslint-disable no-unused-vars */
import "../CSS/login.css";
import { Link, redirect } from "react-router-dom";
import { useState, useEffect } from "react";
function Login() {
  // eslint-disable-next-line no-unused-vars
  const [storedName, setStoredName] = useState("");
  const [storedEmail, setStoredEmail] = useState("");
  const [storedPassword, setStoredPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    const nameFromLocalStorage = localStorage.getItem("Name");
    const emailFromLocalStorage = localStorage.getItem("Email");
    const passwordFromLocalStorage = localStorage.getItem("Password");

    if (nameFromLocalStorage) {
      setStoredName(nameFromLocalStorage);
    }

    if (emailFromLocalStorage) {
      setStoredEmail(emailFromLocalStorage);
    }

    if (passwordFromLocalStorage) {
      setStoredPassword(passwordFromLocalStorage);
    }
  }, []);

  const handleLogin = () => {
    // Compare input credentials with stored credentials
    if ( inputEmail === storedEmail && inputPassword === storedPassword ) {
      return  redirect ('/cart')
    } else {
      alert("No account exists with the provided credentials.");
    }
  };
  const undermaintenance = () => {
    alert("This page is undermaintenance")
  }
  return (
    <section className="forms">
      <div className="form-content">
        <div className="login-form">
          <div className="title">Login</div>
          <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  placeholder="Enter your email"
                  onChange={(e) => setInputEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setInputPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text">
                <a href="#" id="password">
                  Forgot password?
                </a>
              </div>
              <div className="button input-box">
                <input type="submit" value="Sumbit" onClick={undermaintenance} />
                {loginError && <p>Login failed. Check your credentials.</p>}
              </div>
              <div className="text sign-up-text">
                Dont have an account? <Link to="/signup">Sign up now!</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
