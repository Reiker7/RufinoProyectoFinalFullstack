import { createHashRouter } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import Home from "../page/Home"
import Champions from "../page/Champions"
import Free from "../page/Free"
import Register from "../page/Register"
import Login from "../page/Login"
import Games from "../page/Games"
import Private from "../page/Private"
import ProtectedRoute from "../hooks/ProtectedRoute";
import Info from "../page/Info";


const router = createHashRouter([
  {
    path: "/",
    element: <PublicLayout />,
    // errorElement: <E404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/champions",
        element: <Champions />,
      },
      {
        path: "/free",
        element: <Free />,
      },
            {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/champions/:id",
        element: <Info />,
      },
      {
        path: "/games",
        element: (
          <ProtectedRoute>
            <Games />
          </ProtectedRoute>
        ),
      },
      {
        path: "/private",
        element: (
          <ProtectedRoute>
            <Private />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;