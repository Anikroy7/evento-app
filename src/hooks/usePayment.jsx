import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import Loading from "../Components/utils/Loading";
import { useCreateOrderMutation } from "../features/api/orderApi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useUpdateHomebyIdMutation } from "../features/api/homesApi";

const usePayment = (attributes, message, phoneNumber, totalPrice) => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
  const { homeId } = useParams();
  const [updateHome]= useUpdateHomebyIdMutation()
  const {
    filter: {
      arrivalDate,
      depratureDate,
    },
  } = useSelector((state) => state);
  const [createOrder, { isLoading, isSuccess, data }] =
    useCreateOrderMutation();

  const userId = localStorage.getItem("id");

  useEffect(() => {
    if (data && data.stripeSession) {
      updateHome({
        id: data.data.homeId,
        updatedData: {
          orders: data.data.id
        }
      })
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
        const data = {
          homeId,
          userId,
          arrivalDate,
          depratureDate,
          message,
          home: attributes,
          phoneNumber,
          totalPrice
        };
        createOrder(data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return { handlePayment };
};

export default usePayment;
