import { useContext, useState } from "react";
import { CheckoutContext } from "../context/CheckoutProvider.jsx";
import { GlobalContext } from "../context/GlobalProvider.jsx";
import { loadRazorpayScript } from "../utils/loadScript";

const Checkout = () => {
  const { theme } = useContext(GlobalContext);
  const { checkoutAmount } = useContext(CheckoutContext);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePayment = async () => {
    const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      setErrorMessage("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    const options = {
      key: "rzp_test_qhuTC7xxg2079v",
      currency: "INR",
      amount: Math.round(checkoutAmount * 100), 
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

  return (
    <div
      className={`pt-20 min-h-screen ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
      } flex flex-col items-center justify-center`}
    >
      <h1 className="text-center text-3xl font-bold mb-6">
        Total Amount: ₹{checkoutAmount}
      </h1>

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