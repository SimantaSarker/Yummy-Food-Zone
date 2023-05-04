import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import ChefRecipeLayout from "../layouts/ChefRecipeLayout";
import ChefRecipe from "../pages/Home/ChefRecipe/ChefRecipe";
import Register from "../pages/Home/Register/Register";
import Login from "../pages/Home/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path: "chefRecipe/:id",
        element: <PrivateRoutes><ChefRecipe></ChefRecipe></PrivateRoutes>,
        loader:({params})=>fetch(`https://assignment-10-server-simantasarker.vercel.app/chefs/${params.id}`)
      },
    ],
  },
 
]);
export default router;
