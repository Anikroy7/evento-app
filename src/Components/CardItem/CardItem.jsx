import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import * as React from "react";
import { styled } from "@mui/system";
import { Rating } from "@mui/material";

const CardWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  color: "black",
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
  padding: "4px",
});

const CardItem = ({ data, homeId }) => {
  const { address, category, price, title, image } = data;
  console.log("price", data);
  const getImageurl = image?.data?.attributes?.url;
  console.log(data, "image ulr");
  return (
    <CardWrapper
      sx={{ height:'300px'}}
    >
      <CardContent>
      <img
        style={{ maxHeight: "150px", minHeight: "100px", maxWidth: "350px" , minWidth:"300px"}}
        component="img"
        src={getImageurl}
        alt="green iguana"
      />
        <Box sx={{ display: "flex", mt: 1, flexDirection: "row" }}>
          <Typography variant="body2" color="#004d4d" fontWeight={700}>
            {category}-
          </Typography>
          <Typography variant="body2" color="#004d4d" fontWeight={700}>
            {address}
          </Typography>
        </Box>
        <Box >
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
          <Typography variant="body2" color="text.secondary">
          <Rating sx={{color:'#11998e'}} size="small" name="read-only" value={5} readOnly />
          </Typography>
        </Box>
      </CardContent>  
    </CardWrapper>
  );
};
export default CardItem;
