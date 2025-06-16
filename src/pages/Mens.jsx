import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalProvider";
import { MoonLoader } from "react-spinners";
import Card from "../components/Card";

const Mens = () => {
  const [productsTshirts, setProductsTshirts] = useState([]);
  const [productsShoes, setProductsShoes] = useState([]);
  const [productsWatches, setProductsWatches] = useState([]);
  const { loading, setLoading, theme } = useContext(GlobalContext);

  const fetchProductsTshirts = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/mens-shirts`
      );
      setProductsTshirts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsShoes = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/mens-shoes`
      );
      setProductsShoes(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsWatches = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/mens-watches`
      );
      setProductsWatches(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProductsTshirts();
    fetchProductsShoes();
    fetchProductsWatches();
    setLoading(false);
  }, []);

  return (
    <div
      className={`${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
      }`}
    >
      <div className={`container mx-auto px-4 md:px-10 transition-all duration-300 `}>
        {loading ? (
          <div className="flex items-center justify-center h-screen ">
            <MoonLoader color={theme === "light" ? "#060606" : "#ffffff"} />
          </div>
        ) : (
          <div >
            <div>
              <h2 className="text-xl text-center font-semibold pt-24 underline">
                Mens T-Shirts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsTshirts.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Mens Shoes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsShoes.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Mens Watches
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsWatches.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mens;
