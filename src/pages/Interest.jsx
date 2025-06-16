import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalProvider";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import Card from "../components/Card";


const Interest = () => {

    const {theme,interest,loading,setLoading} = useContext(GlobalContext)

    const [interestProducts, setInterestProducts] = useState([]);

    useEffect(()=>{
        
        const fetchInterestProducts = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/category/${interest}`);
                setInterestProducts(response.data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        if (!interest) {
            setInterestProducts([]);
            return;
        }
        setLoading(true);
        fetchInterestProducts();  
        setLoading(false);      

    },[interest]); 
    
    return (
        <div>
            {interest && (
                <div
        className={`${
            theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
            } rounded`}
            >
            <div className={`container mx-auto px-4 md:px-10 transition-all duration-300 `}>
        {loading ? (
            <div className="flex items-center justify-center h-screen ">
            <MoonLoader color={theme === "light" ? "#060606" : "#ffffff"} />
          </div>
        ) : (
            <div>
              <h2 className="text-xl font-semibold pt-24 underline">
                Your Interest:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {interestProducts.map((product) => (
                    <Card product={product} key={product.id} />
                ))}
              </div>
            </div>
        )}
      </div>
    </div>
            )}
        </div>
  );
}

export default Interest