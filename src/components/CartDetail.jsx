import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

const CartDetail = ({ totalPrice, totalQuantity }) => {
  const { theme } = useContext(GlobalContext);

  return (
    <div
      className={`rounded-lg shadow-md p-6 w-full sm:w-96 transition-all duration-300 ${
        theme === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-white"
      }`}
    >
      <h2 className="text-xl font-semibold border-b pb-3">Cart Summary</h2>
      <div className="flex justify-between items-center py-2 text-md">
        <span className="font-medium">Total Items:</span>
        <span className="font-semibold">{totalQuantity}</span>
      </div>
      <div className="flex justify-between items-center py-2 text-md">
        <span className="font-medium">Total Price:</span>
        <span className="font-semibold text-blue-600">₹{totalPrice}</span>
      </div>
    </div>
  );
};

export default CartDetail;