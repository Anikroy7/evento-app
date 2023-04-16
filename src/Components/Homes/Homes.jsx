import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useGetHomesQuery } from "../../features/api/homesApi";
import CardItem from "../CardItem/CardItem";
import ItemSkeleton from "../utils/Skeleton ";
import MySwiper from "../../utils/swiper/Swiper";



const Homes = () => {
  const { data, isLoading } = useGetHomesQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Homes
      </Typography>

      {isLoading ? (
        <ItemSkeleton loading={true} />
      ) : (
        <Box
          container
          mx={"auto"}
          sx={{ display: "flex", flexWrap: "wrap", gap: 3, px: 3 }}
        >
          {/* <MySwiper/> */}
         {/*  {data?.data?.slice(0, 3).map(({ attributes, id }) => {
            return (
              <CardItem
                name={"Experience"}
                key={id}
                homeId={id}
                data={attributes}
              />
            );
          })} */}
        </Box>
      )}
      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="outlined"
          sx={{
            border: "none",
            mt: 1,
            "&:hover": {
              border: "none",
              cursor: "pointer",
              transition: "1s",
            },
          }}
        >
          Show All
          <ArrowRightAltIcon />
        </Button>
      </Box>
    </div>
  );
};

export default Homes;
