import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Filter from '../../Components/Filter/Filter';
import { useGetExperienceQuery } from '../../features/api/experienceApi';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';

const Home = () => {

    const [hidden, setHidden] = React.useState(true);


    const handleHiddenChange = (event) => {
        setHidden(event.target.checked);
    };
    console.log(hidden);
    const { isError, data, endpointName } = useGetExperienceQuery();
    console.log(data);
    return (
        <Box>

            {/* Main Section */}

            {/* filter Section */}
            <Container maxWidth="xl" sx={{ paddingY: 2, display: 'flex', alignItems: 'center' }}>
                <FormControlLabel
                    control={
                        <Switch checked={hidden} onChange={handleHiddenChange} color="primary" />
                    }
                    label="Filter"
                />
                <FilterListIcon />
            </Container>
            <Grid container spacing={2}>
                <Grid hidden={!hidden} item xs={12} lg={5} md={5}>
                    <Filter />
                </Grid>



                {/* Products */}
                <Grid item xs={12} lg={7} md={7}>
                    xs
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;