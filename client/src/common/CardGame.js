import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import BasicButtons from "./BasicButtons";

function CardGame({ datos, nickname, userNickId }) {
  console.log(datos);
  function createData(
    player,
    summonerName,
    summonerLevel,
    totalDamageDealt,
    goldEarned
  ) {
    return {
      player,
      summonerName,
      summonerLevel,
      totalDamageDealt,
      goldEarned,
    };
  }
  const rows = [
    createData(
      datos.participants[0].summonerName,
      datos.participants[0].championName,
      datos.participants[0].summonerLevel,
      datos.participants[0].totalDamageDealt,
      datos.participants[0].goldEarned
    ),
    createData(
      datos.participants[1].summonerName,
      datos.participants[1].championName,
      datos.participants[1].summonerLevel,
      datos.participants[1].totalDamageDealt,
      datos.participants[1].goldEarned
    ),
    createData(
      datos.participants[2].summonerName,
      datos.participants[2].championName,
      datos.participants[2].summonerLevel,
      datos.participants[2].totalDamageDealt,
      datos.participants[2].goldEarned
    ),
    createData(
      datos.participants[3].summonerName,
      datos.participants[3].championName,
      datos.participants[3].summonerLevel,
      datos.participants[3].totalDamageDealt,
      datos.participants[3].goldEarned
    ),
    createData(
      datos.participants[4].summonerName,
      datos.participants[4].championName,
      datos.participants[4].summonerLevel,
      datos.participants[4].totalDamageDealt,
      datos.participants[4].goldEarned
    ),
    createData(
      datos.participants[5].summonerName,
      datos.participants[5].championName,
      datos.participants[5].summonerLevel,
      datos.participants[5].totalDamageDealt,
      datos.participants[5].goldEarned
    ),
    createData(
      datos.participants[6].summonerName,
      datos.participants[6].championName,
      datos.participants[6].summonerLevel,
      datos.participants[6].totalDamageDealt,
      datos.participants[6].goldEarned
    ),
    createData(
      datos.participants[7].summonerName,
      datos.participants[7].championName,
      datos.participants[7].summonerLevel,
      datos.participants[7].totalDamageDealt,
      datos.participants[7].goldEarned
    ),
    createData(
      datos.participants[8].summonerName,
      datos.participants[8].championName,
      datos.participants[8].summonerLevel,
      datos.participants[8].totalDamageDealt,
      datos.participants[8].goldEarned
    ),
    createData(
      datos.participants[9].summonerName,
      datos.participants[9].championName,
      datos.participants[9].summonerLevel,
      datos.participants[9].totalDamageDealt,
      datos.participants[9].goldEarned
    ),
  ];

  return (
    // console.log(datos),
    <Grid item xs={6}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 600 }}
          size="small"
          aria-label="a dense table"
          border="2"
        >
          <TableHead
            key={"tablaH1"}
            style={{ backgroundColor: "#ECEEF1", _color: "white" }}
          >
            <TableRow>
              <TableCell>{datos.platformId}</TableCell>
              <TableCell align="right">{datos.gameId}</TableCell>
              <TableCell align="right">
                <BasicButtons
                  datosFav={datos}
                  key={datos.gameId}
                  nickname={nickname}
                  userNickId={userNickId}
                />
              </TableCell>
              <TableCell align="right">{datos.gameMode}</TableCell>
              <TableCell align="right">
                🕑
                {Math.floor(datos.gameDuration / 60)} min
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead
            key={"tablaH2"}
            style={{
              backgroundColor: "#fafafa",
            }}
          >
            <TableRow>
              <TableCell>
                Equipo Azul |{" "}
                {datos.participants[0].win === true ? (
                  <strong>Win 🏆</strong>
                ) : (
                  "Lose"
                )}
              </TableCell>
              <TableCell align="right">Campeón</TableCell>
              <TableCell align="right">Level</TableCell>
              <TableCell align="right">Daño total 🎯</TableCell>
              <TableCell align="right">Oro Obtenido 💵</TableCell>
            </TableRow>
          </TableHead>

          <TableBody key={"tablaB1"} style={{ backgroundColor: "#EEF2FE" }}>
            {rows.slice(0, 5).map((row) => (
              <TableRow key={row.player}>
                <TableCell scope="row">{row.player}</TableCell>
                <TableCell align="right">
                  {row.summonerName}{" "}
                  <img
                    src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${row.summonerName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1672400108682`}
                    style={{ borderRadius: "4px", width: "16px" }}
                  ></img>
                </TableCell>
                <TableCell align="right">{row.summonerLevel}</TableCell>
                <TableCell align="right">{row.totalDamageDealt}</TableCell>
                <TableCell align="right">{row.goldEarned}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableHead
            key={"tablaH3"}
            style={{
              backgroundColor: "#fafafa",
            }}
          >
            <TableRow>
              <TableCell>
                Equipo Rojo |{" "}
                {datos.participants[5].win === true ? (
                  <strong>Win 🏆</strong>
                ) : (
                  "Lose"
                )}
              </TableCell>
              <TableCell align="right">Campeón</TableCell>
              <TableCell align="right">Level</TableCell>
              <TableCell align="right">Daño total 🎯</TableCell>
              <TableCell align="right">Oro Obtenido 💵</TableCell>
            </TableRow>
          </TableHead>
          <TableBody key={"tablaB2"} style={{ backgroundColor: "#FCF2F3" }}>
            {rows.slice(5, 10).map((row) => (
              <TableRow key={row.player}>
                <TableCell scope="row">{row.player}</TableCell>
                <TableCell align="right">
                  {row.summonerName}{" "}
                  <img
                    src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${row.summonerName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1672400108682`}
                    style={{ borderRadius: "4px", width: "16px" }}
                  ></img>
                </TableCell>
                <TableCell align="right">{row.summonerLevel}</TableCell>
                <TableCell align="right">{row.totalDamageDealt}</TableCell>
                <TableCell align="right">{row.goldEarned}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
export default CardGame;
