import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalProvider";
import { MoonLoader } from "react-spinners";
import CardPage from "../components/CardPage";

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
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProductsSmartPhones();
    fetchProductsLaptops();
    fetchProductsTablets();
    fetchProductsVehicles();
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
              <CardPage products={productsSmartPhones} Title={"SmartPhones"}/>
              <CardPage products={productsLaptops} Title={"Laptops"}/>
              <CardPage products={productsTablets} Title={"Tablets"}/>
              <CardPage products={productsVehicles} Title={"Electric Vehicles"}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Electronics;
