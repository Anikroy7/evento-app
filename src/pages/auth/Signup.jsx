import {
  Button,
  Container,
  Grid,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import ErrorSnackbar from "../../Components/utils/ErrorSnacbar";
import { usePostUserMutation } from "../../features/api/userApi";
import { createUser } from "../../features/auth/authSlice";
import useFormData from "../../hooks/useFrormData";

const SignUp = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });
  const { formState, updateFormState } = useFormData();
  const {
    auth: { email: loginEmail, loading, error, errorMsg },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postuser, { data, isSuccess,  isError, error: posterror }] =
    usePostUserMutation();
  console.log(loginEmail, isSuccess);
  useEffect(() => {
    if (loginEmail) {
      console.log("come", loginEmail);
      postuser({ data: { email: loginEmail } });
      console.log("data", data);
    }
    if (error && !loading) {
      setState({ ...state, open: true });
    }
    if (isError) {
      console.log(posterror);
    }
  }, [loginEmail, error]);

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('id', data.data.id);
      navigate("/");
    }
  }, [isSuccess]);
  // if (isLoading) return <Loading />;

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formState;
    dispatch(createUser({ email, password }));
  };
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          onChange={updateFormState}
          name={"name"}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={updateFormState}
          required
          name={"email"}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          onChange={updateFormState}
          required
          name="password"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {loading ? <>{/*  <Loading />  */}Loading...</> : <>Signup</>}
        </Button>
      </form>
      <Grid justifyContent="flex-end">
        <Grid item>
          <MuiLink to="/login" component={RouterLink} variant="body2">
            Already have an account? Login
          </MuiLink>
        </Grid>
      </Grid>
      {error ? (
        <>
          <ErrorSnackbar state={state} message={errorMsg} />{" "}
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default SignUp;
