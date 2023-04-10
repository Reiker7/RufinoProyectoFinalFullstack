import { Link } from "react-router-dom";
import "../styles/games.css";
import { useState, useEffect } from "react";
import Load from "../assets/animated/loading.webp";
import CardGame from "../components/CardGame";
import Pagination from "../components/Pagination";

function Games() {
  const [myGames, setMyGames] = useState("");
  const [sliceGames, setSliceGames] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPAge] = useState(4);
  const [error, setError] = useState("");


  const server = "euw1";
  const server2 = "europe";

  const nickgame = JSON.parse(localStorage.getItem("loggedUser")).userNickGame;

  const getLoadGames = async () => {
    setError("")
    fetch(
      `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickgame}?api_key=${
        import.meta.env.VITE_REACT_APP_LOL
      }`
    )
      .then((response) => response.json())
      .then((result) => getLeague(result.puuid))
      .catch((error) => error && setError("Error"));
  };

  const getLeague = async (puuid) => {
    fetch(
      `https://${server2}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${import.meta.env.VITE_REACT_APP_LOL}`
    )
      .then((response) => response.json())
      .then((result) => (setMyGames(result),addSliceGames(result)))
      .catch((error) => error && setError("Error"));
  };

  const addSliceGames = async (forGames,start=0,end=4) => {
    const gamesArr = [];
    
    const response = await Promise.all(
      forGames.slice(start,end).map((game) => {
        fetch(
          `https://${server2}.api.riotgames.com/lol/match/v5/matches/${game}?api_key=${import.meta.env.VITE_REACT_APP_LOL}`
        )
          .then((res) => res.json())
          .then((result) => (gamesArr.push(result.info)))
          .then(()=>{if(gamesArr.length === 4)setSliceGames(gamesArr)})
          .then(()=>setError(""))
          .catch((error) => error && setError("Error"));
      }
    )
    )
    
  }
  useEffect(() => {
    getLoadGames
()  }, []);


   const changePag  = (page) => {
    
    const lastPostIndex = page * postPerPage
    const firstPostIndex =  lastPostIndex - postPerPage 
    addSliceGames(myGames, firstPostIndex, lastPostIndex)
    
   }


  return (
    <div className="games-main">
      <div className="gamesP-top">
      <div>
          <Link to={"/private"} className="btnP">
            <i className="bx bx-arrow-back"></i> Volver
          </Link>
        </div>
        <div top-center-resp>{error}</div>
        <div className="pages">
          <div className="buttons"><span>20 Partidas</span>
          <Pagination totalPosts={20}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          changePag={changePag}/>  </div>
        </div>
      </div>
      <div className="gamesP-main">
        <div className="main-gridG">
          {sliceGames ? (
            sliceGames.map((game,index) => (
              <CardGame
                key={index}
                datos={game}
                type={"favorito"}
                myGames={myGames}
                setMyGames={setMyGames}
              />
            ))
          ) : (
            <div className="gameMiniG">
              <img src={Load} ></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Games;
