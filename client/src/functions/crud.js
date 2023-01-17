import axios from "axios";
const apiEndpoint = "http://localhost:3000/api/favorites/create";
const apiEndpointDelete = "http://localhost:3000/api/favorites/delete/";


const getclient = localStorage.getItem("loggedUser");
const token = JSON.parse(getclient).token

const optionsWithToken = {
  headers: {
    "x-auth-token": token
    }
}

const handlePostFav = async (datos, userNickId, nickname, setDatos) => {
  const getclient = localStorage.getItem("loggedUser");

  // if (getclient)
  //   axios.defaults.headers.common["x-auth-token"] = JSON.parse(getclient).token;

  // if (!datos.gameId) return alert("Faltan datos");

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
    const { data } = await axios.post(apiEndpoint, newPost, optionsWithToken);
    console.log(data);
  } catch (response) {
    alert("Ya esta en favoritos"), console.log(response.response.data);
  }
  // await setExito(
  //   <button type="button" className="btn btn-success">
  //     Creado
  //   </button>
  // );
};

const handleDeleteFav = async (
  datos,
  userNickId,
  nickname,
  setDatosGame,
  datosGame
) => {


  try {
    await axios.delete(apiEndpointDelete + datos.gameId, optionsWithToken);

    setDatosGame(datosGame.filter((dato) => dato.gameId !== datos.gameId));
  } catch (err) {
    console.log(getclient);
    console.log("error");
  }
};

export { handlePostFav, handleDeleteFav };
