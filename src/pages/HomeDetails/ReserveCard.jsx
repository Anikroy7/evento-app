import { Card } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import ReserveCardTotal from "./ReserveCardTotal";
import ReservedButton from "./ReservedButton";
import ReservedCardDate from "./ReservedCardDate";
import ReservedCardHeader from "./ReservedCardHeader";
import ReserverCardGuests from "./ReserverCardGuests";

const ReserveCard = ({ data, id }) => {
  
  const {pathname}= useLocation() ;
  const isHomeDetails= pathname.includes('homeDetails')
  return (
    <Card sx={{ minWidth: 400 }}>
      <ReservedCardHeader data={data} key={id}/>
      <ReservedCardDate />
      <ReserverCardGuests />
      <ReserveCardTotal data= {data} key={id}/>
      {isHomeDetails&&<ReservedButton/>}
    </Card>
  );
};

export default ReserveCard;
