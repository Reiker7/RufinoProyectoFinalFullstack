import { useEffect } from "react";
import "../styles/home.css";
import logoYasuo from "../assets/images/logoYasuo.png";

function Home() {
  useEffect(() => {
    fetch("https://projectrufinodb.onrender.com/api/favorites").then(
      (awakendb) => console.log(awakendb.status)
    );
  }, []);

  return (
    <div className="main-home">
      <div className="mainTop"></div>
      <div className="main-center">
        <div className="container-img">
          <img src={logoYasuo} alt="logo Yasuo"></img>
        </div>
        <div className="center-triangle"></div>
        <div className="container-info">
          <div className="icons">
            <i className="bx bxl-react"></i>
            <i className="bx bxl-nodejs"></i>
            <i className="bx bxl-mongodb"></i>
            <i className="bx bxs-file-json"></i>
          </div>
          <h1>League of Legends</h1>
          <h3>
            League of Legends es un juego en equipo con más de 160 campeones con
            los que realizar jugadas épicas .
          </h3>
          <p>
            Bienvenidos a la version 2.0 del proyecto Full Stack hecho para el
            bootcamp , usando React y Node consumiendo ApiRest, Exprees y
            MongoDb para el backend usando ademas JSON Web Tokens.
          </p>
          <p>
            En esta ocasión mejoro la optimización , el aspecto visual y la hago
            Web responsive.{" "}
          </p>
          <span>
            Rufino Polvillo Caliani{" "}
            <a href="https://rufino.onrender.com/">
              <i className="bx bx-link-external"></i>
            </a>{" "}
          </span>
        </div>
      </div>
      <div className="mainBot"></div>
    </div>
  );
}
export default Home;
