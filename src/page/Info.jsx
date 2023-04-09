import "../styles/info.css";
import { useState } from "react";
import Load from "../assets/animated/loading.webp";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { riotApi, imgSkillApi } from "../config/Lolapi";
import logoHD from "../assets/images/logoHD.jpg"

function Info() {
  const [loading, setLoading] = useState(false);
  const [skin, SetSkin] = useState(0);
  const [champ, SetChamp] = useState("");
  const [text, SetText] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getChampions = () => {
      fetch(`${riotApi}/champion/${id}.json`)
        .then((response) => response.json())
        .then((res) => SetChamp(res.data))
        .catch((err) => console.log("Error:", err));
    };
    getChampions();
  }, []);

  return (
    <>
      {loading ? (
        <div className="info-load">
          <img src={Load}></img>
        </div>
      ) : (
        <div className="main-info">
          {champ ? (
            <>
              {console.log(champ)}
              <div className="info-card">
                <div
                  className="info-picture"
                  style={{
                    backgroundImage: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_${skin}.jpg"),url(${logoHD})`,
                  }}
                >
                  <i
                    className="bx bx-chevron-left"
                    onClick={() => (skin == 0 ? "" : SetSkin(skin - 1))}
                  ></i>
                  <i
                    className="bx bx-chevron-right"
                    onClick={() =>
                      skin == champ[id].skins.length - 1 ? "" : SetSkin(skin + 1)
                    }
                  ></i>
                </div>
              </div>
              <div className="info-text">
                <Link to="/champions">Volver</Link>
                <h1>{champ[id].name}</h1>
                <h2>{champ[id].title}</h2>
                <p>{champ[id].lore}</p>
                <div className="skills">
                  <span
                    style={{
                      backgroundImage: `url(${imgSkillApi}${champ[id].spells[0].image.full})`,
                    }}
                    onClick={() => SetText(champ[id].spells[0].description)}
                  >
                    Q
                  </span>
                  <span
                    style={{
                      backgroundImage: `url(${imgSkillApi}${champ[id].spells[1].image.full})`,
                    }}
                    onClick={() => SetText(champ[id].spells[1].description)}
                  >
                    W
                  </span>
                  <span            style={{
                      backgroundImage: `url(${imgSkillApi}${champ[id].spells[2].image.full})`,
                    }}
                    onClick={() => SetText(champ[id].spells[2].description)}
                  >
                    E
                  </span>
                  <span            style={{
                      backgroundImage: `url(${imgSkillApi}${champ[id].spells[3].image.full})`,
                    }}
                    onClick={() => SetText(champ[id].spells[3].description)}
                  >
                    R
                  </span>
                </div>
                <p>{text}</p>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default Info;
