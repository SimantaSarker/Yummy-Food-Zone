import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import ChefRecipeLayout from "../layouts/ChefRecipeLayout";
import ChefRecipe from "../pages/Home/ChefRecipe/ChefRecipe";
import Register from "../pages/Home/Register/Register";
import Login from "../pages/Home/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
      }
    ],
  },
 
  {
    path: "chefRecipe",
    element: <ChefRecipeLayout></ChefRecipeLayout>,
    children: [
      {
        path: ":id",
        element: <ChefRecipe></ChefRecipe>,
        loader:({params})=>fetch(`http://localhost:4000/chefs/${params.id}`)
      },
    ],
  },
]);
export default router;
