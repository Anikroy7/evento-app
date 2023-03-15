import { Card } from "@mui/material";
import React from "react";
import ReserveCardTotal from "./ReserveCardTotal";
import ReservedButton from "./ReservedButton";
import ReservedCardDate from "./ReservedCardDate";
import ReservedCardHeader from "./ReservedCardHeader";
import ReserverCardGuests from "./ReserverCardGuests";

const ReserveCard = ({ data }) => {
  return (
    <Card sx={{ minWidth: 500 }}>
      <ReservedCardHeader data={data} />
      <ReservedCardDate />
      <ReserverCardGuests />
      <ReserveCardTotal/>
      <ReservedButton/>
    </Card>
  );
};

export default ReserveCard;
