import FilterListIcon from '@mui/icons-material/FilterList';
import { Box, Stack } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import Experiences from '../../Components/Experiences/Experiences';
import Filter from '../../Components/Filter/Filter';
import Homes from '../../Components/Homes/Homes';

const Home = () => {
// let comingsoon="false"
    const [hidden, setHidden] = useState(true);
    const handleHiddenChange = (event) => {
        setHidden(event.target.checked);
    };
 

    return (
        <Stack maxWidth={"xl"} marginX={"auto"}>

            {/* filter Section */}
            <Container maxWidth="xl" sx={{ paddingY: 2, display: 'flex', alignItems: 'center', display: { lg: 'none' } }} >
                <FormControlLabel
                    control={
                        <Switch checked={hidden} onChange={handleHiddenChange} color="primary" />
                    }
                    label="Filter"
                />
                <FilterListIcon />
            </Container>
            <Stack  mx={'auto'} spacing={2} sx={{
                display: 'flex',
                flexDirection: { md: "row", sm: "column", lg: 'row' },
            }}>
                <Box hidden={!hidden} >
                    <Filter />
                </Box>

                <Stack>

                    {/*Experience Items */}

                    <Box>
                        <Experiences />
                    </Box>
                    
                    {/* Homes Items */}

                    <Box>
                        <Homes />
                    </Box>

                </Stack>

            </Stack >



        </Stack >
    );
};

export default Home;