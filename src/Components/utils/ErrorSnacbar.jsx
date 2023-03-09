import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

const ErrorSnackbar = ({ state, message }) => {

    const { vertical, horizontal, open } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message={message}
            key={vertical + horizontal}
        />
    );
}

export default ErrorSnackbar;