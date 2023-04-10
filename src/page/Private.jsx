import CardGame from "../components/CardGame";
import "../styles/private.css";
import { useEffect, useState } from "react";
import UserConsumer from "../hooks/useDatos";
import { Link } from "react-router-dom";
import { imgUserApi, getUserInfo, getDbGames, apiEndpointFav, apiEndpointUser ,apiChangeNickGames} from "../config/Lolapi";
import Load from "../assets/animated/loading.webp";
import { useNavigate } from "react-router-dom";

function Private() {
  const [userInfo, setUserInfo] = useState(null);
  const [myGames, setMyGames] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = UserConsumer();

  const navigate = useNavigate();
 
const getLoadGames = async () => {
      fetch(
        `${getDbGames + user.nickname}`
      )
      .then(response => response.json())
      .then((data) => setMyGames(data) , setLoading(false))
      .catch(error => console.log(error))
}


  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem("loggedUser");

    loggedUserJson !== null
      ? (getUserInfo(setUserInfo, JSON.parse(loggedUserJson).nickname),
        getLoadGames())
      : console.log("sin datos");
  }, []);

  const handleChange = async () => {
    if (input.length >3) {
      const origenNick = user.nickgame
     
      let usuario = JSON.parse(localStorage.getItem("loggedUser"));
      usuario.userNickGame = input;
      localStorage.setItem("loggedUser", JSON.stringify(usuario));

      setUser({
        ...user,
        nickgame: input,
      });

      const cambio = { nickgame: input };

      const optionsTokenPost = {
        method: "PUT",
        headers: {
          'Content-type' : 'application/json',
          "x-auth-token": usuario.token,
        },
        body: JSON.stringify(cambio)
      }

      fetch(`${apiEndpointUser}${origenNick}`, optionsTokenPost)
      .then(response=>response.json())
      .then(res => console.log(res))
      .catch(error=> error && console.log(error))

      fetch(`${apiChangeNickGames}${origenNick}`, optionsTokenPost)
      .then(response=>response.json())
      .then(res => console.log(res))
      .catch(error=> error && console.log(error))




      navigate("/games");
      setTimeout(function () {
        navigate("/private");
      }, 150);
   
    }
    else {alert("El nick debe ser mayor de 3 letras")}
    }

    

  return (
    <div className="main-private">
      {!loading ? (
        <>
          <div className="panel-top">
          <div>
              <Link to={"/games"} className="btnP">
                Partidas
              </Link>
            </div>
            <div className="top-center-resp">
              <input
                placeholder="Cambiar nick del juego"
                onChange={(event) => setInput(event.target.value)}
              ></input><button className="btnC" onClick={()=>handleChange()}>Cambiar</button>
            </div>
    
            <div className="userInfo">
              {userInfo ? (
                <>
                  <strong>{user.nickgame}</strong>
                  <img src={`${imgUserApi}${userInfo.profileIconId}.png`} alt="User logo"></img>
                  <span>
                    {userInfo.summonerLevel} <i className="bx bxs-shield"></i>
                  </span>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="panel-main">
          <div className="main-grid"> 
            {myGames ?
              myGames.map((game,index) => (
                <CardGame
                  key={index}
                  datos={game}
                  type={"borrar"}
                  myGames={myGames}
                  setMyGames={setMyGames}
                />
              )) : <div className="gameMini"><img src={Load}></img></div>}
          </div>
          </div>
        </>
      ) : (
        <div className="main-load">
          <img src={Load} alt="Cargando"></img>
        </div>
      )}
    </div>
  );
}

export default Private;
