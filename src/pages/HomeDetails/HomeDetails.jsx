import { Divider, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/utils/Loading";
import { useGetHomeByIdQuery } from "../../features/api/homesApi";
import HomeSlider from "../../utils/swiper/Swiper";
import HomeDetailsDescription from "./HomeDetailsDescription";
import HomeDetailsFacilities from "./HomeDetailsFacilities";
import HomeDetailsHeader from "./HomeDetailsHeader";

const HomeDetails = () => {
  const { homeId } = useParams();

  const { data, isLoading } = useGetHomeByIdQuery(homeId);

  if (isLoading) {
    return <Loading />;
  }
  const { id, attributes } = data.data;
  const getImage = attributes.image.data.attributes.formats.thumbnail.url;

  return (
    <Stack container maxWidth={'lg'} marginX={'auto'}>
      <HomeSlider images={new Array(getImage)} key={id} />
      <Grid container spacing={2} maxWidth={'md'}>
        <Grid item xs={8}>
          <Stack sx={{color:'#7c7c7c'}}  py={3}>
            <HomeDetailsHeader key={id} data={attributes}/>
            <Divider/>
            <HomeDetailsFacilities data={attributes}/>
            <Divider/>
            <HomeDetailsDescription  key={id} data={attributes} />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack>xs=4</Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default HomeDetails;
