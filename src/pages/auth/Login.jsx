import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    TextField,
    Button,
    Container,
    Typography,
    Link as MuiLink
} from '@mui/material';
import useFormData from '../../hooks/useFrormData';
import { loginUser } from '../../features/auth/authSlice';
import Loading from '../../Components/utils/Loading';
import ErrorSnackbar from '../../Components/utils/ErrorSnacbar';
import { useEffect, useState } from 'react';




const Login = () => {
    const [state, setState] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
    });
    const { formState: { email, password }, updateFormState } = useFormData();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth: { email: loginEmail, loading, error, errorMsg } } = useSelector(state => state)

    useEffect(() => {
        if (loginEmail) {
            navigate('/')
        }
        if (error && !loading) {
            setState({ ...state, open: true })
        }

    }, [loginEmail, error])


    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({ email, password }))
    }
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
                    name='email'
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    type="password"
                    onChange={updateFormState}
                    required
                    name='password'
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={loading}
                >

                    {
                        loading ? <>
                            <Loading />  Loading...
                        </> : <>
                            Login</>
                    }
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

            {
                error ? <><ErrorSnackbar
                    state={state}
                    message={errorMsg}
                /> </> : <></>
            }
        </Container>
    );
}

export default Login;
