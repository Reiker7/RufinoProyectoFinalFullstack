import axios from "axios";
import React, { useState } from "react";
import "../style/register.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../style/login.css";
import UserConsumer from "../hooks/useDatos";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



function Login({ log, setlog }) {
  const [user, setUser] = UserConsumer();

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [exito, setExito] = useState("");
  const navigate = useNavigate();

  const sendData = async () => {
    const datouser = { nickname, password };

    if (!nickname || !password) return alert("Faltan datos");

    try {
      const resUser = await axios.post(
        `${process.env.REACT_APP_SERVER}/api/auths`,
        datouser
      );
  

      window.localStorage.setItem("loggedUser", JSON.stringify(resUser.data));
      const { nickname, userNickGame, token } = resUser.data;
      await setUser({
        ...user,
        loggin: true,
        nickname: nickname,
        nickgame: userNickGame,
        token: token,
      });
      // setlog(true)
      setExito(    <Box sx={{  display: 'flex', marginLeft: 7 , marginTop: 2}}>
      <CircularProgress />
    </Box>)
      setTimeout(() => {
        navigate("/private");
      }, 1000)
      setTimeout
      
    } catch (err) {
      setExito(
        <Link to={""} className="btnE">
          Error 400
        </Link>
      );
    }


  };
  return (
    <div className="registerMain">
      <div className="registro">
        <h1 className="h1Register">Login</h1>
        {exito}
      </div>
      <div className="registro">
        <label htmlFor="createUser">nick</label>
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          type="text"
          name="user"
          id="userReg"
          placeholder="Nick en la web"
          minLength="1"
          maxLength="15"
          spellCheck="false"
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
          id="passReg"
          placeholder="Password"
          autoComplete="off"
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
