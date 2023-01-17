import axios from "axios";
import React, { useState } from "react";
import "../style/register.css";
import { Button } from "@mui/material";

function Login() {
  const [nickname, setNickname] = useState("");

  const [password, setPassword] = useState("");

  const [exito, setExito] = useState("");

  const sendData = async () => {
    console.log("test");
    if (!nickname || !password) return alert("Faltan datos");
    const updatedPost = {
      nickname,
    };

    setExito(
      <button type="button" className="btn-success">
        loading
      </button>
    );
  };
  return (
    <div className="registerMain">
      {" "}
      <div class="registro">
        <h1 className="h1Register">Login</h1>
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

        {nickname && password ? (
          <button onClick={() => sendData()} className="submitBtn">
            login
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Login;
