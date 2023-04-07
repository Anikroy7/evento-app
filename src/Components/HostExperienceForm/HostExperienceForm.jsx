import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

const HostExperienceForm = () => {
  //   const classes = useStyles();
  const [experienceDetails, setExperienceDetails] = useState({
    title: "",
    price: "",
    images: [],
    description: "",
    address: "",
    ratings: "",
    date: "",
    type: "",
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "images") {
      setExperienceDetails({
        ...experienceDetails,
        images: files,
      });
    } else {
      setExperienceDetails({
        ...experienceDetails,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(experienceDetails);
    // Submit form data to server or perform additional validation
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFydHl8ZW58MHx8MHx8&w=1000&q=80')",
        backgroundSize: "cover",
        backgroundrepeat: "noRepeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Stack
        maxWidth={"500px"}
        marginX={"auto"}
        bgcolor={"#eeee"}
        p={3}
      >
        <Typography fontWeight={600} variant="h5" textAlign={"center"} p={3}>
          Host Your Experience
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            label="Title"
            value={experienceDetails.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="price"
            label="Price"
            type="number"
            value={experienceDetails.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <input
            name="images"
            type="file"
            accept="image/*"
            onChange={handleChange}
            multiple
            fullWidth
            margin="normal"
          />
          <TextField
            name="description"
            label="Description"
            multiline
            rows={4}
            value={experienceDetails.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="address"
            label="Address"
            value={experienceDetails.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="ratings"
            label="Ratings"
            type="number"
            value={experienceDetails.ratings}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="date"
            label="Date"
            type="date"
            value={experienceDetails.date}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl
            /* className={classes.formControl} */ fullWidth
            margin="normal"
          >
            <InputLabel>Type</InputLabel>
            <Select
              name="type"
              value={experienceDetails.type}
              onChange={handleChange}
            >
              <MenuItem value="experience">Experience</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Stack>
    </Box>
  );
};

export default HostExperienceForm;
