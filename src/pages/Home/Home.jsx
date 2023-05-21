import FilterListIcon from "@mui/icons-material/FilterList";
import { Box, Stack, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Filter from "../../Components/Filter/Filter";
import Loading from "../../Components/utils/Loading";
import { useGetHomesQuery } from "../../features/api/homesApi";
import MySwiper from "../../utils/swiper/Swiper";
import { useGetExperienceQuery } from "../../features/api/experienceApi";

const Home = () => {
  // let comingsoon="false"
  const [hidden, setHidden] = useState(true);
  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  const { data:homes, isLoading:homeLoading } = useGetHomesQuery();
  const {data:experiences, isLoading:experiencesLaoding}= useGetExperienceQuery()
  if (homeLoading||experiencesLaoding) return <Loading />;

  return (
    <Box maxWidth={"xl"} marginX={"auto"}>
      {/* filter Section */}
      <Container
        maxWidth="xl"
        sx={{
          paddingY: 2,
          display: "flex",
          alignItems: "center",
          display: { lg: "none" },
        }}
      >
        <FormControlLabel
          control={
            <Switch
              checked={hidden}
              onChange={handleHiddenChange}
              color="primary"
            />
          }
          label="Filter"
        />
        <FilterListIcon />
      </Container>
      <Box
        mx={"auto"}
        spacing={2}
        mt={2}
        sx={{
          display: "flex",
          flexDirection: { md: "row", sm: "column", lg: "row",xs:'column' },
        }}
      >
        <Box  hidden={!hidden}>
          <Filter />
        </Box>
        <Stack
          sx={{
            p: 0,
            m: 0,
            width: ["100%", "100%", "65%"],
            px: {
              sm: 5,
              lg: 0,
              md: 2,
              xl: 0,
            },
          }}
        >
          <Typography component={"p"} variant="h6" sx={{ display: "block" }}>
            Homes
          </Typography>
          <MySwiper data={homes}/>
          <Typography
            component={"p"}
            variant="h6"
            sx={{ mb: 1, mt:5, display: "block" }}
          >
            Experiences
          </Typography>
          <MySwiper data={experiences} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
