import { Padding } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { Divider, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Stack } from "@mui/system";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchHomeCard = ({ data, homeId }) => {
  const { beds, bedrooms, baths, image, title, price } = data;

  const imageURL = image
    ? image.url
    : "https://images.pond5.com/hotel-building-five-stars-illustration-072429683_iconl_nowm.jpeg";

  const { filter } = useSelector((state) => state);
  const {
    guests: { adults, babies, childs },
  } = filter;

  const totalGuests = adults + babies + childs;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/homeDetails/${homeId}`);
  };

  return (
    <Card
      onClick={handleNavigate}
      sx={{
        px: 3,
        mt: 2,
        "&:hover": {
          bgcolor: "#f6f8fc",
          cursor: "pointer",
          transition: "0.5s",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingY: '5px',
          "@media (min-width: 600px)": {
            flexDirection: "row",
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            maxWidth: "230px",
            maxHeight: "150px",
            minWidth: "230px",
            borderRadius: "20px",
          }}
          image={imageURL}
          alt="green iguana"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1 0 auto",
            paddingX: '10px',
          }}
        >
          <Typography
            variant="h6"
            fontSize={"18px"}
            component={"div"}
            fontWeight={500}
          >
            {title}
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

          <Stack
            sx={{
              mt: "20px",
            }}
          >
            <Typography color={"#A6A3A3"} component={"span"}>
              Wifi Air Conditioning Kitchen
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "30px",
            }}
          >
            <Stack
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={1}
            >
              <StarIcon fontSize="13px" sx={{ color: "#93ff8d" }} />
              <Typography fontSize={"15px"} fontWeight={800}>
                4.9 (20)
              </Typography>
            </Stack>
            <Stack
              display={"flex"}
              gap={1}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Typography fontWeight={600} component={"span"}>
                ${price}/
              </Typography>
              <Typography component={"span"}>night</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Divider />
    </Card>
  );
};

export default SearchHomeCard;
