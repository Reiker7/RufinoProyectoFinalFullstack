import { createBrowserRouter } from "react-router-dom";
import E404 from "./E404";
import Private from "../page/Private";
import Home from "../page/Home";
import Champions from "../page/Champions";
import PublicLayout from "../layouts/PublicLayout";
import Games from "../page/Games";
import Free from "../page/Free";
import Register from "../page/Register";
import Login from "../page/Login";
import ProtectedRoute from "../utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <E404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/private",
        element: (
          <ProtectedRoute>
            <Private />
          </ProtectedRoute>
        ),
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
        path: "/champions",
        element: <Champions />,
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
        path: "/free",
        element: <Free />,
      },
    ],
  },
]);

export default router;
