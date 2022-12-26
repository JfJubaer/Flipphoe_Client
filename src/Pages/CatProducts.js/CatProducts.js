import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Products/Product";

const CatProducts = () => {
  const products = useLoaderData();
  console.log("cat", products);

  return (
    <div className=" grid lg:grid-cols-2 gap-10 lg:container my-20 mx-auto">
      {products.map((p, i) => (
        <Product key={i} p={p}></Product>
      ))}
    </div>
  );
};

export default CatProducts;
