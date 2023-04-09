import "../styles/champions.css";
import React, { useState, useEffect } from "react";
import { riotApi } from "../config/Lolapi";
import Load from "../assets/animated/loading.webp";
import ChampionsCard from "../components/ChampionsCard";

function Champions() {
  const [champions, setChampions] = useState(null);
  const [champion, setChampion] = useState(null);

  useEffect(() => {
    const getChampions = () => {
      fetch(`${riotApi}/champion.json`)
        .then((response) => response.json())
        .then((res) => setChampions(Object.values(res.data)))
        .catch((err) => console.log("Error:", err));
    };
    getChampions();
  }, []);
  return (
    <>
      {champions ? (
        <div className="main-champion">
          <div className="main-grid">
            {champions.map((champ, index) => (
              <ChampionsCard key={champ.id} datos={champ} />
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

export default Champions;
