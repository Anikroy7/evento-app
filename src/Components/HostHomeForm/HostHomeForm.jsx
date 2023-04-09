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
import React from "react";
import { useForm } from "react-hook-form";
import { useCreateHomeMutation } from "../../features/api/homesApi";

const HostHomeForm = () => {
  const homeOwnerId = localStorage.getItem("homeOwnerId");

  const { register, handleSubmit, reset } = useForm();
  const [postHome, { data }] = useCreateHomeMutation();

  const onSubmit = (data) => {
    console.log(data);
    const  name = data.name;
    const about = data.about;
    delete data.name;
    delete data.about;
    const superhost = {
      name, about
    }
    data.superhost= superhost;
    data.home_owner = homeOwnerId;
    postHome({ data: data });
  };

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
      </Stack>
    </Box>
  );
};

export default HostHomeForm;
