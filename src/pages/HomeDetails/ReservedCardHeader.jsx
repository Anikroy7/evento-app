import StarIcon from "@mui/icons-material/Star";
import { Box, CardContent, Typography } from '@mui/material';
import React from 'react';

const ReservedCardHeader = ({data}) => {
    const { price } = data;
    return (
        <>
       <CardContent >
          <Typography
            gutterBottom
            component={"span"}
            variant="h5"
            fontWeight={500}
          >
            ${price}
          </Typography>
          <Typography variant="h5" component="span" color="">
            /night
          </Typography>
          <Box display={"flex"} mt={1} flexDirection={"row"}>
            <Typography component={"span"}>
              <StarIcon fontSize="16px" sx={{ color: "#00f700" }} />
            </Typography>
            <Typography ml={1} variant="body2">
              4.9
            </Typography>
            <Typography variant={"body2"}>(20 reviews)</Typography>
          </Box>
        </CardContent>
        </>
    );
};

export default ReservedCardHeader;