import { useState, useContext, createContext } from "react";

const UserContext = createContext();

UserContext.displayName = "UserContext";

export function DatosProvider({ children }) {
  const [user, setUser] = useState({
    loggin: false,
    nickname: "",
    nickgame: "",
    puuid: "",
    token: "",
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}

export default function UserConsumer() {
  return useContext(UserContext);
}
