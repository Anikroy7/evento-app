import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../Components/utils/Loading";
import { useGetHomeByIdQuery } from "../../../features/api/homesApi";
import ReserveCard from "../../HomeDetails/ReserveCard";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { homeId } = useParams();
  const { data, isLoading } = useGetHomeByIdQuery(homeId);
  const [cardError, setCardError]= useState('')

  if (isLoading) {
    return <Loading />;
  }
  const { id, attributes } = data.data;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    console.log("card", card);
    if (!card) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message)
      console.log("error", error);
    } else {
      console.log("paymentMethod", paymentMethod);
    }
  };

  console.log("stripe", stripe, "elements", elements);
  return (
    <Stack container maxWidth={"lg"} marginX={"auto"}>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={8}
          xl={8}
          mt={20}
          ml={0}
          py={3}
          borderRadius="10px"
        >
          <Box
            my={"auto"}
            height={"auto"}
            maxWidth={"60%"}
            p="20px"
            border={"2px solid #aab7c4"}
          >
            <form onSubmit={handleSubmit}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      padding: "20px",
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
              <Box mt={9} position={"relative"}>
                <Typography
                  disabled={!stripe}
                  type={"submit"}
                  component={"input"}
                  display={"flex"}
                  value={"Pay"}
                  color={"white"}
                  mt={2}
                  alignItems="center"
                  justifyContent={"center"}
                  width={"40%"}
                  sx={{
                    background: "linear-gradient(to right, #11998e, #38ef7d)",
                    border: "none",
                    boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
                    borderRadius: "5px",
                    "&:hover": {
                      /*                       background: "linear-gradient(to right, #38ef7d,#11998e)", */
                      transition: "1s",
                      cursor: "pointer",
                    },
                  }}
                  padding={1}
                />
                {cardError&& <Box py={2} sx={{color:'red'}}>{cardError}. Please try again!!</Box>}
            {/*     <PaymentIcon
                  sx={{
                    position: "absolute",
                    left: 130,
                    bottom: 8,
                    color: "white",
                  }}
                /> */}
              </Box>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} mt={3} py={3}>
          <ReserveCard data={attributes} key={id} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default CheckOutForm;
