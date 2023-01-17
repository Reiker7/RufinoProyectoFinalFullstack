import React, { useState, useEffect } from "react";
import CardFree from "../common/CardFree.js";
import { riotapi, rotationchampapi } from "../config/Lolapi.js";
import axios from "axios";
import { Grid } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import Load from "../assets/animated/load.gif";
import "../style/register.css";

function Gratis() {
  const [final, setFinal] = useState(null);

  useEffect(() => {
    getAllrot();
  }, []);
  const getAllrot = async () => {
    const response = await axios
      .get(`${rotationchampapi}`)
      .catch((err) => console.log("Error:", err));

    getChamp(response.data.freeChampionIds);
  };
  const getChamp = async (numeros) => {
    const response = await axios
      .get(`${riotapi}/champion.json`)
      .catch((err) => console.log("Error:", err));

    const finale = await Promise.all(
      numeros.map((n) => {
        return {
          ...Object.values(response.data.data).filter((d) => {
            return d.key == n;
          }),
        };
      })
    );
    setFinal(finale);
  };

  return (
    <>
      {final !== null ? (
        <div className="main2">
          {/* <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
            <TableCell className="registro">
              
              <h1
                style={{
                  color: "var(--color-orange1)",
                  fontFamily: "Roboto",
                  textAlign: "center",
                  textShadow: "#FC9 1px 0 1px",
                }}
              >
                16 - Campeones gratuitos esta semana
              </h1>
            </TableCell>
          </Table> */}

          <Grid container>
            {final.map((dato, index) => (
              <CardFree key={index} datos={dato[0]} />
            ))}
          </Grid>
        </div>
      ) : (
        <div className="container-div"><img src={Load} className="center" ></img></div>
      )}
    </>
  );
}

export default Gratis;
