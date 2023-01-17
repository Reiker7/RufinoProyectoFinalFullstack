import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { handlePostFav } from "../functions/crud";

export default function BasicButtons({ datosFav, nickname, userNickId }) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="outlined"
        onClick={() => handlePostFav(datosFav, nickname, userNickId)}
      >
        Guardar
      </Button>
    </Stack>
  );
}
