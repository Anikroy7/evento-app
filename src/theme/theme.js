
import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#111430',
            yellow: '#FBD062',
            green: '#7AB259',
        },
        // mode: 'dark',
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg', // 1200
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '16px',
                    padding: '0.6rem 2.5rem',
                },
            },
            defaultProps: {
                variant: 'contained',
                color: 'primary',
                // disableRipple: true,
            },
        },
    },
});
