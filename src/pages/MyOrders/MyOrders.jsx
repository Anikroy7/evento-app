import React, { useEffect, useState } from "react";
import {
  useGetHomeByIdQuery,
  useUpdateHomebyIdMutation,
} from "../../features/api/homesApi";
import { differenceInDays, formatDistance, isToday } from "date-fns";
import { Box } from "@mui/material";

import Loading from "../../Components/utils/Loading";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetOrdersQuery } from "../../features/api/orderApi";

function Row({ order, id: orderID }) {
  const [updateHome, { isLoading: updateHomeLoading }] =
    useUpdateHomebyIdMutation();

  const {
    attributes: {
      stripeId,
      homeId,
      arrivalDate,
      phone,
      message,
      depratureDate,
      totalGuests,
    },
  } = order;

  const { data: updatedHome, isLoading: getHomeByIdLoading } =
    useGetHomeByIdQuery(homeId);

  if (getHomeByIdLoading || updateHomeLoading) return <Loading />;
  // console.log(updatedHome, homeId);

  const availableSeats = updatedHome?.data?.attributes?.availableSeats;
  // console.log(updatedHome);
  const {
    attributes: { title, address, price, image },
  } = updatedHome.data;
  const imageURl = image.data.attributes.formats.small.url;

  const totalDays = differenceInDays(
    new Date(depratureDate),
    new Date(arrivalDate)
  );

//update avaliable seats after expired bokking dates
  if (isToday(new Date(arrivalDate))) {
    const distance = formatDistance(
      new Date(arrivalDate),
      new Date(depratureDate),
      { includeSeconds: true }
    );
    console.log(distance);
    if (distance === "less than 5 seconds") {
      updateHome({
        id: homeId,
        updatedData: {
          availableSeats: parseInt(availableSeats) + parseInt(totalGuests),
        },
      });
    }
  }

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <img height={100} src={imageURl} alt="" />
        </TableCell>
        <TableCell component="th" scope="row">
          {orderID}
        </TableCell>
        <TableCell align="right">{stripeId}</TableCell>
        <TableCell align="right">{title}</TableCell>
        <TableCell align="right">{address}</TableCell>
        <TableCell align="right">{arrivalDate}</TableCell>
        <TableCell align="right">{depratureDate}</TableCell>
        <TableCell align="right">{totalGuests}</TableCell>
        <TableCell align="right">{price}</TableCell>
        <TableCell align="right">{phone}</TableCell>
        <TableCell align="right">{message}</TableCell>
        <TableCell align="right">{totalDays}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const MyOrders = () => {
  const { isLoading, data } = useGetOrdersQuery();
  const userId = localStorage.getItem("id");
  // console.log(isLoading);
  if (isLoading) return <Loading />;
  const filteredOrder = data.data.filter((order) => {
    return order.attributes.userId.data.id == userId;
  });

  return (
    <Box>
      {filteredOrder.length > 0 ? (
        <>
          <TableContainer component={Paper} sx={{ p: 3 }}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Order ID</TableCell>
                  <TableCell>Transaction ID</TableCell>
                  <TableCell>Home Title</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Arrival Date</TableCell>
                  <TableCell>Deprature Date</TableCell>
                  <TableCell>Total Guests</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Message</TableCell>
                  <TableCell>Total Days</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredOrder.map((order) => {
                  return <Row key={order.id} id={order.id} order={order} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Box
          sx={{
            textAlign: "center",
            fontSize: 60,
          }}
        >
          No orders found!!
        </Box>
      )}
    </Box>
  );
};

export default MyOrders;
