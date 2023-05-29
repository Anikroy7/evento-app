import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import Loading from "../Components/utils/Loading";
import { useCreateOrderMutation } from "../features/api/orderApi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useGetHomeByIdQuery,
  useUpdateHomebyIdMutation,
} from "../features/api/homesApi";
import { formatDistance } from "date-fns";

const usePayment = (attributes, message, phoneNumber, totalPrice) => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
  const { homeId } = useParams();
  const [updateHome] = useUpdateHomebyIdMutation();
  const {
    filter: {
      arrivalDate,
      depratureDate,
      guests: { adults, childs },
    },
  } = useSelector((state) => state);
  const totalGuests = adults + childs;
  console.log("totalGuests", totalGuests);
  const [createOrder, { isLoading, isSuccess, data }] =
    useCreateOrderMutation();
  const { data: updatedHome } = useGetHomeByIdQuery(homeId);

  const availableSeats= updatedHome?.data?.attributes?.availableSeats

  console.log(availableSeats);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    if (data && data.stripeSession) {
      updateHome({
        id: data.data.homeId,
        updatedData: {
          orders: data.data.id,
          availableSeats: parseInt(availableSeats) - parseInt(totalGuests),
        },
      });
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
          totalPrice,
          totalGuests,
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
