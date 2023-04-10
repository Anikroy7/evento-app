import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdateHomeOwnerByIdMutation } from "../../features/api/homeOwnerApi";
import { useCreateHomeMutation } from "../../features/api/homesApi";
import { setHomeOnwerDetails } from "../../features/homeOwner/homeOwnerSlice";
import ErrorSnackbar from "../utils/ErrorSnacbar";
import Loading from "../utils/Loading";

const HostHomeForm = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const dispatch = useDispatch();
  const homeOwner = useSelector((state) => state.homeOwner);
  console.log(homeOwner);
  const homeOwnerId = localStorage.getItem("homeOwnerId");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [postHome, { data: homeData, error }] = useCreateHomeMutation();
  const [
    updateHomeOwner,
    { isLoading, data, isError: updateError, error: uerror, isSuccess },
  ] = useUpdateHomeOwnerByIdMutation();
  useEffect(() => {
    if (homeData) {
       dispatch(setHomeOnwerDetails({
        id: homeOwner.id,
        homes: [...homeOwner.homes, homeData.data]
      }));
      updateHomeOwner({
        homeOwnerId: homeOwnerId,
        homeId: homeData?.data.id,
      });
      navigate("/myHomes");
      toast.success("Home added successfully");
    }
  }, [homeData, navigate]);

  useEffect(() => {
    if (error) {
      setState({ ...state, open: true });
    }
  }, [error]);

  if (isSuccess) console.log("updated data", data);
  if (updateError) console.log("updated error", uerror);

  const onSubmit = (data) => {
    console.log(data);
    const name = data.name;
    const about = data.about;
    delete data.name;
    delete data.about;
    const superhost = {
      name,
      about,
    };
    data.superhost = superhost;
    data.home_owner = homeOwnerId;
    postHome({ data: data });
  };

  if (isLoading) return <Loading />;

  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/happy-woman-standing-near-house-sale-flat-vector-illustration-cartoon-real-estate-agent-home-seller-presenting-cottage-mortgage-building-concept_74855-13131.jpg?w=2000')",
        backgroundSize: "cover",
        backgroundrepeat: "noRepeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Stack maxWidth={"500px"} marginX={"auto"} bgcolor={"#eeee"} p={3}>
        <Typography variant="h5" textAlign={"center"} p={3}>
          Host Your Home
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Title"
            fullWidth
            margin="normal"
            {...register("title", { required: true })}
          />
          <TextField
            label="Price"
            type="number"
            fullWidth
            margin="normal"
            {...register("price", { required: true })}
          />
          <TextField
            {...register("address", { required: true })}
            label="Address"
            fullWidth
            margin="normal"
          />
          <FormControl margin="normal" fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              name="type"
              defaultValue={""}
              {...register("homeType", { required: true })}
            >
              <MenuItem value="house">House</MenuItem>
              <MenuItem value="apartment">Apartment</MenuItem>
              <MenuItem value="condo">Condo</MenuItem>
            </Select>
          </FormControl>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              {...register("beds", { required: true })}
              label="Beds"
              type="number"
              sx={{ display: "inline", width: "30%" }}
              margin="normal"
            />
            <TextField
              label="Baths"
              type="number"
              sx={{ display: "inline", width: "30%" }}
              margin="normal"
              {...register("baths", { required: true })}
            />
            <TextField
              {...register("bedrooms", { required: true })}
              label="Bedrooms"
              type="number"
              sx={{ display: "inline", width: "30%" }}
              margin="normal"
            />
          </Stack>

          <TextField
            label="Superhost name"
            type="text"
            placeholder="Superhost name"
            margin="normal"
            {...register("name", { required: true })}
            fullWidth
          />
          <TextField
            {...register("about", { required: true })}
            fullWidth
            placeholder="About superhost..."
            label="About superhost"
            type="text"
            margin="normal"
          />

          <TextField
            label="Description"
            multiline
            fullWidth
            rows={4}
            {...register("description", { required: true })}
            margin="normal"
          />
          <input
            name="image"
            {...register("image", { required: true })}
            type="file"
            accept="image/*"
            multiple
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
        {error &&
          error?.data?.error?.details?.errors?.map((e) => {
            return (
              <ErrorSnackbar
                bgcolor={"red"}
                key={e?.path[0]}
                state={state}
                message={e.message}
              />
            );
          })}
        {/* {error ? <ErrorSnackbar state={state} message={errorMsg} /> : ""} */}
      </Stack>
    </Box>
  );
};

export default HostHomeForm;
