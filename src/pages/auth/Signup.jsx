import { Link as RouterLink } from 'react-router-dom';
import {
    TextField,
    Button,
    Container,
    Typography,
    Link as MuiLink,
    Grid
} from '@mui/material';
import useFormData from '../../hooks/useFrormData';

const SignUp = () => {
    const { formState, updateFormState } = useFormData();


    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState);
    }
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
                    name='password'
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Sign Up
                </Button>
            </form>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <MuiLink to="/login" component={RouterLink} variant="body2">
                        Already have an account? Login
                    </MuiLink>
                </Grid>
            </Grid>
        </Container >
    );
}

export default SignUp;
