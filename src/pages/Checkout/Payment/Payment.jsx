import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe('pk_test_51L1qwxD4PFFI7RawB9Gf0codBg6vO7MkSnnQtQIPySVa6xUG5t3Gfywq69zQvRVbAm4t667sjHMC9sl5HlwO1BPr00uvEMj931');

const Payment = () => {
  /* const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51L1qwxD4PFFI7Raw4FVNW8znDOtp9R62kS4TpgL6vXPUYh6eKyfpfQh5G9LCKLA2BmnX2URFZZyOt20j3RPjBueG00UDdruAfs',
  }; */

  return (
    <Elements stripe={stripePromise}>
       <CheckOutForm />
    </Elements>
    
  );
};

export default Payment;


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