import React, { useState, useEffect } from "react";
import { weeklyChampions, riotApi } from "../config/Lolapi";
import CardFree from "../components/CardFree";
import "../styles/free.css";
import Load from "../assets/animated/loading.webp";

function Free() {
  const [final, setFinal] = useState(null);

  useEffect(() => {
    const getWeeklyChampions = () => {
      fetch(`${weeklyChampions}`)
        .then((response) => response.json())
        .then((res) => getChampions(res.freeChampionIds))
        .catch((err) => console.log("Error:", err));
    };
    const getChampions = async (numeros) => {
      await fetch(`${riotApi}/champion.json`)
        .then((response) => response.json())
        .then((res) => {
          return Object.values(res.data);
        })
        .then((arrayChamp) =>
          numeros.map((numero) => {
            return arrayChamp.filter((champ) => {
              return Number(champ.key) === numero;
            });
          })
        )
        .then((result) => setFinal(result))
        .catch((err) => console.log("Error:", err));
    };
    getWeeklyChampions();
  }, []);

  return (
    <>
      {final ? (
        <div className="main-free">
          <div className="main-grid">
            {final.map((dato, index) => (
              <CardFree key={index} datos={dato[0]} />
            ))}
          </div>
        </div>
      ) : (
        <div className="main-load">
          <img src={Load} alt="Cargando"></img>
        </div>
      )}
    </>
  );
}

export default Free;
