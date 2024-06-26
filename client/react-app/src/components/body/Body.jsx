import Home from "../../assets/home_img.png";
import React from "react";
import Insta from "../../assets/insta.svg";
import Tweet from "../../assets/twitter_black.svg";
import Street from "../../assets/street_fighter.svg";
import Elden from "../../assets/elden_ring.png";
import Hollow from "../../assets/hollow_knight.png";
import { useNavigate } from "react-router-dom";
// import Login from "../login/Login.jsx";
import "./body.css";

const Body = () => {
  const navigate=useNavigate();
  return (
    <>
      {/* Main Body(Hero) */}
      <div className="body_container">
        <div className="content_container">
          <h1 className="body_header">Latest Releases and Classics!</h1>
          <h2 className="body_subheader">From Pixels to Perfection.</h2>
          <hr></hr>
          <p className="body_text">
            Discover a curated selection of gaming masterpieces—both old and
            new. Immerse yourself in the nostalgia of classic titles that shaped
            the industry, or embark on epic adventures with the latest releases.
            Our library spans genres, platforms, and generations, ensuring
            there’s something for every player.
          </p>
          {/* <div className="btn_container">
            <button className="btn1" onClick={()=>navigate("/signup")}>Sign up</button>
            <button className="btn2" onClick={()=>{navigate("/login")}}>Login</button>
          </div> */}
        </div>
        <div className="img_container">
          <img className="body_img" src={Home} alt="home-image"></img>
        </div>
      </div>
      {/* More information about us */}
      <div className="more_information">
        <div className="classics">
          <div className="circle">
            <img src={Street}></img>
          </div>
          <p className="classics_info">
            Relive the magic of games that stood the test of time. Whether it’s
            rescuing princesses, collecting power-ups, or solving intricate
            puzzles, these classics continue to captivate.
          </p>
        </div>
        <div className="next_gen">
          <div className="circle">
            <img src={Elden}></img>
          </div>
          <p className="next_gen_info">
            Dive into cutting-edge graphics, immersive storytelling, and
            gameplay innovations. Our collection features the latest AAA titles
            that redefine what’s possible in gaming.
          </p>
        </div>
        <div className="hidden_gems">
          <div className="circle">
            <img src={Hollow}></img>
          </div>
          <p className="hidden_gems_info">
            Unearth hidden gems that might have slipped under your radar. These
            indie darlings offer unique experiences and fresh perspectives.
          </p>
        </div>
      </div>
      {/* more features about us */}
      <div className="stay_ahead">
        <h1 className="last_header">Stay ahead of the game</h1>
        <div className="text-container">
          <p className="body_text">
            Stay ahead in the gaming world with<strong> PlayForge</strong>.
            Whether you're a veteran or just starting out, our ever-expanding
            library offers exclusive previews, community challenges, and VIP
            rewards to keep you at the cutting edge. Dive into immersive digital
            realms, build alliances, and conquer virtual landscapes. Join a
            community of passionate gamers and elevate your experience with
            expert insights and strategic guides at <strong>PlayForge</strong>.
          </p>
        </div>
        <hr></hr>
      </div>
      {/* Footer  */}
      <div className="footer_container">
        <div className="tag">
          <h1>Stay connected with PLAYFORGE</h1>
        </div>
        <div className="follow-contact-container">
          <div className="bala2">
            <h1 className="tag">Follow us</h1>
            <div className="follow_us">
              <div className="insta_img">
                <a href="https://www.instagram.com/" target="_blank">
                  <img src={Insta}></img>
                </a>
              </div>
              <div className="twitter_img">
                <a href="https://www.twitter.com/" target="_blank">
                  <img src={Tweet}></img>
                </a>
              </div>
            </div>
          </div>
          <div className="bala">
            <h1 className="tag">Contact us</h1>
            <div className="contact_us">
              <a href="mailto:anubhava_t@outlook.com">Email</a>
              <a href="tel:+91 92897-07033">+91 92897 07033</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
