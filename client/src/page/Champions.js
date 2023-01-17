import React, { useState, useEffect } from "react";
import { riotapi, imagechampapi } from "../config/Lolapi.js";
import CardLol from "../common/CardLol.js";
import Pagination from "@mui/material/Pagination";
import Load from "../assets/animated/load.gif";

import axios from "axios";
import { Grid } from "@mui/material";

function Champions(props) {
  const [datos, setDatos] = useState(null);
  const [filter, setFilter] = useState(null);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setLoading(false);
    getAllChamp();
  }, []);
  const getAllChamp = async () => {
    const response = await axios
      .get(`${riotapi}/champion.json`)
      .catch((err) => console.log("Error:", err));
    // console.log(">>allchamp", Object.values(response.data.data));
    getChampData(Object.values(response.data.data));
  };
  const getChampData = async (result) => {
    const champArr = [];

    const response = await Promise.all(
      result.map((champItems) => {
        return axios
          .get(`${riotapi}/champion/${champItems.id}.json`)
          .then((result) => {
            champArr.push(result.data.data[champItems.id]);
          })
          .catch((err) => console.log("Error:", err));
      })
    );
    // console.log(">>champArr", champArr);
    setDatos(champArr);
    setFilter([...champArr.slice(0, 14)]);
    setTimeout(() => setLoading(true), 1000);
  };
  const handleChange = (event, value) => {
    const valor = 14;
    setFilter(datos.slice(valor * (value - 1), valor * value));
    setPage(value);
  };

  return (
    <>
      {loading ? (
        <div className="main">
          <Pagination
            count={10}
            onChange={handleChange}
            color="primary"
            style={{ backgroundColor: "var(--color-white)" }}
          />
          <Grid container>
            {filter.map((dato) => (
              <CardLol
                key={dato.key}
                datos={dato}
                setNumber={setNumber}
                number={number}
              />
            ))}
            {console.log(filter)}
          </Grid>
        </div>
      ) : (
        <div className="container-div"><img src={Load} className="center" ></img></div>
      )}
    </>
  );
}
export default Champions;
