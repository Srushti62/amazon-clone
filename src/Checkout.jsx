import React from 'react';
// import "./Checkout.css";
import {useStateValue} from "./StateProvider";

const Checkout = () => {
    const [{basket}] = useStateValue();

    return(
        <>
            <div className="checkout">
                <img className="checkout_ad" src="" alt="Checkout Ad Banner" />

                {(basket.length === 0) 
                    ? <div><h2 className="checkout_title">Your Shopping Basket is Empty</h2></div> 
                    : <div><h2 className="checkout_title">Your Shopping Basket</h2></div> 
                }
            </div>
        </>
    );
}

export default Checkout;