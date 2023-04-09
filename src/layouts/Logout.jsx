import UserConsumer from "../hooks/useDatos";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const [user, setUser] = UserConsumer();
  const navigate = useNavigate();

  const clearLocal = () => {
    window.localStorage.removeItem("loggedUser");
    setUser({ ...user, loggin: false });
    navigate("/login");
  };
  return (
    <a onClick={() => clearLocal()} className="btnLogout">
      Logout
    </a>
  );
};
