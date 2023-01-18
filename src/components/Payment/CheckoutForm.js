import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const price = 12;

  // useEffect(() => {
  //     fetch("https://crud-task-server.vercel.app/create-payment-intent", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json",
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //      },
  //       body: JSON.stringify({ price }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setClientSecret(data.clientSecret));
  //   }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: "Jewel Hossain Fahim Vai",
            email: "jhf@g.com",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      console.log("paymentIntent:", paymentIntent);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="border border-slate-300 p-2 m-2"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="flex items-center">
        <button
          className="btn btn-outline btn-sm mx-2 rounded-md"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        <p className="text-error text-semibold">{cardError}</p>
      </div>
    </form>
  );
};

export default CheckoutForm;
