import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import DotsMobileStepper from "./DotsMobileStepper";

function CardLol({ datos }) {
  const [number, setNumber] = useState(0);
  const [card, setCard] = useState([datos.name, datos.title, datos.blurb]);

  const imageChange = () => {
    // setNumber( number >= (datos.skins.length - 2) ?  0 : number + 1 );

    card[2] == datos.blurb
      ? setCard(["", "", datos.lore])
      : setCard([datos.name, datos.title, datos.blurb]);
  };

  //  ( number >= (datos.skins.length - 2) ?  0 : number + 1 )( number<1 ? 1 : 0 )
  return (
    <Card sx={{ maxWidth: 250, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width={"100"}
          height="auto"
          image={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${datos.id}_${number}.jpg`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://wallpapercave.com/wp/wp3187292.jpg";
          }}
          alt="champion"
          onClick={imageChange}
        />
        {/* {console.log(datos.skins.length)} */}
        <DotsMobileStepper
          imagenes={datos.skins.length}
          activeStep={number}
          setActiveStep={setNumber}
        />
        <CardContent onClick={imageChange}>
          <Typography gutterBottom variant="h5" component="div">
            {card[0]}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {card[1]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card[2]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardLol;
