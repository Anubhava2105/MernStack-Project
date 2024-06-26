import "./nav.css";
import Logo from "../../assets/temp_logo.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { UseAuthContext } from "../../hooks/useAuthContext";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

const Nav = () => {
  const { logout } = useLogout();
  const { user } = UseAuthContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    logout();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="Navbar">
        <h1 className="heading">
          <img className="logo_img" src={Logo} alt=" " />PlayForge
        </h1>
        <div className="menu_icon" onClick={toggleMenu}>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>
        <div className={`nav_menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav_links">
            {user && (
              <>
                <li>
                  <NavLink to="/games">Games</NavLink>
                </li>
                <div className="logout">
                  <span>{user.email}</span>
                  <button onClick={handleClick}>
                    <NavLink to="/">Logout</NavLink>
                  </button>
                </div>
              </>
            )}
            {!user && (
              <>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
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
