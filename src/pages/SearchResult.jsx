import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import Card from "../components/Card";

const SearchResult = () => {
  const { theme, searchTerm, loading, setLoading } = useContext(GlobalContext);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchSearchResult = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        setSearchResult(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) fetchSearchResult();
  }, [searchTerm, setLoading]);

  return (
    <div>
      {searchTerm && (
        <div
          className={`${
            theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
          } rounded`}
        >
          <div className="container mx-auto px-4 md:px-10 transition-all duration-300">
            {loading ? (
              <div className="flex items-center justify-center h-screen">
                <MoonLoader color={theme === "light" ? "#060606" : "#ffffff"} />
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold py-2 underline">
                  Search Results:
                </h2>
                {searchResult.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                    {searchResult.map((product) => (
                      <Card product={product} key={product.id} />
                    ))}
                  </div>
                ) : (
                  <div className="py-6 text-center">
                    <h3 className="text-2xl font-medium">
                      No results found for "<span className="italic">{searchTerm}</span>"
                    </h3>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;