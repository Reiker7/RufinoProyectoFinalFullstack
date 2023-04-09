import { Navigate } from "react-router-dom"
import UserConsumer from "../hooks/useDatos";


const ProtectedRoute = ({children}) => {
const [user] = UserConsumer();
console.log(user.loggin)

let UserAunth = ''
const getUserCurrent = () => {
  UserAunth = JSON.parse(localStorage.getItem('loggedUser'))
  if (UserAunth && UserAunth.token) {return true} else {return false}
}


  return (
    getUserCurrent() === true ? children : <Navigate to="/login" replace />
  );
}

export default ProtectedRoute
