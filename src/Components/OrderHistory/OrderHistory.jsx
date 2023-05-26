import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useGetHomeByIdQuery } from "../../features/api/homesApi";
import Loading from "../utils/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const OrderHistory = ({ handleClose, ohOpen, id }) => {
  const { data, isLoading } = useGetHomeByIdQuery(id);
  if (isLoading) return <Loading />;

  const orders = data.data.attributes.orders.data;
  console.log(orders);

  return (
    <div>
      <Modal
        open={ohOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography variant="h4" align="center" gutterBottom>
              Order History
            </Typography>
            <TableContainer>
              {orders.length > 0 ? (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Transaction ID</TableCell>
                      <TableCell>Arrival Date</TableCell>
                      <TableCell>Deprature Date</TableCell>
                      <TableCell>Total Guests</TableCell>
                      <TableCell>Total Price</TableCell>
                      <TableCell>Phone Number</TableCell>
                      <TableCell>Message</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map(
                      ({
                        id,
                        attributes: {
                          stripeId,
                          arrivalDate,
                          depratureDate,
                          phone,
                          message,
                          price,
                          totalGuests
                        },
                      }) => (
                        <TableRow key={id}>
                          <TableCell>{stripeId}</TableCell>
                          <TableCell>{arrivalDate}</TableCell>
                          <TableCell>{depratureDate}</TableCell>
                          <TableCell>{totalGuests}</TableCell>
                          <TableCell>{price}</TableCell>
                          <TableCell>{phone}</TableCell>
                          <TableCell>{message}</TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              ) : (
                <Box sx={{textAlign:"center"}}>Sorry!! No orders founds for this home.</Box>
              )}
            </TableContainer>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default OrderHistory;
