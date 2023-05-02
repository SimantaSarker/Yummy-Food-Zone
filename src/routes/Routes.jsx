import {
  createBrowserRouter,
} from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import BlogLayout from "../layouts/BlogLayout";
import ChefRecipeLayout from "../layouts/ChefRecipeLayout";
import ChefRecipe from "../pages/Home/ChefRecipe/ChefRecipe";
const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
    ],
  },
  {
    path:'blog',
    element:<BlogLayout></BlogLayout>,
    children:[
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  },
  {
    path:'chefRecipe',
    element:<ChefRecipeLayout></ChefRecipeLayout>,
    children:[
      {
        path:':id',
        element:<ChefRecipe></ChefRecipe>
      }
    ]
  }
])
export default router;