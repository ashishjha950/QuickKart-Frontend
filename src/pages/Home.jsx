import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalProvider";
import { MoonLoader } from "react-spinners";
import Interest from "./Interest";
import SearchResult from "./SearchResult";
import Card from "../components/Card";
import HomeCarousel from "../components/HomeCarousel";


const Home = () => {
  const [products, setProducts] = useState([]);
  const { loading, setLoading, theme } = useContext(GlobalContext);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=30`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      className={`${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
      }`}
    >

      <SearchResult />
      <HomeCarousel/>
      <Interest />

      <div className={`container mx-auto px-4 md:px-10 transition-all duration-300 `}>
        {loading ? (
          <div className="flex items-center justify-center h-screen ">
            <MoonLoader color={theme === "light" ? "#060606" : "#ffffff"} />
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold pt-20 underline">Products:-</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6">
              {products.map((product) => (<Card key={product.id} product={product} /> ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
