import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RootLayout from "../Components/RootLayout/RootLayout";
import Error from "../Pages/Error";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      
    ],
  },
]);

export default router;
