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
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as MuiLink } from "@mui/material";

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
        name: 'login',
        to: 'login'
    },
    {
        name: 'signup',
        to: 'signup'
    }
];


function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



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
                                        my: 2, color: '#11998e', display: 'block', fontWeight: "500",
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: "#06472E",
                                            cursor: "pointer",
                                            transition: '1s'
                                        }
                                    }} to={`/${to}`} > {name}
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
                        }} to='/' component={ReactRouterLink}>Eventoo</MuiLink>
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
                        {pages.map(({ name, to }) => (
                            <MuiLink component={ReactRouterLink} sx={{
                                marginLeft: '5px', color: '#11998e', display: 'block', marginRight: 2, fontWeight: "500",
                                textDecoration: 'none',
                                '&:hover': {
                                    color: "#06472E",
                                    cursor: "pointer",
                                    transition: '1s'
                                }
                            }} to={`/${to}`} >
                                <Typography
                                    variant='caption'
                                    key={name}
                                    onClick={handleCloseNavMenu}
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