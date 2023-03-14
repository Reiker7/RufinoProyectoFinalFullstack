import { margin } from "@mui/system";
import React, { useState, useEffect } from "react";
import swain from "../assets/images/swainB.jpg";
function Prueba() {
  let awakendb
  fetch('https://projectrufinodb.onrender.com/api/favorites')
  .then(awakendb => console.log(awakendb.status))
  return (
    <div className="main">
      <img
        src={swain}
        style={{
          borderRadius: "20%",
          marginBottom: "8%",
          marginTop: "2%",
        }}
      ></img>
    </div>
  );
}
export default Prueba;
