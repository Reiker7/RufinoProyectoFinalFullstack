import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { DatosProvider } from "./hooks/useDatos";
// import { AuthProvider } from "./hooks/useAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DatosProvider>
      <RouterProvider router={router} />
    </DatosProvider>
  </React.StrictMode>
);
