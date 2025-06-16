import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const CartCard = ({product}) => {

    const { theme } = useContext(GlobalContext)

  return (
    <div>
      <Link
        to={`/products/${product.id}`}
        key={product.id}
        className={`flex items-center sm:items-start flex-col border rounded-lg p-1 sm:p-4 shadow-lg transition duration-300 hover:shadow-xl transform hover:scale-101 ${
          theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        }`}
      >

        <div className="flex items-center sm:items-start w-full">

        <div className="flex justify-between items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-40 object-contain w-full rounded-lg"
          />
        </div>

        <div>

        <h3 className="text-md md:text-lg font-bold mt-2">{product.title}</h3>
        <h4 className="text-sm md:text-base text-gray-500">{product.brand}</h4>

        <div className="flex justify-start mt-2 text-yellow-500 space-x-1">
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

        <div className="flex items-center gap-3 mt-3">
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
        </div>
        </div>

      </Link>
    </div>
  );
};

export default CartCard;
