import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import { Link as MuiLink, Paper } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { logout } from '../../features/auth/authSlice';
import { Stack } from '@mui/system';
import isEmpty from '../utils/isEmpty';





function Navbar() {
    const { auth: authState, filter } = useSelector((state) => state);

    const location = useLocation();
    const pathname = location.pathname;
    const { address, arrivalDate, depratureDate, guests } = filter;
    const { childs, babies, adults } = guests
    const dispatch = useDispatch();
    const pages = [
        {
            name: 'Host your home',
            to: 'home'
        },
        {
            name: 'Host your experience',
            to: 'experience'
        },
        {
            name: 'help',
            to: 'help'
        },
        {
            name: authState.email ? 'Logout' : 'Login',
            to: authState.email ? '' : 'login'
        },
        {
            name: authState.email ? "" : 'Signup',
            to: 'signup'
        }
    ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const isBlank = isEmpty(guests);

    // formated Date
    let formatedDate;
    if (!isBlank) {
        formatedDate = `${new Date(depratureDate).toLocaleString('default', { month: 'long' })
            } ${new Date(arrivalDate).getDate()}-${new Date(depratureDate).getDate()}`
    }
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLogout = (name) => {
        if (name === 'Logout') {
            signOut(auth)
                .then(() => {
                    dispatch(logout())
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }

    const totalGuests = adults + babies + childs;

    return (
        <AppBar sx={{ paddingY: "20px" }} style={{ background: 'white' }} position="sticky">
            <Container maxWidth="lg">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between', }}>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            {pages.map(({ name, to }) => (
                                <MenuItem key={name} onClick={handleCloseNavMenu}>
                                    <MuiLink component={ReactRouterLink} sx={{
                                        my: 2, display: 'block', fontWeight: "500",
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: "#06472E",
                                            cursor: "pointer",
                                            transition: '1s'
                                        }
                                    }} to={`/${to}`}

                                    > {name}
                                    </MuiLink>

                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,

                        }}
                    >
                        <MuiLink sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: '#11998e',
                            textDecoration: 'none',
                        }} to='/' component={ReactRouterLink}>Evento</MuiLink>
                    </Typography>
                    <Typography
                        variant="h4"
                        noWrap

                    >
                        <MuiLink sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: '#11998e',
                            textDecoration: 'none',
                        }} to='/' component={ReactRouterLink}>Evento</MuiLink>
                    </Typography>


                    <Box sx={{ display: { xs: 'none', md: 'flex', } }}>

                        {(!isBlank) && (pathname !== '/') && <Stack Stack sx={{
                            color: 'black',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 2,
                            marginRight: 3
                        }}>
                            <Paper sx={{ paddingX: 2, paddingY: 1 }}>
                                {address}
                            </Paper>
                            <Paper sx={{ paddingX: 2, paddingY: 1 }}>
                                {formatedDate}
                            </Paper>
                            <Paper sx={{ paddingX: 2, paddingY: 1 }}>
                                {totalGuests} Guests
                            </Paper>

                        </Stack>}

                        {pages.map(({ name, to }) => (
                            <MuiLink key={name} component={ReactRouterLink} sx={{
                                marginLeft: '5px',
                                marginRight: 2,
                                fontWeight: "500",
                                textDecoration: 'none',
                                '&:hover': {
                                    color: "#06472E",
                                    cursor: "pointer",
                                    transition: '1s'
                                },

                                display: (!isBlank && pathname !== '/' && name !== 'help' && name !== 'Login' && name !== 'Signup' && name !== 'Logout') ? "none" : "block"

                            }} to={`/${to}`} >
                                <Typography
                                    variant='body2'
                                    fontWeight={500}
                                    key={name}
                                    onClick={() => handleLogout(name)}
                                >
                                    {name}
                                </Typography>
                            </MuiLink>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default Navbar;