import { Box, Stack } from '@mui/material';
import React from 'react';
import { Container } from '@mui/system';
import Filter from '../../Components/Filter/Filter';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import Experiences from '../../Components/Experiences/Experiences';
import Homes from '../../Components/Homes/Homes';

const Home = () => {

    const [hidden, setHidden] = React.useState(true);
    const handleHiddenChange = (event) => {
        setHidden(event.target.checked);
    };

    return (
        <Box sx={{ py: 2 }} width="100%" mx={'auto'}>

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
            <Stack container={hidden.toString()} mx={'auto'} spacing={2} sx={{
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



        </Box >
    );
};

export default Home;