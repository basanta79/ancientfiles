import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./ui/pages/Home.jsx";
import Dashboard from "./ui/pages/Dashboard.jsx";
import NotFound from "./ui/pages/Notfound.jsx";
import ProtectedRoute from "./ui/components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/dashboard",
        element: <ProtectedRoute />,
        children: [{ path: "/dashboard", element: <Dashboard /> }],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
