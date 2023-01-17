import { margin } from "@mui/system";
import React, { useState, useEffect } from "react";
import swain from "../assets/images/swainB.jpg";
function Prueba() {
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
