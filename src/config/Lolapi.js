const server = "EUW1";

export const riotApi =
  "https://ddragon.leagueoflegends.com/cdn/12.23.1/data/es_ES";

export const weeklyChampions = `https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${
  import.meta.env.VITE_REACT_APP_LOL
}`;

export const imgChampSquare = `https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/`;


export const imgChampapi =
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading";
export const imgSkillApi =
  "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/spell/";
export const imgPassiveApi =
  "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/passive";
export const imgUserApi =
  "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/";


export const apiEndpointDelete = `${import.meta.env.VITE_REACT_APP_SERVER}/api/favorites/delete/`;

export const apiEndpointFav = `${import.meta.env.VITE_REACT_APP_SERVER}/api/favorites/create`;

export const apiEndpointUser =
    `${import.meta.env.VITE_REACT_APP_SERVER}/api/users/put/`;

export const apiChangeNickGames =     `${import.meta.env.VITE_REACT_APP_SERVER}/api/favorites/put/`;

export const getUserInfo = async (UserInfo, nombre) => {
    try {
      const resp = await fetch(
        `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nombre}?api_key=${import.meta.env.VITE_REACT_APP_LOL}`
      );
      if (resp){const data = await resp.json();
      UserInfo(data);}
      
    } catch (error) {
      console.log(error);
    }
  };

  export const  getDbGames = `${import.meta.env.VITE_REACT_APP_SERVER}/api/favorites/get/`;