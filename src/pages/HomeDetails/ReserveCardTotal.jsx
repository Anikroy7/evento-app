import { Divider, ListItem, ListItemText } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { differenceInDays } from "date-fns";
import * as React from "react";
import { useSelector } from "react-redux";

const ReserveCardTotal = ({ data, setTotalPrice }) => {
  const {
    filter: {
      depratureDate,
      arrivalDate,
      guests: { childs, adults },
    },
  } = useSelector((state) => state);

  const { price, cleaningFee, serviceFee } = data;
  const days = differenceInDays(new Date(depratureDate), new Date(arrivalDate));

  const totalPriceForAdults = price * adults * days;
  const totalPriceForChilds = (price / 2) * childs * days;
  const totalPrice =
    totalPriceForAdults + totalPriceForChilds + cleaningFee + serviceFee;
  if (setTotalPrice) {
    setTotalPrice(totalPrice);
  }

  return (
    <List sx={{ width: "100%", px: 2, bgcolor: "background.paper" }}>
      <ListItem disableGutters>
        <ListItemText
          primary={`Total cost (Per Adults) $${price} * ${days} nights`}
        />

        <IconButton>
          <ListItemText
            sx={{ fontWeight: 500 }}
            primary={`$${totalPriceForAdults}`}
          />
        </IconButton>
      </ListItem>
      <ListItem disableGutters>
        <ListItemText
          primary={`Total cost (Per Childs) ($${price}/2) * ${days} nights`}
        />

        <IconButton>
          <ListItemText
            sx={{ fontWeight: 500 }}
            primary={`$${totalPriceForChilds}`}
          />
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem disableGutters>
        <ListItemText
          primary={`Total cost (For Babies) $${0} * ${days} nights`}
        />

        <IconButton>
          <ListItemText sx={{ fontWeight: 500 }} primary={`Free`} />
        </IconButton>
      </ListItem>
      <Divider />

      <ListItem disableGutters>
        <ListItemText primary={`Cleaning fee`} />
        <IconButton aria-label="comment">
          <ListItemText primary={`$${cleaningFee}`} />
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem disableGutters>
        <ListItemText primary={`Service fee`} />
        <IconButton aria-label="comment">
          <ListItemText primary={`$${serviceFee}`} />
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem sx={{ color: "black" }} key={"value"} disableGutters>
        <ListItemText sx={{ color: "black" }} primary={`Total`} />
        <IconButton
          sx={{ color: "green", fontSize: "26px" }}
          aria-label="comment"
        >
          <ListItemText primary={`$${totalPrice}`} />
        </IconButton>
      </ListItem>
    </List>
  );
};

export default ReserveCardTotal;
