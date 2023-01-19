import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UserConsumer from "../hooks/useDatos";
import axios from "axios";

const apiEndpointDelete = `${process.env.REACT_APP_SERVER}/api/favorites/delete/`;
console.log(apiEndpointDelete)
export default function BasicButtonsDelete({
  datosFav,
  nickname,
  userNickId,
  setDatosGame,
  datosGame,
}) {
  const [user, setUser] = UserConsumer();
  const nickChange = user.nickgame;

  const handleDeleteFav = async (
    datos,
    userNickId,
    nickname,
    setDatosGame,
    datosGame
  ) => {
    try {
      const getclient = localStorage.getItem("loggedUser");
      const token = JSON.parse(getclient).token;

      const optionsWithToken = {
        headers: {
          "x-auth-token": token,
        },
      };

      await axios.delete(apiEndpointDelete + datos.gameId, optionsWithToken);

      setDatosGame(datosGame.filter((dato) => dato.gameId !== datos.gameId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="outlined"
        onClick={() =>
          handleDeleteFav(
            datosFav,
            nickname,
            userNickId,
            setDatosGame,
            datosGame
          )
        }
      >
        Borrar
      </Button>
    </Stack>
  );
}
