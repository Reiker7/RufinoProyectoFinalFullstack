import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { imgChampSquare } from "../config/Lolapi";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { border, style } from "@mui/system";
import fondo from "../assets/images/fondo.png";

function CardFree({ datos }) {
  {
    console.log(datos);
  }
  return (
    <>
      {
        !datos.id ? (
          <>RGAPI - caducada </>
        ) : (
          <Card
            sx={{
              display: "flex",
              margin: 6,
              marginBottom: 2,
              backgroundColor: "var(--color-gray1)",
              color: "var(--color-white)",
              textShadow: "#FC6 0px 0 px",
              backgroundImage: `url(${fondo})`,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}></CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardContent>
              <CardMedia
                component="img"
                sx={{
                  width: 151,
                  border: 2,
                  borderRadius: "50%",
                  boxShadow: 1,
                }}
                image={imgChampSquare + datos.image.full}
                alt="Live from space album cover"
              />
              <Typography gutterBottom variant="h5" component="div">
                <br />
                <strong>{datos.id}</strong>

                {/* {datos.map((e)=> e[0].id + ', ')} */}
                {/* {datos.freeChampionIds.map(n => n + ', ')} */}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dificultad: {datos.info.difficulty}
                <br />
                <br />
                Ataque: {datos.info.attack}
                <br />
                Defensa: {datos.info.defense}
                <br />
                Magic: {datos.info.magic}
                <br />
                <p>Hp: {datos.stats.hp}</p>
              </Typography>
            </CardContent>
          </Card>
        )
        // <Card sx={{ maxWidth: 250, margin: 6, marginBottom: 10}}>
        //   <CardActionArea>
        //     <CardMedia
        //       component="img"
        //       height="150"
        //       image={imgChampSquare + datos.image.full}
        //       alt="champion"
        //     />
        //     <CardContent>
        //       <Typography gutterBottom variant="h5" component="div">
        //         <strong>{datos.id}</strong>
        //       {/* {datos.map((e)=> e[0].id + ', ')} */}
        //       {/* {datos.freeChampionIds.map(n => n + ', ')} */}
        //       </Typography>
        //     </CardContent>
        //     <CardContent>
        //     <Typography gutterBottom variant="h5" component="div">
        //       Ataque: {datos.info.attack}<br/>
        //       Defensa: {datos.info.defense}<br/>
        //       Magic: {datos.info.magic}<br/>
        //       Dificultad: {datos.info.difficulty}
        //       </Typography>
        //     </CardContent>
        //   </CardActionArea>
        // </Card>
      }
    </>
  );
}

export default CardFree;
