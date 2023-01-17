import React, { useState , useEffect} from "react";
import { getChamp } from "../functions/funtions.js";
import CardLol from "../common/CardLol.js"

function Prueba() {

  const [datos, setDatos] = useState(null);


  useEffect(() => {
    getChamp(setDatos);
    console.log(datos)
  }, []);
  
 

  return (
    <>
      {datos !== null ? (
      <div className="main">
        <CardLol datos={datos}/>
      </div>
      ) : ("sin datos")}
    </>
  ) 
}

export default Prueba;
