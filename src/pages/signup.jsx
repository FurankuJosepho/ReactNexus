import "../CSS/login.css";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <section className="forms">
      <div className="form-content">
        <div className="login-form">
          <div className="title">Sign up</div>
          <form action="#">
            <div className="input-boxes">
              <div className="input-box">
              <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="button input-box">
                <input type="submit" value="Sumbit" />
              </div>
              <div className="text sign-up-text">
                Already have an account? <Link to="/login">Login now!</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
