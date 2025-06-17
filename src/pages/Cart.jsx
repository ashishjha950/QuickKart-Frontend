import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { GlobalContext } from "../context/GlobalProvider";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import CartCard from "../components/CartCard";
import CartDetail from "../components/CartDetail";
import { useNavigate } from "react-router-dom";
import { CheckoutContext } from "../context/CheckoutProvider";
import Interest from "./Interest";

const Cart = () => {
  const { cartItems, setCartItems, totalQuantity, setTotalQuantity } =
    useContext(CartContext);
  const { theme, loading, setLoading } = useContext(GlobalContext);
  const { setCheckoutAmount } = useContext(CheckoutContext);
  const [cart, setCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState();

  const fetchCartItems = async () => {
    try {
      const response = await Promise.all(
        cartItems.map((item) =>
          axios.get(`https://dummyjson.com/products/${item.id}`)
        )
      );
      const CartData = response.map((res, index) => ({
        ...res.data,
        quantity: cartItems[index].quantity
      }));
      setCart(CartData);

      const totalCharges = CartData.reduce((acc, res) => acc + res.price*res.quantity, 0);
      setTotalPrice((totalCharges * 85).toFixed(2));
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
    finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();

  const navigateToCheckout = () => {
    setCheckoutAmount(totalPrice);
    setTotalQuantity(0)
    setCartItems([])
    navigate("/checkout");
  }

  useEffect(() => {
  
    setLoading(true);
    fetchCartItems();
  }, [cartItems]);

  return (
    <div
      className={` ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
        }`}
    >
      <div className="container mx-auto px-4 transition-all duration-300">
        {totalQuantity === 0 ? (
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">
              Your cart is empty. Start shopping!
            </h1>
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center h-screen">
            <MoonLoader color={theme === "light" ? "#060606" : "#ffffff"} />
          </div>
        ) : (
          <div>
            <div className="flex flex-col sm:flex-row items-start gap-3 py-8">
              <div className={`w-full rounded px-8 ${theme === "light" ? 'bg-white ' : 'bg-gray-900 '}`}>
                <div className="grid grid-cols-1 gap-4 py-6 w-full">
                  {cart.map((product) => (
                    <CartCard product={product} key={product.id} />
                  ))}
                </div>
                <div className="flex justify-end items-center pb-6">
                  <button
                    onClick={navigateToCheckout}
                    className="bg-[#1E3A8A] text-white px-5 py-2 rounded cursor-pointer"
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
              <CartDetail totalQuantity={totalQuantity} totalPrice={totalPrice} />
            </div>
            <Interest />
          </div>

        )}
      </div>
    </div>
  );
};

export default Cart;
