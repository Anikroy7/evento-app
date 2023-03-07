import { Link as RouterLink } from 'react-router-dom';
import {
    TextField,
    Button,
    Container,
    Typography,
    Link as MuiLink
} from '@mui/material';
import useFormData from '../../hooks/useFrormData';

const Login = () => {

    const { formState, updateFormState } = useFormData();


    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState);
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
                >
                    Login
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
        </Container>
    );
}

export default Login;
