import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";
import { FaStar, FaStarHalfAlt, FaRegStar, FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../context/CartProvider";

const CartCard = ({ product }) => {
  const { theme } = useContext(GlobalContext);
  const { updatedCart,removeFromCart } = useContext(CartContext);

  return (
    <div
      key={product.id}
      className={`flex items-center sm:items-start flex-col border rounded-lg p-1 sm:p-4 shadow-lg transition duration-300 hover:shadow-xl transform hover:scale-101 ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        }`}
    >
      <div className="flex items-center sm:items-start w-full gap-4">
        <div className="flex flex-col justify-between items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-40 object-contain w-full rounded-lg"
          />
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => updatedCart(product.id, product.quantity - 1)}
              disabled={product.quantity <= 1}
              className="text-red-500 cursor-pointer disabled:text-gray-400"
            >
              <FaMinus />
            </button>
            <span className="mx-1">{product.quantity}</span>
            <button
              onClick={() => updatedCart(product.id, product.quantity + 1)}
              className="text-green-500 cursor-pointer"
            >
              <FaPlus />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-baseline h-full">
          <Link to={`/products/${product.id}`}>
            <h3 className="text-md md:text-lg font-bold mt-2">{product.title}</h3>
            <h4 className="text-sm md:text-base text-gray-500">{product.brand}</h4>
          </Link>

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

          <div className="flex items-center flex-col sm:flex-row gap-1 mt-3">
            <p className="text-blue-600 font-semibold text-lg">
              ₹{(product.price * 85).toFixed(2)}
            </p>
            <p className="text-gray-600 font-light text-sm line-through">
              ₹
              {(
                (product.price +
                  (product.discountPercentage / 100) * product.price) *
                85
              ).toFixed(2)}
            </p>
          </div>

          <div className="mt-10">
            <button onClick={()=>removeFromCart(product.id)} className="font-semibold cursor-pointer text-red-600">
              <span>REMOVE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
