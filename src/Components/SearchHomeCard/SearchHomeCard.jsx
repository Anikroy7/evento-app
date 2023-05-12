import StarIcon from "@mui/icons-material/Star";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Stack } from "@mui/system";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchHomeCard = ({ data, homeId }) => {
  const { beds, bedrooms, baths, image, title } = data;
  const imageURL = image
    ? image.formats.medium.url
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_EjgxXy8wsIz3IajoWaHy1lf8rQhsipkhIkkcOw_&s";
  const { filter } = useSelector((state) => state);
  const {
    address,
    arrivalDate,
    depratureDate,
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
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <CardMedia
              component="img"
              sx={{
                maxWidth: "230px",
                minWidth: "230px",
                borderRadius: "20px",
              }}
              image={
                image
                  ? `${import.meta.env.VITE_IMAGE_URL}${imageURL}`
                  : imageURL
              }
              alt="green iguana"
            />
          </CardContent>
          <Box>
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
                  $52/
                </Typography>
                <Typography component={"span"}>night</Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
    </Card>
  );
};

export default SearchHomeCard;
