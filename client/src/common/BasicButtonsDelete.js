import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { handleDeleteFav } from "../functions/crud";

export default function BasicButtonsDelete({
  datosFav,
  nickname,
  userNickId,
  setDatosGame,
  datosGame,
}) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="outlined"
        onClick={() =>
          handleDeleteFav(
            datosFav,
            nickname,
            userNickId,
            setDatosGame,
            datosGame
          )
        }
      >
        Borrar
      </Button>
    </Stack>
  );
}
