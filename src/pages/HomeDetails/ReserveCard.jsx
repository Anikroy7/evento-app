import { Card } from "@mui/material";
import React from "react";
import ReserveCardTotal from "./ReserveCardTotal";
import ReservedButton from "./ReservedButton";
import ReservedCardDate from "./ReservedCardDate";
import ReservedCardHeader from "./ReservedCardHeader";
import ReserverCardGuests from "./ReserverCardGuests";

const ReserveCard = ({ data, id }) => {
  return (
    <Card sx={{ minWidth: 400 }}>
      <ReservedCardHeader data={data} key={id}/>
      <ReservedCardDate />
      <ReserverCardGuests />
      <ReserveCardTotal data= {data} key={id}/>
      <ReservedButton/>
    </Card>
  );
};

export default ReserveCard;
