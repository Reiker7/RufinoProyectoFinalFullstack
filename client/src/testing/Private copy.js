import React, { useState, useEffect } from "react";
import { imguserapi } from "../config/Lolapi";
import { getUser } from "../functions/functions";
import { Link } from "react-router-dom";
import CardGameLoad from "../common/CardGameLoad.js";
import axios from "axios";
import { Grid } from "@mui/material";
import Load from "../assets/animated/load.gif";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const apiEndpoint = "http://localhost:3000/api/favorite/get/Agurin";

function Private(props) {
  const [input, setInput] = useState("");
  const [datos, setDatos] = useState(null);
  const [datosGame, setDatosGame] = useState(null);
  const [nickChange, setNickChange] = useState(null);
  const [loading, setLoading] = useState(false);

  const nickname = "Biofrost";
  const userNickId = "Biofrost";
  const apiEndpoint = "http://localhost:3000/api/favorites/get/" + nickname;

  useEffect(() => {
    setLoading(false);
    getUser(setDatos, nickname);
    getLoadGames();
  }, []);

  const games = async () => {
    const response = await axios
      .get(
        `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${process.env.REACT_APP_LOL}`
      )
      .catch((err) => console.log("Error:", err));
  };

  const getLoadGames = async () => {
    try {
      const { data } = await axios.get(apiEndpoint);
      setDatosGame(data);
      setTimeout(() => setLoading(true), 1000);
    } catch (response) {
      ("error al recuperar games");
    }
  };

  const handleChange = () => {
    setNickChange(input);
    alert("futuro - cambiando el nick");
  };

  return (
    <>
      {loading ? (
        <div className="main">
          {datos === null ? (
            ""
          ) : (
            <div className="main2">
              <input
                placeholder="Cambiar"
                onChange={(event) => setInput(event.target.value)}
              ></input>
              <button onClick={handleChange}>Cambiar nick</button>
              <Stack direction="row" spacing={2} justifyContent="center">
                {" "}
                <Link to={"/games"} className="btnR">
                  Partidas
                </Link>
                &nbsp;&nbsp;
                <strong>
                  {datos.name} | Level: {datos.summonerLevel}
                </strong>
                <Avatar
                  alt="imagen perfil"
                  src={`${imguserapi}${datos.profileIconId}.png`}
                />
              </Stack>

              {/* <img
                alt="Icono de perfil"
                style={{ width: 100 }}
                src={`${imguserapi}${datos.profileIconId}.png`}
              ></img>{" "} */}
              <Grid
                container
                item
                xs={12}
                align="center"
                margin={1}
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                {datosGame.map((game) => (
                  <CardGameLoad
                    key={game.gameCreation}
                    datos={game}
                    nickname={nickname}
                    userNickId={userNickId}
                    datosGame={datosGame}
                    setDatosGame={setDatosGame}
                  />
                ))}
              </Grid>
            </div>
          )}
        </div>
      ) : (
        <img src={Load}></img>
      )}
    </>
  );
}

export default Private;
