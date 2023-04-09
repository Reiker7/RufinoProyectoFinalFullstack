import "../styles/cardGame.css";
import { apiEndpointDelete, apiEndpointFav} from "../config/Lolapi";
import UserConsumer from "../hooks/useDatos";

function CardGame({ datos,  type, setMyGames, myGames }) {
  const [user, setUser] = UserConsumer();

  function loadTeam(start, end, color) {
    return datos.participants.slice(start, end).map((dato) => (
      <tr key={dato._id} className={color}>
        <td>
          {dato.summonerName == datos.nickname ? (
            <strong>{dato.summonerName}</strong>
          ) : (
            dato.summonerName
          )}
        </td>
        <td>
          <img
            src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${dato.championName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1672400108682`}
          ></img>{" "}
          {dato.championName}
        </td>
        <td align="right">{dato.summonerLevel}</td>
        <td align="right">{dato.totalDamageDealt}</td>
        <td align="right">{dato.goldEarned}</td>
      </tr>
    ));
  }

  const optionsToken = {
    method: "DELETE",
    headers: {
      "x-auth-token": user.token,
    },
  }



  const ButtonType = {
    borrar: async function handlerDelete() {
      try {
        fetch(`${apiEndpointDelete}${datos.gameId}`, optionsToken)
        .then(response=>response.json())
        .then(res => console.log(res))
        setMyGames(myGames.filter((game) => game.gameId !== datos.gameId))
      } catch (err) {
        console.log(err);
      }
    },
    favorito: async function handlerCreate() {
      let newPost = {
        body: {gameId: datos.gameId,
          userNickId: user.nickgame,
          nickname: user.nickname,
          platformId: datos.platformId,
          gameMode: datos.gameMode,
          gameDuration: datos.gameDuration,
          participants: [],}
      };

      datos.participants.map(
        (dato) => (
          newPost.body.participants.push({
            summonerName: dato.summonerName,
            championName: dato.championName,
            summonerLevel: dato.summonerLevel,
            totalDamageDealt: dato.totalDamageDealt,
            goldEarned: dato.goldEarned,
            win: dato.win,
          })
        )
      );
      const optionsTokenPost = {
        method: "POST",
        headers: {
          'Content-type' : 'application/json',
          "x-auth-token": user.token,
        },
        body: JSON.stringify(newPost.body)
      }
      try {
        fetch(`${apiEndpointFav}`, optionsTokenPost)
        .then(response=>response.json())
        .then(res => console.log(res))
        .catch(err=> alert("Ya esta en favoritos"))
        setMyGames(myGames.filter((game) => game.gameId !== datos.gameId))
      } catch (error) { console.log("error");
      }
    },
  };

  return (
    <>
    {datos ? <div className="card-game">
      <table>
        <tr>
          <th>{datos.platformId}</th>
          <th>{datos.gameId}</th>
          <th>
            <button className="btnB" onClick={() => ButtonType[type]()}>
              {type}
            </button>
          </th>
          <th>{datos.gameMode}</th>
          <th>
            {Math.floor(datos.gameDuration / 60)} min
            <i className="bx bx-time"></i>
          </th>
        </tr>
        <tr className="teamblueInfo">
          <td>
            Equipo Azul
            {datos.participants[0].win === true ? (
              <strong>
                {" "}
                <i className="bx bx-trophy"></i>
              </strong>
            ) : (
              ""
            )}
          </td>
          <td>Campeón</td>
          <td>Level</td>
          <td>
            Daño total <i className="bx bx-crosshair"></i>
          </td>
          <td>
            Oro Obtenido <i className="bx bx-coin"></i>
          </td>
        </tr>
        {loadTeam(0, 5, "teamblue")}
        <tr className="teamredInfo">
          <td>
            Equipo Rojo
            {datos.participants[6].win === true ? (
              <strong>
                {" "}
                <i className="bx bx-trophy"></i>
              </strong>
            ) : (
              ""
            )}
          </td>
          <td>Campeón</td>
          <td>Level</td>
          <td>
            Daño total <i className="bx bx-crosshair"></i>
          </td>
          <td>
            Oro Obtenido <i className="bx bx-coin"></i>
          </td>
        </tr>
        {loadTeam(5, 10, "teamred")}
      </table>
    </div> : <>""</>}
    
    </>
    
  );
}

export default CardGame;
