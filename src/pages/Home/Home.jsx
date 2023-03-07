import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Filter from '../../Components/Filter/Filter';


const Home = () => {
    return (
        <Box>

            {/* Main Section */}

            <Container maxWidth="xl" sx={{ paddingY: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={5} md={5}>
                        <Filter />
                    </Grid>
                    <Grid item xs={12} lg={7} md={7}>
                        xs=7
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;