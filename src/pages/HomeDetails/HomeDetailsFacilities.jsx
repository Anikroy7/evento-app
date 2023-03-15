import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const HomeDetailsFacilities = ({ data }) => {
  const { superhost:{name,about} } = data;

  return (
    <Box>
      <Stack sx={{ display: "flex", gap: 3, flexDirection: "row", py: 2 }}>
        <HomeIcon sx={{ color: "#4d4d4d" }} />
        <Stack>
          <Typography color={"#4d4d4d"} mb={1} fontWeight={500}>
            Entier Home
          </Typography>
          <Typography>You'll have the condominium to yourself</Typography>
        </Stack>
      </Stack>
      <Stack sx={{ display: "flex", gap: 3, flexDirection: "row", py: 2 }}>
        <CheckBoxIcon sx={{ color: "#4d4d4d" }} />
        <Stack>
          <Typography color={"#4d4d4d"} mb={1} fontWeight={500}>
            Self check-in
          </Typography>
          <Typography>You can check in with the doorman</Typography>
        </Stack>
      </Stack>
      <Stack sx={{ display: "flex", gap: 3, flexDirection: "row", py: 2 }}>
        <SanitizerIcon sx={{ color: "#4d4d4d" }} />
        <Stack>
          <Typography color={"#4d4d4d"} mb={1} fontWeight={500}>
            Sparking clean
          </Typography>
          <Typography>
            10 recent guests said this place was sparking clean.
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ display: "flex", gap: 3, flexDirection: "row", py: 2 }}>
        <PermIdentityIcon sx={{ color: "#4d4d4d" }} />
        <Stack>
          <Typography color={"#4d4d4d"} mb={1} fontWeight={500}>
            {name} is a Superhost
          </Typography>
          <Typography>{about}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomeDetailsFacilities;
