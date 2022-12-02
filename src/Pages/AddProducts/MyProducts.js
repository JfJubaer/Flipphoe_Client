import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Product from "../Products/Product";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const { data, isLoading } = useQuery({
    queryKey: ["myproducts", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/myproducts/abc2@gmail.com`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return;
  }
  console.log("hello", data);

  return (
    <div className=" grid grid-cols-2 gap-5">
      {data.map((d) => (
        <Product p={d}></Product>
      ))}
    </div>
  );
};

export default MyProducts;
