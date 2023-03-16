import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import PetsIcon from "@mui/icons-material/Pets";
import VapingRoomsIcon from "@mui/icons-material/VapingRooms";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/utils/Loading";
import { useGetHomeByIdQuery } from "../../features/api/homesApi";
import ReserveCard from "../HomeDetails/ReserveCard";

const ReviewHouse = ({ handleNext }) => {



  const { homeId } = useParams();

  const { data, isLoading } = useGetHomeByIdQuery(homeId);

  if (isLoading) {
    return <Loading />;
  }

  const { id, attributes } = data.data;
  
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={6} lg={8} xl={8} mt={3} py={3}>
        <Typography variant="h4" component={"h4"} fontWeight={500}>
          Review house rules
        </Typography>
        <Typography variant="h6" mt={2} component={"h6"} fontWeight={500}>
          3 nights in Dhaka
        </Typography>
        <Box color={"text.secondary"} sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  width: 68,
                  height: 68,
                },
              }}
            >
              <Paper
                sx={{
                  bgcolor: "#ededed",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "none",
                }}
                elevation={3}
              >
                <Typography variant="span" component={"span"} fontWeight={500}>
                  APR
                </Typography>
                <Typography variant="span" component={"span"} fontWeight={500}>
                  13
                </Typography>
              </Paper>
            </Box>
            <Stack ml={3}>
              <Typography variant="body2" mb={1} fontWeight={500}>
                Monday check-in
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                After 12.00 PM
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ display: "flex", ml: 6, alignItems: "center", mt: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  width: 68,
                  height: 68,
                },
              }}
            >
              <Paper
                sx={{
                  bgcolor: "#ededed",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "none",
                }}
                elevation={3}
              >
                <Typography variant="span" component={"span"} fontWeight={500}>
                  APR
                </Typography>
                <Typography variant="span" component={"span"} fontWeight={500}>
                  17
                </Typography>
              </Paper>
            </Box>
            <Stack ml={3}>
              <Typography variant="body2" mb={1} fontWeight={500}>
                Thrusday checkout
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                11.00 AM
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Typography
          color={"text.secondary"}
          variant="body2"
          component={"p"}
          mt={4}
          fontWeight={500}
        >
          Self check-in with buliling staff
        </Typography>
        <Divider sx={{ width: "60%", mt: 5, height: 3 }} />
        <Typography variant="h6" mt={2} component={"h6"} fontWeight={500}>
          Things to keep in mind
        </Typography>
        <Stack color={"#3a3a3a"}>
          <Box mt={3} display={"flex"} alignItems={"center"}>
            <Box sx={{ border: "1px solid #c9c9c9" }}>
              <ChildFriendlyIcon sx={{ m: 1 }} />
            </Box>
            <Typography ml={2} variant="span" component={"span"}>
              Things to keep in mind
            </Typography>
          </Box>
          <Box mt={3} display={"flex"} alignItems={"center"}>
            <Box sx={{ border: "1px solid #c9c9c9" }}>
              <PetsIcon sx={{ m: 1 }} />
            </Box>
            <Typography ml={2} variant="span" component={"span"}>
              Pets Allowed
            </Typography>
          </Box>
          <Box mt={3} mb={3} display={"flex"} alignItems={"center"}>
            <Box sx={{ border: "1px solid #c9c9c9" }}>
              <DoNotDisturbIcon sx={{ m: 1 }} />
            </Box>
            <Typography ml={2} variant="span" component={"span"}>
              No parties or events
            </Typography>
          </Box>
          <Box mb={3} display={"flex"} alignItems={"center"}>
            <Box sx={{ border: "1px solid #c9c9c9" }}>
              <VapingRoomsIcon sx={{ m: 1 }} />
            </Box>
            <Typography ml={2} variant="span" component={"span"}>
              Smoke allowed
            </Typography>
          </Box>
        </Stack>

        <Box onClick={handleNext} position={"relative"}>
          <Typography
            component={"input"}
            display={"flex"}
            value={"Agree and continue"}
            color={"white"}
            mt={2}
            alignItems="center"
            justifyContent={"center"}
            sx={{
              background: "linear-gradient(to right, #11998e, #38ef7d)",
              border: "none",
              boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
              borderRadius: "5px",
              "&:hover": {
                background: "linear-gradient(to right, #38ef7d,#11998e)",
                transition: "1s",
                cursor: "pointer",
              },
            }}
            padding={2}
          />
          <ArrowForwardIosIcon
            sx={{
              position: "absolute",
              left: 185,
              bottom: 15,
              color: "white",
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4} mt={3} py={3}>      
        <ReserveCard data={attributes} key={id}/>
      </Grid>
    </Grid>
  );
};

export default ReviewHouse;
