import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
const ReservedCardDate = () => {

  const {filter:{depratureDate, arrivalDate} } = useSelector(state=> state);
  // console.log('filter', filter);
  return (
    <CardContent>
      <Typography>Dates</Typography>
      <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} p={1} sx={{border:'1px solid #f0f7ff'}}>
        <Typography>{arrivalDate}</Typography>
        <Typography>
          <ArrowForwardIcon />
        </Typography>
        <Typography>{depratureDate}</Typography>
      </Stack>
    </CardContent>
  );
};

export default ReservedCardDate;
