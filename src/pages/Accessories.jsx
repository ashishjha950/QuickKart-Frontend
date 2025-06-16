import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalProvider";
import { MoonLoader } from "react-spinners";
import Card from "../components/Card";

const Accessories = () => {
  const [productsSports, setProductsSports] = useState([]);
  const [productsGlasses, setProductsGlasses] = useState([]);
  const [productsHome, setProductsHome] = useState([]);
  const [productsKitchen, setProductsKitchen] = useState([]);
  const { loading, setLoading, theme } = useContext(GlobalContext);

  const fetchProductsSports = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/sports-accessories`
      );
      setProductsSports(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsKitchen = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/kitchen-accessories`
      );
      setProductsKitchen(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsGlasses = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/sunglasses`
      );
      setProductsGlasses(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsHome = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/home-decoration`
      );
      setProductsHome(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProductsSports();
    fetchProductsKitchen();
    fetchProductsGlasses();
    fetchProductsHome();
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
                Sports Accessories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsSports.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Sunglasses
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsGlasses.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Kitchen Accessories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsKitchen.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Home Decoration
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsHome.map((product) => (
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

export default Accessories;
