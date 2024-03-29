import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  CardMedia,
  Input,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import usePayment from "../../hooks/usePayment";
import ReserveCard from "../HomeDetails/ReserveCard";

const WhosComming = ({ attributes }) => {
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [totalPrice, setTotalPrice] = React.useState(0);

  const { handlePayment } = usePayment(
    attributes,
    message,
    phoneNumber,
    totalPrice
  );

  return (
    <Stack maxWidth={"xl"} marginX={"auto"}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent="space-between"
      >
        <Box>
          <Box
            mt={4}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Box maxWidth={500}>
              <Typography mt={3} variant="h6">
                Travelling to work?
              </Typography>
              <Typography mt={3} mb={1} component="p">
                Say hello to your host
              </Typography>
              <Typography mb={3} component="p">
                Let Roudro know a little about yourself and why you are comming.
              </Typography>
            </Box>
            <Box>
              <Stack
                sx={{
                  mt: "20px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Avatar
                  sx={{ height: "60px", width: "60px" }}
                  aria-label="recipe"
                >
                  <CardMedia
                    component="img"
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      borderRadius: "20px",
                    }}
                    image="https://img.freepik.com/free-photo/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w_1258-104422.jpg?w=2000"
                    alt="green iguana"
                  />
                </Avatar>
                <Typography textAlign={"center"} sx={{ color: "#4d4d4d" }}>
                  Anik
                </Typography>
              </Stack>
            </Box>
          </Box>
          <TextareaAutosize
            onChange={(e) => setMessage(e.target.value)}
            aria-label="minimum height"
            minRows={10}
            placeholder="Hello roudrow can't wait to spend 4 night is your home"
            style={{
              width: 400,
              padding: "5px",
              border: "1px solid #ededed",
              marginBottom: "20px",
            }}
          />

          <TextField
            helperText="Please enter your phone number"
            label="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{
              display: "block",
              width: 400,
              padding: "5px",
            }}
          />

          <Box onClick={handlePayment} position={"relative"}>
            <Typography
              component={"input"}
              display={"flex"}
              value={"Send & Payment"}
              color={"white"}
              mt={2}
              alignItems={"center"}
              justifyContent={"center"}
              required
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
            <SendIcon
              sx={{
                position: "absolute",
                left: 165,
                bottom: 15,
                color: "white",
              }}
            />
          </Box>
        </Box>
        <Box>
          <ReserveCard setTotalPrice={setTotalPrice} data={attributes} />
        </Box>
      </Box>
    </Stack>
  );
};

export default WhosComming;
