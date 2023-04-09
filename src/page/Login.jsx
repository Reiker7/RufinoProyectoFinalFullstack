import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserConsumer from "../hooks/useDatos";

import styles from "../styles/login.module.css";

function Login({ log, setlog }) {
  const [user, setUser] = UserConsumer();

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const sendData = (event) => {
    event.preventDefault();

    setLoad(true);
    setError(false);

    const datouser = { nickname, password };

    if (!nickname || !password) {
      alert("Faltan datos");
      setLoad(false);
    }

    fetch(`${import.meta.env.VITE_REACT_APP_SERVER}/api/auths`, {
      method: "POST",
      body: JSON.stringify(datouser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setUser({
          ...user,
          loggin: true,
          nickname: response.nickname,
          nickgame: response.userNickGame,
          token: response.token,
        });
        window.localStorage.setItem("loggedUser", JSON.stringify(response));
      })
      .then(() =>
        setTimeout(() => {
          navigate("/private");
        }, "1000")
      )
      .catch((error) => error && setError(true) && setLoad(false));
  };

  return (
    <div className={styles.mainLogin}>
      <div className={styles.containerBackLeft}></div>
      <div className={styles.containerBackRight}></div>
      <div className={styles.loginBox}>
        {load ? (
          <span className={styles.iconTop}>
            <i className="bx bx-loader"></i>
          </span>
        ) : (
          <span className={styles.iconTop}>
            <i className="bx bx-log-in-circle"></i>
          </span>
        )}
        {error ? (
          <span className={styles.iconError}>
            <i className="bx bx-error-alt"></i>
          </span>
        ) : (
          ""
        )}
        <h2>Login</h2>
        <form>
          <div className={styles.inputBox}>
            <span className={styles.icon}>
              <i className="bx bxs-user"></i>
            </span>
            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              type="text"
              name="user"
              id="userReg"
              minLength="1"
              maxLength="15"
              spellCheck="false"
              autoComplete="off"
              required
            ></input>
            <label htmlFor="createUser">Usuario</label>
          </div>

          <div className={styles.inputBox}>
            <span className={styles.icon}>
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="pass"
              id="passReg"
              autoComplete="off"
              required
            ></input>
            <label htmlFor="createUser">Password</label>
          </div>
          <button
            onClick={(evento) => sendData(evento)}
            className={styles.btnL}
          >
            Login
          </button>
          <div className={styles.registerLink}>
            <p>No tienes cuenta?</p>
            <Link to={"/register"}>Registrarse</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
