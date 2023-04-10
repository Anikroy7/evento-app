import {
  Button,
  Container,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import ErrorSnackbar from "../../Components/utils/ErrorSnacbar";
import Loading from "../../Components/utils/Loading";
import { usePostUserMutation } from "../../features/api/userApi";
import { loginUser } from "../../features/auth/authSlice";
import useFormData from "../../hooks/useFrormData";

const Login = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });
  const {
    formState: { email, password },
    updateFormState,
  } = useFormData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    auth: { email: loginEmail, loading, error, errorMsg },
  } = useSelector((state) => state);
  const [postuser, { isSuccess, data, error: posterror }] =
    usePostUserMutation();

  useEffect(() => {
    if (loginEmail) {
      postuser({ data: { email: loginEmail } });
    }
    if (error && !loading) {
      setState({ ...state, open: true });
    }
    if (isSuccess) {
      localStorage.setItem("id", data.data.id);
      navigate("/");
    }
  }, [loginEmail, error, isSuccess]);


  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email Address"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={updateFormState}
          required
          name="email"
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? (
            <>
              <Loading /> Loading...
            </>
          ) : (
            <>Login</>
          )}
        </Button>
      </form>
      <Typography align="center" mt={2}>
        <MuiLink href="#" variant="body2">
          Forgot Password?
        </MuiLink>
      </Typography>
      <Typography align="center" mt={2}>
        <MuiLink to="/signup" component={RouterLink} variant="body2">
          Don't have an account? Sign up
        </MuiLink>
      </Typography>

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

export default Login;
