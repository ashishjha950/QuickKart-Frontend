import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalProvider";
import { MoonLoader } from "react-spinners";
import CardPage from "../components/CardPage";

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
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProductsSports();
    fetchProductsKitchen();
    fetchProductsGlasses();
    fetchProductsHome();
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
              <CardPage products={productsSports} Title={"Sports Accessories"}/>
              <CardPage products={productsGlasses} Title={"Sunglasses"}/>
              <CardPage products={productsKitchen} Title={"Kitchen Accessories"}/>
              <CardPage products={productsHome} Title={"Home Decoration"}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accessories;
