import { Player } from "@lottiefiles/react-lottie-player";
import { useQuery } from "@tanstack/react-query";
// import Modal from "./Modal";
import Product from "./Product";

const Products = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products123"],
    queryFn: () =>
      fetch("https://server-kappa-roan.vercel.app/products").then((res) => res.json()),
  });
  console.log("prod", products);
  return (
    <div>
      <div>
        <div className="lg:flex items-center">
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
      <div className="grid lg:grid-cols-2 gap-5 my-10">
        {products.map((p, i) => (
          <Product key={i} p={p}></Product>
        ))}
      </div>
      {/* <Modal></Modal> */}
    </div>
  );
};

export default Products;
