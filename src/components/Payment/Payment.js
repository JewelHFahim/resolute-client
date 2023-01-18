import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {

  const stripePromise = loadStripe(
    "pk_test_51M6RfEDZfW4raXLHxPdUwlv524xCbGHg0ttGbyCw75ndTwpt9ViRHzK3NH3GB8c79dUi9IUXSdKoNAkZX4dUrS0100Ik92ppPa"
  );



  return (
    <div className="m-10 flex justify-center">
      <div>
      <p className="text-2xl text-green-700 font-semibold text-center">Payment for</p>
      <p>{} total</p>
        <div className="w-96 my-6 border border-red-600">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
