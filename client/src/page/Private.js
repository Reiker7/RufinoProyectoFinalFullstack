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
import Login from "./Login";
import UserConsumer from "../hooks/useDatos";
import "../style/private.css";
import BasicButtonsChange from "../common/BasicButtonsChange";




function Private(props) {
  const [input, setInput] = useState("");
  const [datos, setDatos] = useState(null);
  const [datosGame, setDatosGame] = useState(null);
  const [nickChange, setNickChange] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userLogged, setUserlogged] = useState(null);
  const [user, setUser] = UserConsumer();

  const apiEndpoint =
  `${process.env.REACT_APP_SERVER}/api/favorites/get/` + user.nickname;

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem("loggedUser");

    loggedUserJson !== null
      ? (setLoading(false),
        getUser(setDatos, JSON.parse(loggedUserJson).nickname),
        getLoadGames(),
        setUserlogged(JSON.parse(loggedUserJson).nickname))
      : console.log("sin datos");
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


  return (
    <>
      {loading ? (
        <div className="main">
          {datos === null ? (
            ""
          ) : (
            <div className="main2">
              <div class="box">
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    placeholder="Cambiar"
                    onChange={(event) => setInput(event.target.value)}
                  ></input>
                  <BasicButtonsChange input={input} setNickChange={setNickChange} setLoading={setLoading}/>  

                </div><div class="push"></div>
                <div>
                
                  
                      <Link to={"/games"} className="btnP">
                    Partidas
                  </Link>
                </div>
                <div class="push"></div>
                <div>
                 
                  <strong>
                    {user.nickgame} | Level: {datos.summonerLevel}
                  </strong>&nbsp;&nbsp;&nbsp;
                </div>
                <div>
                  <Avatar
                    alt="imagen perfil"
                    src={`${imguserapi}${datos.profileIconId}.png`}
                  />
                </div>
              </div>

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
                    nickname={user.nickname}
                    userNickId={user.nickgame}
                    datosGame={datosGame}
                    setDatosGame={setDatosGame}
                  />
                ))}
              </Grid>
            </div>
          )}
        </div>
      ) : (
        <div className="container-div"><img src={Load} className="center" ></img></div>
      )}
    </>
  );
}

export default Private;
