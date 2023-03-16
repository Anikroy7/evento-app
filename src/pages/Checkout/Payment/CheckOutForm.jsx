import { Button, Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../Components/utils/Loading";
import { useGetHomeByIdQuery } from "../../../features/api/homesApi";
import ReserveCard from "../../HomeDetails/ReserveCard";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { homeId } = useParams();
  const { data, isLoading } = useGetHomeByIdQuery(homeId);

  if (isLoading) {
    return <Loading />;
  }
  const { id, attributes } = data.data;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };

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
          <Box my={'auto'} height={'auto'} maxWidth={'60%'} p="20px" border={'2px solid #aab7c4'}>
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
              <Button sx={{ mt: 5 }} type="submit" disabled={!stripe}>
                Pay with credit card
              </Button>
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
