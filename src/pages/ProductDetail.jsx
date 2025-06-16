import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context/GlobalProvider";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MoonLoader } from "react-spinners";
import ReviewCard from "../components/ReviewCard";
import Interest from "./Interest";
import { CartContext } from "../context/CartProvider";
import { CheckoutContext } from "../context/CheckoutProvider";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProductDetail] = useState(null);
  const { theme, loading, setLoading,setInterest } = useContext(GlobalContext);
  const {addToCart} = useContext(CartContext);
  const {setCheckoutAmount} = useContext(CheckoutContext)

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProductDetail(response.data);
        setInterest(response.data.category);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  const navigate = useNavigate();

  const handleAddToCart = (ProductId) => {
    addToCart(ProductId);
    navigate('/cart');
  };
  const handleBuyNow = (price) => {
    setCheckoutAmount(price*85);
      navigate("/checkout");
  };

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  hoverPause: false,
};

  return (
    <div
      className={`pt-20 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      {loading ? (
        <div className="flex items-center justify-center h-screen ">
          <MoonLoader color={theme === "light" ? "#060606" : "#ffffff"} />
        </div>
      ) : (
        product && (
          <div
            key={product.id}
            className={`container mx-auto rounded-lg p-4 transition duration-300 `}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">


              {product.images.length >1 ?(
                 <Slider {...settings}>
                 {product.images.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt='Product Image'
                      className="w-full h-96 sm:h-screen object-contain rounded"
                    />
                  </div>
                ))}
              </Slider>
              ):(
                <img
                  src={product.thumbnail}
                  alt='Product Image'
                  className="w-full h-96 sm:h-screen object-contain rounded"
                />
              )}



              <div className="p-4 ">
                <h3 className="text-lg font-bold mt-2">{product.title}</h3>
                <h4 className="text-sm text-gray-500">{product.brand}</h4>
                <h4 className="text-md text-gray-700">{product.description}</h4>

                <div className="flex text-yellow-500 space-x-1 mt-2">
                  {[...Array(5)].map((_, index) =>
                    product.rating >= index + 1 ? (
                      <FaStar key={index} />
                    ) : product.rating > index ? (
                      <FaStarHalfAlt key={index} />
                    ) : (
                      <FaRegStar key={index} />
                    )
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Rating: {product.rating}{" "}
                </p>

                <div className="flex items-center gap-2 justify-start mt-3">
                  <p className="text-blue-600 font-semibold text-lg">
                    ₹{(product.price*85).toFixed(2)}
                  </p>
                  <p className="text-gray-600 font-light text-sm line-through">
                    ₹
                    {(
                      (product.price +
                      (product.discountPercentage / 100) * product.price)*85
                    ).toFixed(2)}
                  </p>
                </div>

                <p className="text-sm text-gray-600">
                  Minimum Order- {product.minimumOrderQuantity}
                </p>
                <p className="text-sm mt-2 text-green-600">
                  {product.availabilityStatus}
                </p>
                <p className="text-sm text-red-500">
                  Only {product.stock} Left
                </p>
                <p className="text-sm text-gray-500">
                  Ships: {product.shippingInformation}
                </p>
                <p className="text-sm text-gray-500">
                  Return: {product.returnPolicy}
                </p>
                <p className="text-sm text-gray-500">
                  Warranty: {product.warrantyInformation}
                </p>

                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={()=>handleAddToCart(product.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded cursor-pointer"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={()=>handleBuyNow(product.price)}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded cursor-pointer"
                  >
                    Buy Now
                  </button>
                </div>

                <div>
                  <h4 className="text-md font-semibold mt-4">
                    Product Details
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    <li>Weight: {product.weight} kg</li>
                    <li>Category: {product.category}</li>
                    <li>Stock: {product.stock}</li>
                    <li>Rating: {product.rating}</li>
                    <li>Discount: {product.discountPercentage}%</li>
                    <li>Dimensions:</li>
                    <p>Depth:{product.dimensions.depth}</p>
                    <p>Height:{product.dimensions.height}</p>
                    <p>Width:{product.dimensions.width}</p>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`max-w-4xl my-10 mx-auto px-4 py-6 ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              } rounded-lg shadow transition-colors duration-300`}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                Reviews
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {product.reviews.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
            </div>
            <Interest/>
          </div>
        )
      )}
    </div>
  );
};

export default ProductDetail;
