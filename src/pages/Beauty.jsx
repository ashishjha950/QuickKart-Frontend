import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalProvider";
import { MoonLoader } from "react-spinners";
import CardPage from "../components/CardPage";

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
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProductsMakeup();
    fetchProductsFragrance();
    fetchProductsSkinCare();
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
              <CardPage products={productsMakeup} Title={"Makeup"}/>
              <CardPage products={productsFragrances} Title={"Fragrances"}/>
              <CardPage products={productsSkinCare} Title={"Skin-Care"}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Beauty;
