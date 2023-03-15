import StarIcon from "@mui/icons-material/Star";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const HomeDetailsReviews = () => {
  return (
    <Stack px={1}>
      <Box>
        <Typography color={"black"} component={"span"} fontWeight={600}>
          Reviews
        </Typography>
      </Box>
      <Box ml={2} display={'flex'} flexDirection={'row'}>
        <Typography component={"span"}>
        <StarIcon fontSize="13px" sx={{ color: "#93ff8b" }} />
        </Typography>
        <Typography variant="caption">4.9</Typography>
        <Typography variant={"caption"}>(20 reviews)</Typography>
      </Box>
    </Stack>
  );
};

export default HomeDetailsReviews;
