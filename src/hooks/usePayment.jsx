import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import Loading from "../Components/utils/Loading";
import { usePostOrderMutation } from "../features/api/paymentApi";

const usePayment = (attributes, message) => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

  const [postOrder, { isLoading, isSuccess, data }] = usePostOrderMutation();
  console.log(attributes);

  useEffect(() => {
    if (data && data.stripeSession) {
      const id = data.stripeSession.id;
      const redirectToCheckout = async () => {
        const stripe = await stripePromise;
        await stripe.redirectToCheckout({
          sessionId: id,
        });
      };
      redirectToCheckout();
    }
  }, [data]);

  if (!isSuccess && isLoading && !data) {
    return <Loading></Loading>;
  }

  const handlePayment = async () => {
    try {
      if (!message) {
        alert("Please say something about yourself to your host?");
      } else {
        console.log(attributes);
        const home= {
          data: attributes,
          message
        }
        await postOrder(home).unwrap();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return { handlePayment };
};

export default usePayment;
