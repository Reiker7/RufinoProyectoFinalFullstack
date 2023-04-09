import { Navigate } from "react-router-dom";
import UserConsumer from "./useDatos";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = UserConsumer();
  console.log(user.loggin);

  return user.loggin == true ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
