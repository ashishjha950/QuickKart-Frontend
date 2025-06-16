import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalProvider";
import { MoonLoader } from "react-spinners";
import CardPage from "../components/CardPage";

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
    finally{
      setLoading(false);
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
              <CardPage products={productsTshirts} Title={"Womens Dresses"}/>
              <CardPage products={productsShoes} Title={"Womens Shoes"}/>
              <CardPage products={productsJewellery} Title={"Womens Jewellery"}/>
              <CardPage products={productsBags} Title={"Womens Bags"}/>
              <CardPage products={productsTops} Title={"Tops"}/>
              <CardPage products={productsWatches} Title={"Womens Watches"}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Womens;
