import "./E404.css";
import { useRouteError } from "react-router-dom";
export default function E404() {
  const error = useRouteError();
  return (
    <div className="e404">
      <section className="notFound">
        <div className="img">
          <img
            src="https://assets.codepen.io/5647096/backToTheHomepage.png"
            alt="Back to the Homepage"
          />
          <img
            src="https://assets.codepen.io/5647096/Delorean.png"
            alt="El Delorean, El Doc y Marti McFly"
          />
        </div>
        <div className="text">
          <h1>{error.status}</h1>
          <h2>{error.statusText}</h2>
          <h3>Volver a casa?</h3>
          <a href="/" className="yes">
            YES
          </a>
          <a href="https://www.youtube.com/watch?v=__84JVkTnLE">NO</a>
        </div>
      </section>
    </div>
  );
}
