import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { usePostOrderMutation } from "../../../features/api/paymentApi";

const Payment = ({ attributes }) => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

  const [postOrder, { isLoading, isSuccess, isError, data }] =
    usePostOrderMutation();

  useEffect(() => {
    if (data && data.stripeSession) {
      console.log('I am inside use Effcect inside if');
      const id = data.stripeSession.id
      const redirectToCheckout = async () => {
        const stripe = await stripePromise;
        await stripe.redirectToCheckout({
          sessionId: id,
        });
      };
      redirectToCheckout()
    }
    console.log('I am inside use Effcect outside if');
  }, [data]);

  if (!isSuccess && isLoading && !data) {
    console.log("asce");
    return <p>Loading.....</p>;
  }

  const hadlePayment = async () => {
    try {
      await postOrder(attributes).unwrap();
    } catch (error) {
      console.log("error", error);
    }
  };
  // console.log(result);

  return (
    <div>
      <button onClick={hadlePayment}>Pay now</button>
    </div>
  );
};

export default Payment;
{
  /* <Elements stripe={stripePromise}>
       <CheckOutForm />
    </Elements> */
}

/* 

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle payment submission here
  };
 <Box>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Card Number"
            variant="outlined"
            value={cardNumber}
            onChange={handleCardNumberChange}
          /> <br />
          <TextField
            label="Expiry Date"
            variant="outlined"
            value={expiryDate}
            onChange={handleExpiryDateChange}
          /> <br />
          <TextField
            label="CVV"
            variant="outlined"
            value={cvv}
            onChange={handleCvvChange}
          /> <br />
          <Button type="submit" variant="contained" color="primary">
            Pay with Credit Card
          </Button>
          <Button type="submit" variant="contained" color="secondary">
            Pay with PayPal
          </Button>
        </form>
      </Box>

*/
