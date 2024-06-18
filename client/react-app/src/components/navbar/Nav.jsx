import "./nav.css";
import Logo from "../../assets/temp_logo.svg";
import { NavLink, Outlet } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
const Nav = () => {
  return (
    <>
        <div className="Navbar">
            <h1 className="heading">
                <img className="logo_img" src={Logo} alt=" "></img>PlayForge
            </h1>
            <div className="nav_menu">
                <ul className="nav_links">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard">Players</NavLink>
                    </li>
                    <li>
                        <NavLink to="/games">Games</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <main>
            <Outlet />
        </main>
    </>
  );
};
export default Nav;
