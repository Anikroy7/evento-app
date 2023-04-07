import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePostHomeOwnerMutation } from "../../features/api/homeOwnerApi";

import { setHomeOnwerDetails } from "../../features/homeOwner/homeOwnerSlice";
import Loading from "../utils/Loading";

const HostHomeRegister = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const {
    auth: { email },
    homeOwner,
  } = useSelector((state) => state);
  const { register, handleSubmit } = useForm();
  const [postHomeOwner, { isLoading, error, isError, isSuccess, data }] =
    usePostHomeOwnerMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError && !isLoading) {
      setState({ ...state, open: true });
    }
    if (!isLoading && !isError && isSuccess) {
      console.log(data);
      dispatch(setHomeOnwerDetails({ id: data.data.id, homes: [] }));
    }
    if (homeOwner.id) {
      navigate("/hostHome");
      localStorage.setItem('homeOwnerId', homeOnwer.id)
    }
  }, [error, isSuccess, homeOwner]);

  if (isLoading) return <Loading />;
  const onSubmit = (data) => {
    data.email = email;
    postHomeOwner({ data });
  };

  return (
    <Stack mt={5} maxWidth={"500px"} marginX={"auto"} bgcolor={"#eeee"} p={3}>
      <Typography variant="h5">Register home</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("name", { required: true })}
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("address", { required: true })}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          disabled
        />
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("phone", { required: true })}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
      {error ? (
        <>
          <Box color={"red"}>
            {error?.data?.error?.details?.errors?.map((e) => (
              <div>
                <p>{e.message}</p>
              </div>
            ))}
          </Box>
        </>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default HostHomeRegister;
