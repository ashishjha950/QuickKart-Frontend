import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalProvider";
import { MoonLoader } from "react-spinners";
import Card from "../components/Card";

const Beauty = () => {
  const [productsMakeup, setProductsMakeup] = useState([]);
  const [productsFragrances, setProductsFragrances] = useState([]);
  const [productsSkinCare, setProductsSkinCare] = useState([]);
  const { loading, setLoading, theme } = useContext(GlobalContext);

  const fetchProductsMakeup = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/beauty`
      );
      setProductsMakeup(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsFragrance = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/fragrances`
      );
      setProductsFragrances(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsSkinCare = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/skin-care`
      );
      setProductsSkinCare(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProductsMakeup();
    fetchProductsFragrance();
    fetchProductsSkinCare();
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
                Makeup
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsMakeup.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
               Fragrances
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsFragrances.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Skin-Care
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsSkinCare.map((product) => (
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

export default Beauty;
