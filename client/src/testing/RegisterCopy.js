import axios from "axios";
import React, { useState } from "react";
import "../style/register.css";
import fondoLogo from "../assets/images/media.jpg";
import { Container } from "@mui/system";
import { AppRegistration as Candado } from "@mui/icons-material";
import {
  Button,
  Grid,
  Card,
  Paper,
  Avatar,
  Typography,
  TextField,
} from "@mui/material";

function Register() {
  const [nickname, setNickname] = useState("");
  const [userNickId, setUserNickId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [exito, setExito] = useState("");

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
        "http://localhost:3000/api/users/create",
        datouser
      );
      setExito(
        <button type="button" className="btn-success">
          Registrado
        </button>
      );
    } catch (err) {
      setExito(
        <button type="button" className="btn-success">
          Error
        </button>
      );
    }
  };

  return (
    <Grid className="registerG">
      <Container
        component={Paper}
        className="registerForm"
        elevation={5}
        maxWidth="md"
        justify = "center"
        alignItems="center"
      >
        <div className="registerFormDiv">
          <div className="avatarForm"> <Avatar sx={{ bgcolor: "var(--color-blue1)" }} >
            <Candado />
          </Avatar>
          </div>
          <Typography component="h1" variant="h5" margin="normal">
         
            Registrar
          </Typography>
          <form className="formRegister">
            <TextField
              id="outlined-basic"
              label="Usuario"
              variant="outlined"
              autoFocus
              fullWidth
              margin="normal"
            />
            <TextField
              id="outlined-basic"
              label="Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
            />
            						<Button
							fullWidth
							variant='contained'
							color='primary'
              
              
	
							onClick={() => onSubmit()}
						>
							Sign In
						</Button>
          </form>
        </div>
      </Container>
    </Grid>
  );
}

export default Register;
