import { createContext, useState } from "react";

export const CheckoutContext = createContext();

const CheckoutProvider = ({children})=>{

    const [checkoutAmount,setCheckoutAmount] = useState(0);

    return (
        <CheckoutContext.Provider value={{checkoutAmount,setCheckoutAmount}}>
            {children}
        </CheckoutContext.Provider>
    );

}

export default CheckoutProvider;