import { imgChampSquare } from "../config/Lolapi";

function CardFree({ datos }) {
  return (
    <>
      {datos === undefined ? (
        <></>
      ) : (
        <div className="card-free">
          <picture>
            <div
              className="img-container"
              style={{
                backgroundImage: `url(${imgChampSquare + datos.image.full})`,
              }}
            ></div>
            <span>{datos.name}</span>
          </picture>
          <div className="containerText">
            <ul>
              <li>Dificultad : <strong>{datos.info.difficulty}</strong> </li>
              <li>Ataque : <strong>{datos.info.attack}</strong></li>
              <li>Defensa : <strong>{datos.info.defense}</strong></li>
              <li>Magic : <strong>{datos.info.magic}</strong></li>
              <li>Hp : <strong>{datos.stats.hp}</strong></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default CardFree;
