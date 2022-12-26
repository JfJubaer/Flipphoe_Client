import { Player } from "@lottiefiles/react-lottie-player";
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";

const Products = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products123"],
    queryFn: () =>
      fetch("https://server-kappa-roan.vercel.app/products").then((res) => res.json()),
  });

  return (
    <div>
      <div>
        <div className="lg:flex items-center text-center mx-auto lg:justify-center">
          <div>
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Explore Our Products
              <span class="sm:block"> at reasonable cost </span>
            </h1>
          </div>
          <div>
            <Player
              autoplay
              loop
              src="https://assets5.lottiefiles.com/packages/lf20_Ssbj3iUBzB.json"
              style={{ height: "300px", width: "300px" }}
            ></Player>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 lg:ml-20 my-20">
        {products.map((p, i) => (
          <Product key={i} p={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
