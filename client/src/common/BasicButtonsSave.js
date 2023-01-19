import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UserConsumer from "../hooks/useDatos";
import axios from "axios";

const apiEndpoint = `${process.env.REACT_APP_SERVER}/api/favorites/create/`;

export default function BasicButtonsSave({
  datosFav,
  nickname,
  userNickId,
  setDatosGame,
  datosGame,
}) {
  const [user, setUser] = UserConsumer();
  const nickChange = user.nickgame;

  const handleSaveFav = async (datos, userNickId, nickname, setDatos) => {
    let newPost = {
      gameId: datos.gameId,
      userNickId,
      nickname,
      platformId: datos.platformId,
      gameMode: datos.gameMode,
      gameDuration: datos.gameDuration,
      participants: [],
    };

    datos.participants.map(
      (e, index) => (
        console.log(e.win),
        newPost.participants.push({
          summonerName: e.summonerName,
          championName: e.championName,
          summonerLevel: e.summonerLevel,
          totalDamageDealt: e.totalDamageDealt,
          goldEarned: e.goldEarned,
          win: e.win,
        })
      )
    );

    try {
      const getclient = localStorage.getItem("loggedUser");
      const token = JSON.parse(getclient).token;

      const optionsWithToken = {
        headers: {
          "x-auth-token": token,
        },
      };
      const { data } = await axios.post(apiEndpoint, newPost, optionsWithToken);
      console.log(data);
    } catch (response) {
      alert("Ya esta en favoritos"), console.log(response.response.data);
    }
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="outlined"
        onClick={() =>
          handleSaveFav(datosFav, nickname, userNickId, setDatosGame, datosGame)
        }
      >
        Guardar
      </Button>
    </Stack>
  );
}
