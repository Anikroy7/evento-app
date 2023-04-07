import { CardMedia, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import { Box, Stack } from "@mui/system";
import * as React from "react";

const HomeDetailsHeader = ({ data }) => {
  const {
    address,
    image,
    title,
    bedrooms,
    beds,
    baths,
    superhost: { name },
    guests: { adults, babies, childs },
  } = data;
  const getImage = image.data.attributes.formats.thumbnail.url;
  const totalGuests = adults + babies + childs;

  return (
    <Card
      sx={{
        boxShadow: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ py: 2 }}>
        <Typography variant="h4" mb={1} fontWeight={500}>
          {title}
        </Typography>
        <Typography color={"#A6A3A3"} mb={1} component={"span"}>
          {address}
        </Typography>
        <Stack
          color={"#A6A3A3"}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
          }}
        >
          <Typography component={"span"}>{totalGuests} guests</Typography>
          <Typography component={"span"}>{bedrooms} bedrooms</Typography>
          <Typography component={"span"}>{baths} baths</Typography>
          <Typography component={"span"}>{beds} beds</Typography>
        </Stack>
      </Box>

      <Stack
        sx={{
          mt: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar sx={{ height: "60px", width: "60px" }} aria-label="recipe">
          <CardMedia
            component="img"
            sx={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "20px" }}
            image={`${import.meta.env.VITE_IMAGE_URL}${getImage}`}
            alt="green iguana"
          />
        </Avatar>
        <Typography textAlign={"center"} sx={{color:"#4d4d4d"}}>{name}</Typography>
      </Stack>
    </Card>
  );
};

export default HomeDetailsHeader;
