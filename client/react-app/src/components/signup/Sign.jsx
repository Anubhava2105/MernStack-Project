import { useState } from "react";
import "./sign.css";
import Signup from "../../assets/register_illustration.png";
import { UseSignup } from "../../hooks/useSignup";
const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isPending } = UseSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <div className="center">
      <div className="signup_container">
        <div className="signup_form">
          <h1 className="signup_header">Sign up as Player</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="sign-text"
              onChange={(e) => setEmail(e.target.value)}
              name="userEmail"
              placeholder="Email"
              autoComplete="new-email"
            />
            <input
              type="password"
              className="sign-text"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
              autoComplete="new-pwd"
            />
            <button className="sign-btn" type="submit" disabled={isPending}>
              {isPending ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          {error && <div className="error">{error}</div>}
        </div>
        <div className="img_container">
          <img className="signup_img" src={Signup}></img>
        </div>
      </div>
    </div>
  );
};

export default Sign;
