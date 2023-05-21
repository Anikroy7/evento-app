import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import Loading from "../Components/utils/Loading";
import { useCreateOrderMutation } from "../features/api/orderApi";
import { useParams } from "react-router-dom";

const usePayment = (attributes,message) => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
  const {homeId} = useParams();
  const [createOrder, { isLoading, isSuccess, data }] =
    useCreateOrderMutation();
const userId =localStorage.getItem('id')

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
        const data= {
          homeId,
          userId,
          message,
          home: attributes
        }
        createOrder(data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return { handlePayment };
};

export default usePayment;
