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
      guests: { childs, adults, babies },
    },
  } = useSelector((state) => state);

  const { price, cleaningFee, serviceFee } = data;
  const days = differenceInDays(new Date(depratureDate), new Date(arrivalDate));
  console.log(days);

  const totalPriceForAdults = price * adults;
  const totalPriceForChilds = (price / 2) * childs;
  const totalPrice =
    totalPriceForAdults + totalPriceForChilds + cleaningFee + serviceFee;
  if (setTotalPrice) {
    setTotalPrice(totalPrice);
  }
  console.log(totalPrice);
  console.log(childs, adults, babies);

  return (
    <List sx={{ width: "100%", px: 2, bgcolor: "background.paper" }}>
      <ListItem disableGutters>
        <ListItemText
          primary={`Total cost (For Adults) $${price} * ${days} nights`}
        />

        <IconButton>
          <ListItemText
            sx={{ fontWeight: 500 }}
            primary={`$${parseInt(days) * price}`}
          />
        </IconButton>
      </ListItem>
      <ListItem disableGutters>
        <ListItemText
          primary={`Total cost (For Childs) ($${price}/2) * ${days} nights`}
        />

        <IconButton>
          <ListItemText
            sx={{ fontWeight: 500 }}
            primary={`$${(parseInt(days) * price) / 2}`}
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
