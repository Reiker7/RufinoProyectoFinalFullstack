import * as React from "react";
import UserConsumer from "../hooks/useDatos";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BasicButtonsChange({ input, setNickChange, setLoading }) {
  const navigate = useNavigate();

  const [user, setUser] = UserConsumer();
  const nickChange = user.nickgame;

  const apiEndpointFav =
    `${process.env.REACT_APP_SERVER}/api/favorites/put/` + nickChange;
  const apiEndpointUser =
    `${process.env.REACT_APP_SERVER}/api/favorites/put/` + nickChange;

  const handleChange = async () => {
    let usuario = JSON.parse(localStorage.getItem("loggedUser"));
    usuario.userNickGame = input;
    localStorage.setItem("loggedUser", JSON.stringify(usuario));
    await setUser({
      ...user,
      nickgame: input,
    });
    const cambio = { nickgame: input };

    try {
      const getclient = localStorage.getItem("loggedUser");

      const token = JSON.parse(getclient).token;

      const optionsWithToken = {
        headers: {
          "x-auth-token": token,
        },
      };
      await axios.put(apiEndpointFav, cambio, optionsWithToken);
    } catch (err) {
      console.log(err);
    }

    try {
      const getclient = localStorage.getItem("loggedUser");

      const token = JSON.parse(getclient).token;

      const optionsWithToken = {
        headers: {
          "x-auth-token": token,
        },
      };
      await axios.put(apiEndpointUser, cambio, optionsWithToken);
    } catch (err) {
      console.log(err);
    }

    navigate("/");
    setTimeout(function () {
      navigate("/private");
    }, 50);
  };
  return (
    <>
      <button onClick={handleChange}>Cambiar nick</button>
    </>
  );
}

export default BasicButtonsChange;
