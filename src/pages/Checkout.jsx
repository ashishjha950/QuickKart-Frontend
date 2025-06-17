import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../context/CheckoutProvider.jsx";
import { GlobalContext } from "../context/GlobalProvider.jsx";
import { CartContext } from "../context/CartProvider.jsx";
import { loadRazorpayScript } from "../utils/loadScript";

const Checkout = () => {
  const { theme } = useContext(GlobalContext);
  const { checkoutAmount } = useContext(CheckoutContext);
  const { cartItems } = useContext(CartContext);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [total, setTotal] = useState(0);

  const handlePayment = async () => {
    const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      setErrorMessage("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    const options = {
      key: "rzp_test_qhuTC7xxg2079v",
      currency: "INR",
      amount: Math.round(total * 100),
      name: "My Store",
      description: "Thank you for shopping",
      image: "/logo.png",
      handler: function (response) {
        setPaymentSuccess(true);
      },
      prefill: {
        name: "Ashish Kumar",
        email: "ashish@example.com",
        contact: "9876543210",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    if (checkoutAmount) {
      const total = parseFloat(checkoutAmount) + parseFloat(checkoutAmount * 0.05);
      setTotal((total).toFixed(2));
    }
  }, [checkoutAmount]);
  

  return (
    <div
      className={`pt-20 min-h-screen ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
        } flex flex-col items-center px-4`}
    >
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="w-full max-w-xl">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between border-b py-2">
            <p>{item.name} x {item.quantity}</p>
            <p>₹{item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-xl my-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{checkoutAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (5%)</span>
          <span>₹{(checkoutAmount*0.05).toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold border-t mt-2 pt-2">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      <form className="my-4 w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-2">Delivery Info</h2>

        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          placeholder="Name"
          defaultValue="Ashish Kumar"
          className="w-full p-2 mb-2 border rounded"
          readOnly={paymentSuccess}
        />

        <label className="block text-sm font-medium">Address</label>
        <input
          type="text"
          placeholder="Address"
          defaultValue="Ranchi, Jharkhand, India"
          className="w-full p-2 mb-2 border rounded"
          readOnly={paymentSuccess}
        />

        <label className="block text-sm font-medium">Phone</label>
        <input
          type="text"
          placeholder="Phone"
          defaultValue="9876543210"
          className="w-full p-2 mb-2 border rounded"
          readOnly={paymentSuccess}
        />

        <label className="block text-sm font-medium">Pin Code</label>
        <input
          type="text"
          placeholder="Pin Code"
          defaultValue="834001"
          className="w-full p-2 mb-2 border rounded"
          readOnly={paymentSuccess}
        />
      </form>

      {!paymentSuccess ? (
        <>
          {errorMessage && (
            <p className="text-red-500 font-semibold mb-4">{errorMessage}</p>
          )}
          <button
            onClick={handlePayment}
            className="bg-green-600 hover:bg-green-700 transition-transform transform hover:scale-105 duration-500 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
            aria-label="Proceed with Razorpay"
          >
            Pay Now with Razorpay
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-500 mt-5">🎉 Payment Successful!</h2>
          <p className="text-gray-500 mt-2">Thank you for your purchase. Your order is being processed.</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
