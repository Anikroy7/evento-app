import * as React from "react";
import { useGetOrdersQuery } from "../../features/api/orderApi";
import Loading from "../../Components/utils/Loading";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetHomeByIdQuery } from "../../features/api/homesApi";

function Row({ order, id: orderID }) {
  const {
    attributes: { stripeId, homeId },
  } = order;
  const {data, isLoading} = useGetHomeByIdQuery(homeId);

  if(isLoading) return <Loading/>

  const { attributes:{title, address, price, image}}= data.data
  const imageURl= image.data.attributes.formats.small.url

  console.log('home', data);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <img
            height={100}
            src={imageURl}
            alt=""
          />
        </TableCell>
        <TableCell component="th" scope="row">
          {orderID}
        </TableCell>
        <TableCell align="right">{stripeId}</TableCell>
        <TableCell align="right">{title}</TableCell>
        <TableCell align="right">{address}</TableCell>
        <TableCell align="right">{price}</TableCell>
        <TableCell align="right">7</TableCell>
        <TableCell align="right">9</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const MyOrders = () => {
  const { isLoading, data } = useGetOrdersQuery();
  const userId = localStorage.getItem("id");
  if (isLoading) return <Loading />;
  const filteredOrder = data.data.filter((order) => {
    return order.attributes.userId.data.id == userId;
  });
  


  return (
    <TableContainer component={Paper} sx={{ p: 3 }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Order ID</TableCell>
            <TableCell>Transaction ID</TableCell>
            <TableCell>Home Title</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Total Days</TableCell>
            <TableCell>Total Guests</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredOrder.map((order) => {
            return <Row key={order.id} id={order.id} order={order} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyOrders;
