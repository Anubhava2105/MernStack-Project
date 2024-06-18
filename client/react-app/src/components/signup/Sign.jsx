import React, { Component } from "react";
import "./sign.css";
import Signup from '../../assets/register_illustration.png';
class Sign extends Component {
  render() {
    return (
      <div className="center">
        <div className="signup_container">
          <div className="signup_form">
            <h1 className="signup_header">Sign up as Player</h1>
            <form className="form">
              <input
                type="text"
                className="sign-text"
                name="username"
                placeholder="Name"
                autoComplete="new-player-name"
              />
              <input
                type="email"
                className="sign-text"
                name="userEmail"
                placeholder="Email"
                autoComplete="new-player-email"
              />
              <input
                type="password"
                className="sign-text"
                name="password"
                placeholder="Password"
                autoComplete="new-player-pwd"
              />
              <input
                type="password"
                className="sign-text"
                name="repeat-password"
                placeholder="Confirm Password"
                autoComplete="confirm-player-pwd"
              />
              <input
                type="text"
                className="sign-text"
                name="Age"
                placeholder="Age"
                autoComplete="new-player-age"
              />
              <div className="radio_options">
                <label>Gender: </label>
              <input
                type="radio"
                className="radio"
                name="gender"
                id="male"
                value="male"
              />
              <label for="male">Male</label>
              <input
                type="radio"
                className="radio"
                name="gender"
                id="female"
                value="female"
              />
              <label for="female">Female</label>
              <input
                type="radio"
                className="radio"
                name="gender"
                id="other"
                value="other"
              />
              <label for="other">Other</label>
              </div>
              <input className="sign-btn" type="submit" />  
            </form>
          </div>
          <div className="img_container">
            <img className="signup_img" src={Signup}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Sign;
