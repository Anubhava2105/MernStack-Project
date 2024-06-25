import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin.jsx";
import Sign from "../signup/Sign.jsx";
import Image1 from "../../assets/login_illustration.png";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <div className="center">
      <div className="login_container">
        <div className="img_container">
          <img className="login_img" src={Image1}></img>
        </div>
        <div className="login_form">
          <h1 className="login_header">LOGIN</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="text"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
              autoComplete="email"
            />
            <input
              className="text"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="userpwd"
            />
            <div className="options-container">
              <div className="sub_options_container">
                <input className="check" type="checkbox" name="signed" />
                <h4>Keep me signed in</h4>
              </div>
              <div className="new-sign">
                <NavLink to="/signup">New User? Signup</NavLink>
              </div>
            </div>
            <button
              className="btn"
              type="submit"
              disabled={isPending}
            >
              <NavLink to="/games"> </NavLink>Login
            </button>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
