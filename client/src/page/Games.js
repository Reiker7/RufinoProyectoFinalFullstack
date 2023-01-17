import React, { useState, useEffect } from "react";
import CardGame from "../common/CardGame.js";
import axios from "axios";
import { Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Load from "../assets/animated/load.gif";
import { Link } from "react-router-dom";




const server = "euw1";
const server2 = "europe";
function Games() {
  const [league, setLeague] = useState(null);
  const [gamesId, setGamesId] = useState(0);
  const [gamesIdFin, setGamesIdFin] = useState(4);
  const [sumaId, setSumaId] = useState(1);
 
  
  const nickname = JSON.parse(localStorage.getItem("loggedUser")).nickname
  const nickgame = JSON.parse(localStorage.getItem("loggedUser")).userNickGame
  
  useEffect(() => {
    getAllChamp();
  }, []);

  const getAllChamp = async () => {
    const response = await axios
      .get(
        `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickgame}?api_key=${process.env.REACT_APP_LOL}`
      )
      .catch((err) => console.log("Error:", err));
    console.log(getLeague(response.data.puuid));
  };
  const getLeague = async (result) => {
    const response = await axios
      .get(
        `https://${server2}.api.riotgames.com/lol/match/v5/matches/by-puuid/${result}/ids?start=0&count=20&api_key=${process.env.REACT_APP_LOL}`
      )
      .catch((err) => console.log("Error:", err));

    getGamesID(response.data.slice(gamesId, gamesIdFin));
  };
  const getGamesID = async (result) => {
    const champArr = [];

    const response = await Promise.all(
      result.map((res) => {
        return axios
          .get(
            `https://${server2}.api.riotgames.com/lol/match/v5/matches/${res}?api_key=${process.env.REACT_APP_LOL}`
          )
          .then((result) => {
            champArr.push(result.data.info);
          })
          .catch((err) => console.log("Error:", err));
      })
    );
    setLeague(champArr);
  };

  const handleChange = (event, value) => {
    const valor = 4;
    setGamesId(valor * (value - 1));
    setGamesIdFin(valor * value);
    getAllChamp();
  };
  // console.log(league)
  return (
    <>
      {league !== null ? (
        <div className="main2">
          {" "}
          <Pagination
            count={5}
            onChange={handleChange}
            color="primary"
            style={{ backgroundColor: "var(--color-white)" }}
          />                <Link to={"/private"} className="btnP">
          Volver
        </Link>
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
            {league.map((league1) => (
              <CardGame key={league1.gameCreation} datos={league1} nickname={nickname} userNickId={nickgame}/>
            ))}
          </Grid>
        </div>
      ) : (
        <div className="container-div"><img src={Load} className="center" ></img></div>
      )}
    </>
  );
}

export default Games;
