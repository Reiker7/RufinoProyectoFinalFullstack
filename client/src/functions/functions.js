import { riotapi, rotationchampapi } from "../config/Lolapi.js";
const server = "EUW1";

const getChamp = async (Datos) => {
  try {
    const resp = await fetch(`${riotapi}/champion.json`);
    const data = await resp.json();
    Datos(data.data);
  } catch (error) {
    console.log(error);
  }
};
const getRotFree = async (Datos) => {
  try {
    const resp = await fetch(`${rotationchampapi}`);

    const data = await resp.json();
    Datos(data);
  } catch (error) {
    console.log(error);
  }
};
const getUser = async (Datos, input) => {
  try {
    const resp = await fetch(
      `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${input}?api_key=${process.env.REACT_APP_LOL}`
    );
    const data = await resp.json();
    Datos(data);
  } catch (error) {
    console.log(error);
  }
};
const getSummoner = async (Datos, input) => {
  try {
    const resp = await fetch(
      `https://${server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${input}?api_key=${process.env.REACT_APP_LOL}`
    );
    const data = await resp.json();
    Datos(data);
  } catch (error) {
    console.log(error);
  }
};

export { getRotFree, getChamp, getUser, getSummoner };
