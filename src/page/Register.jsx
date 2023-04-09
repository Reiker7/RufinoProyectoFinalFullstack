import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "../styles/register.module.css";
function Register() {
  const [nickname, setNickname] = useState("");
  const [userNickId, setUserNickId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const sendData = async (event) => {
    event.preventDefault();
    setLoad(true);
    setError(false);
    const datouser = {
      nickname: nickname,
      userNickGame: userNickId,
      email: email,
      password: password,
    };

    if (!nickname || !userNickId || !password || !email) {
      alert("Faltan datos");
      setLoad(false);
    }

    fetch(`${import.meta.env.VITE_REACT_APP_SERVER}/api/users/create/`, {
      method: "POST",
      body: JSON.stringify(datouser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res.status))
      .then(() => navigate("/login"))
      .catch((error) => error && setError(true) && setLoad(false));
  };

  return (
    <div className={styles.mainRegister}>
      <div className={styles.containerBackLeft}></div>
      <div className={styles.containerBackRight}></div>
      <div className={styles.registerBox}>
        {load ? (
          <span className={styles.iconTop}>
            <i className="bx bx-loader"></i>
          </span>
        ) : (
          <span className={styles.iconTop}>
            <i className="bx bxs-id-card"></i>
          </span>
        )}
        {error ? (
          <span className={styles.iconError}>
            <i className="bx bx-error-alt"></i>
          </span>
        ) : (
          ""
        )}
        <h2>Registro</h2>
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
              minlength="1"
              maxlength="15"
              autoComplete="off"
              spellcheck="false"
              required
            ></input>
            <label htmlFor="createUser">Usuario</label>
          </div>

          <div className={styles.inputBox}>
            <span className={styles.icon}>
              <i className="bx bxs-group"></i>
            </span>
            <input
              value={userNickId}
              onChange={(e) => setUserNickId(e.target.value)}
              type="text"
              name="userG"
              id="userNick"
              autoComplete="off"
              spellcheck="false"
              required
            ></input>
            <label htmlFor="createUser">Nick Game</label>
          </div>

          <div className={styles.inputBox}>
            <span className={styles.icon}>
              <i className="bx bx-envelope"></i>
            </span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="userMail"
              required
            ></input>
            <label htmlFor="createUser">Email</label>
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
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
