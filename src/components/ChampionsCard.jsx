import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function ChampionsCard({ datos }) {
  
  const [info, setInfo] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {!datos ? (
        <></>
      ) : (
        <div
          className="card-champion"
          onMouseEnter={() => setInfo(true)}
          onMouseLeave={() => setInfo(false)}
          style={{
            backgroundImage: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${datos.id}_0.jpg")`,
          }}
        >
        
          {info ? (
            <div className="text-info">
              <p>{datos.blurb}</p>
            </div>
          ) : (
            <span></span>
          )}
          <div className="content-name">
            <span>{datos.name}</span>
            {info ? <i className="bx bx-info-circle" onClick={()=>{navigate(`/champions/${datos.id}`)}}></i> : ""}
          </div>
        </div>
      )}
    </>
  );
}

export default ChampionsCard;
