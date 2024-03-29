import SearchIcon from "@mui/icons-material/Search";
import { Box, Stack } from "@mui/material";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchedData, setInputs } from "../../features/filter/filterSlice";
import useFormValidation from "../../hooks/useFormValidation";
import isEmpty from "../utils/isEmpty";
import FilterGuests from "./FilterGuests";

const Filter = () => {
  const { filter } = useSelector((state) => state);
  const { address, arrivalDate, depratureDate, guests } = filter;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isBlank = isEmpty(filter);
  const { register, handleSubmit, watch } = useForm();
  const watchAllFields = watch(); 


  useEffect(()=>{
   dispatch(setInputs(watchAllFields))
  },[watchAllFields])


  const onSubmit = (data) => {
    const { dateError } = useFormValidation(data);

    if (dateError) {
      alert(dateError);
      return;
    }

    if (isBlank) {
      alert("Please add quantity to guest");
      return;
    }
    dispatch(searchedData({ ...data, guests: { ...guests } }));
    navigate("/searchPage");
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" fontWeight={600} fontSize={"16px"} mb={2}>
          Where you want to go
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ boxShadow: "initial" }}>
          <Stack
            sx={{
              fontWeight: 500,
              padding: 3,
              boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
              borderRadius: "10px",
            }}
          >
            LOCATION <br />
            <TextField
              id="standard-basic"
              label="Add City, Landmark or Address."
              variant="standard"
              sx={{ width: "100%" }}
              {...register("address", { required: true })}
              defaultValue={address}
            ></TextField>
          </Stack>
        </Box>
        <Box
          sx={{
            boxShadow: "initial",
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <Stack
            color={"#A6A3A3"}
            sx={{
              fontWeight: 500,
              padding: 2,
              boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            Arrival <br />
            <Input
              type={"date"}
              {...register("arrivalDate")}
              defaultValue={arrivalDate}
            />
          </Stack>
          <Stack
            color={"#A6A3A3"}
            sx={{
              fontWeight: 500,
              padding: 2,
              boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            Deprature <br />
            <Input
              type={"date"}
              {...register("depratureDate")}
              defaultValue={depratureDate}
            />
          </Stack>
        </Box>
        <FilterGuests isBlanks={isBlank} />

        <Stack position={"relative"}>
          <Typography
            type={"submit"}
            component={"input"}
            display={"flex"}
            value={"Search"}
            color={"white"}
            mt={2}
            alignItems="center"
            justifyContent={"center"}
            width={"100%"}
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
          <SearchIcon
            sx={{
              position: "absolute",
              left: 225,
              bottom: 15,
              color: "white",
            }}
          />
        </Stack>
      </form>
    </Container>
  );
};

export default Filter;
