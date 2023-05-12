import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import * as React from "react";
import { styled } from "@mui/system";

const CardWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-out",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-5px)",
  },
});

const CardContent = styled("div")({
  padding: "2px",
});

const CardItem = ({ data, homeId }) => {
  const { address, category, image, price, title } = data;
  console.log(data);
  const getImage = image?.data?.attributes?.formats?.thumbnail?.url;

  return (
    <CardWrapper
      sx={{ maxWidth: "250px", width: "auto", px: 1, minWidth: "250px" }}
    >
      <img
        style={{ maxHeight: "200px", minHeight:'200px', maxWidth:'300px' }}
        component="img"
        src={`${import.meta.env.VITE_IMAGE_URL}${getImage}`}
        alt="green iguana"
      />
      <CardContent>
        <Box sx={{ display: "flex", mt: 1, flexDirection: "row" }}>
          <Typography variant="body2" color="#004d4d" fontWeight={700}>
            {category}-
          </Typography>
          <Typography variant="body2" color="#004d4d" fontWeight={700}>
            {address}
          </Typography>
        </Box>
        <Box>
          <Typography
            gutterBottom
            fontWeight={500}
            variant="body1"
            component="div"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${price} per person
          </Typography>
        </Box>
      </CardContent>
    </CardWrapper>
  );
};
export default CardItem;
