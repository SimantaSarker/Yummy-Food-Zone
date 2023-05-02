import {
  createBrowserRouter,
} from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import BlogLayout from "../layouts/BlogLayout";
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
  }
])
export default router;