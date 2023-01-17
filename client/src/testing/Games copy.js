import React, { useState, useEffect } from "react";
import CardGame from "../common/CardGame.js";
import axios from "axios";
import { Grid } from "@mui/material";
import Load from "../assets/animated/load.gif";

const nick = "Biofrost";
const server = "euw1";
const server2 = "europe";
function Games() {
  const [league, setLeague] = useState(null);
  const [gamesId, setGamesId] = useState(null);
  const [sumaId, setSumaId] = useState(1);

  useEffect(() => {
    getAllChamp();
  }, []);

  const getAllChamp = async () => {
    const response = await axios
      .get(
        `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nick}?api_key=${process.env.REACT_APP_LOL}`
      )
      .catch((err) => console.log("Error:", err));
    getLeague(response.data.puuid);
  };
  const getLeague = async (result) => {
    const response = await axios
      .get(
        `https://${server2}.api.riotgames.com/lol/match/v5/matches/by-puuid/${result}/ids?start=0&count=20&api_key=${process.env.REACT_APP_LOL}`
      )
      .catch((err) => console.log("Error:", err));
    getGamesID(response.data[0]);
    setGamesId(response.data);
  };
  const getGamesID = async (result) => {
    const response = await axios
      .get(
        `https://${server2}.api.riotgames.com/lol/match/v5/matches/${result}?api_key=${process.env.REACT_APP_LOL}`
      )
      .catch((err) => console.log("Error:", err));
    setLeague(response.data.info);
  };

  const getNext = () => {
    if (+sumaId >= 20) {
      return;
    }
    setSumaId(sumaId + 1);
    console.log(sumaId);
    getGamesID(gamesId[sumaId]);
  };
  const getBack = () => {
    if (+sumaId <= 0) {
      return;
    }
    setSumaId(sumaId - 1);
    console.log(sumaId);
    getGamesID(gamesId[sumaId]);
  };

  return (
    <>
      {league !== null ? (
        <div className="main">
          {" "}
          <button onClick={getBack}>anterior</button>
          <button onClick={getNext}>siguiente</button>
          <Grid item xs={4} align="center" margin={45}>
            <CardGame datos={league} />
          </Grid>
        </div>
      ) : (
        <img src={Load}></img>
      )}
    </>
  );
}

export default Games;
