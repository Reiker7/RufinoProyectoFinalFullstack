import "../styles/header.css";
import miniLogo from "../assets/images/miniLogo.png";
import miniText from "../assets/images/logoText.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserConsumer from "../hooks/useDatos";
import { Logout } from "./Logout";

const Header = () => {
  const [active, setActive] = useState(false);
  const [user, setUser] = UserConsumer();

  return (
    <header className="header">
      <div className="logo" id="logo">
        <img src={miniLogo} alt="logo" />
        <img src={miniText} alt="logo" />
      </div>

      <i
        className="bx bx-menu"
        id="menu-icon"
        onClick={() => setActive(true)}
      ></i>

      <nav className={active ? "navbar active" : "navbar"} id="navbar">
        <i
          className="bx bx-x"
          id="nav-close"
          onClick={() => setActive(false)}
        ></i>

        <Link to={"/"} className="btnR">
          Home
        </Link>

        <Link to={"/champions"} className="btnR">
          Campeones
        </Link>

        <Link to={"/free"} className="btnR">
          Gratis
        </Link>

        <a href="#contacto" className="btnR">
          Contacto
        </a>

        {user.loggin ? (
          ""
        ) : (
          <Link to={"/register"} className="btnR">
            Registro
          </Link>
        )}

        {user.loggin ? (
          <Link to={"/private"} className="btnR">
            Panel de control
          </Link>
        ) : (
          ""
        )}

        {user.loggin ? (
          <Logout />
        ) : (
          <Link to={"/login"} className="btnR">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
