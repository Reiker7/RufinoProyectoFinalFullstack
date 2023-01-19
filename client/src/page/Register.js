import axios from "axios";
import React, { useState } from "react";
import "../style/register.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Register() {
  const [nickname, setNickname] = useState("");
  const [userNickId, setUserNickId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [exito, setExito] = useState("");
  const navigate = useNavigate();
  

  const sendData = async () => {
    if (!nickname || !userNickId || !password || !email)
      return alert("Faltan datos");
    console.log(nickname);
    const datouser = {
      nickname: nickname,
      userNickGame: userNickId,
      email: email,
      password: password,
    };
    
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER}/api/users/create/`,
        datouser
      );
      setExito(
        <button type="button" className="btn-success">
          Registrado
        </button>
      );
      navigate("/login");

    } catch (err) {
      setExito(
        <button type="button" className="btn-success">
          Error
        </button>
      );
    }
  };

  return (
    <div className="registerMain">
      {" "}
      <div class="registro">
        <h1 className="h1Register">Registro</h1>
        {exito}
      </div>
      <div class="registro">
        <label htmlFor="createUser">nick</label>
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          type="text"
          name="user"
          id="userReg"
          placeholder="Nick en la web"
          minlength="1"
          maxlength="15"
          spellcheck="false"
          required
        ></input>
      </div>
      <div className="registro">
        <label htmlFor="createUser">nick game</label>
        <input
          value={userNickId}
          onChange={(e) => setUserNickId(e.target.value)}
          type="text"
          name="userG"
          id="userReg"
          placeholder="Nick del juego"
          spellcheck="false"
          required
        ></input>
      </div>
      <div className="registro">
        <label htmlFor="createUser">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="userReg"
          placeholder="Email"
          required
        ></input>
      </div>{" "}
      <div className="registro">
        <label htmlFor="createUser">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="pass"
          id="userReg"
          placeholder="Password"
          autocomplete="off"
          required
        ></input>
      </div>
      <div className="registro">
        <p> {confirm} </p>

        {nickname && email && userNickId && password ? (
          <button onClick={() => sendData()} className="submitBtn">
            Registrarse
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Register;
