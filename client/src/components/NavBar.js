import "../style/NavBar.css";
import lol1 from "../assets/images/lolLogoMini77.jpg";
import lol2 from "../assets/images/lolLogoBig.jpg";
import { Link } from "react-router-dom";
import UserConsumer from "../hooks/useDatos";
import { Logout } from "../common/Logout";

export default function Navbar() {
  const [user, setUser] = UserConsumer();
  return (
    <nav>
      <div>
        <img src={lol1} width="40"></img>
        <img src={lol2} width="73"></img>
      </div>
      <ul>
        <li>
          <Link to={"/"} className="btnR">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/champions"} className="btnR">
            Campeones
          </Link>
        </li>
        <li>
          <Link to={"/free"} className="btnR">
            Gratis
          </Link>
        </li>
        <li>
          <Link to={"/register"} className="btnR">
            Registro
          </Link>
        </li>
        <li>
          {" "}
          {user.loggin ? (
            <Link to={"/private"} className="btnR">
              Panel de control
            </Link>
          ) : (
            ""
          )}
        </li>
        <li>
          {" "}
          {user.loggin ? (
            <Logout />
          ) : (
            <Link to={"/login"} className="btnR">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
