import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/Router";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { DatosProvider } from "./hooks/useDatos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DatosProvider>
      <RouterProvider router={router} />
    </DatosProvider>
  </React.StrictMode>
);
