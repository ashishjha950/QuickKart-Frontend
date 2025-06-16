import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalProvider";
import { MoonLoader } from "react-spinners";
import Card from "../components/Card";

const Electronics = () => {
  const [productsSmartPhones, setProductsSmartPhones] = useState([]);
  const [productsLaptops, setProductsLaptops] = useState([]);
  const [productsVehicles, setProductsVehicles] = useState([]);
  const [productsTablets, setProductsTablets] = useState([]);
  const { loading, setLoading, theme } = useContext(GlobalContext);

  const fetchProductsSmartPhones = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/smartphones`
      );
      setProductsSmartPhones(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsLaptops = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/laptops`
      );
      setProductsLaptops(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsTablets = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/tablets`
      );
      setProductsTablets(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsVehicles = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/vehicle`
      );
      setProductsVehicles(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProductsSmartPhones();
    fetchProductsLaptops();
    fetchProductsTablets();
    fetchProductsVehicles();
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
                SmartPhones
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsSmartPhones.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Laptops
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsLaptops.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Tablets
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsTablets.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Electric Vehicles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsVehicles.map((product) => (
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

export default Electronics;
