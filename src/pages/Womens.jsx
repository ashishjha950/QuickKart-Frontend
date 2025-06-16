import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalProvider";
import { MoonLoader } from "react-spinners";
import Card from "../components/Card";

const Womens = () => {
  const [productsTshirts, setProductsTshirts] = useState([]);
  const [productsShoes, setProductsShoes] = useState([]);
  const [productsWatches, setProductsWatches] = useState([]);
  const [productsJewellery, setProductsJewellery] = useState([]);
  const [productsBags, setProductsBags] = useState([]);
  const [productsTops, setProductsTops] = useState([]);
  const { loading, setLoading, theme } = useContext(GlobalContext);

  const fetchProductsTshirts = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/womens-dresses`
      );
      setProductsTshirts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } 
  };

  const fetchProductsJewellery = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/womens-jewellery`
      );
      setProductsJewellery(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } 
  };

  const fetchProductsBags = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/womens-bags`
      );
      setProductsBags(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } 
  };

  const fetchProductsTops = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/tops`
      );
      setProductsTops(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } 
  };
  
  const fetchProductsShoes = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/womens-shoes`
      );
      setProductsShoes(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } 
  };

  const fetchProductsWatches = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/womens-watches`
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
    fetchProductsJewellery();
    fetchProductsBags();
    fetchProductsTops();
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
                Womens Dresses
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsTshirts.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Womens Shoes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsShoes.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Womens Jewellery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsJewellery.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Womens Bags
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsBags.map((product) => (
                 <Card product={product} key={product.id} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Tops
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {productsTops.map((product) => (
                  <Card product={product} key={product.id} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl text-center font-semibold pt-10 underline">
                Womens Watches
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

export default Womens;
