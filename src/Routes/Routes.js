import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Main from "../LayOut/Main";
import AddProducts from "../Pages/AddProducts/AddProducts";
import CatProducts from "../Pages/CatProducts.js/CatProducts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Products from "../Pages/Products/Products";
import NoRoute from "./NoRoute";
import MyProducts from "../Pages/AddProducts/MyProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/addproducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/cat/:id",
        element: <CatProducts></CatProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <NoRoute></NoRoute>,
  },
]);
