import { Box, Divider, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/utils/Loading";
import { useGetHomeByIdQuery } from "../../features/api/homesApi";
import HomeDetailsDescription from "./HomeDetailsDescription";
import HomeDetailsFacilities from "./HomeDetailsFacilities";
import HomeDetailsHeader from "./HomeDetailsHeader";
import HomeDetailsReviews from "./HomeDetailsReviews";
import ReserveCard from "./ReserveCard";

const HomeDetails = () => {
  const { homeId } = useParams();
  const { data, isLoading } = useGetHomeByIdQuery(homeId);

  if (isLoading) {
    return <Loading />;
  }
  const { id, attributes } = data.data;
  const getImage = attributes.image.data.attributes.formats.thumbnail.url;

  return (
    <Stack maxWidth={"lg"} marginX={"auto"}>
      {/* <HomeSlider images={new Array(getImage)} /> */}
      <Grid container /* ={true} */ spacing={1}>
        <Grid item xs={12} lg={8} xl={8} md={6} sm={12}>
          <Box sx={{ color: "#7c7c7c" }} py={3}>
            <HomeDetailsHeader data={attributes} />
            <Divider />
            <HomeDetailsFacilities data={attributes} />
            <Divider />
            <HomeDetailsDescription data={attributes} />
            <HomeDetailsReviews />
          </Box>
        </Grid>
        <Grid item xs={12} lg={4} xl={4} md={6} sm={12}>
          <Box px={3} mt={10}>
            <ReserveCard data={attributes} id={id} />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default HomeDetails;
