import { Container } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import FilterAccourding from './FilterAccordion';





const Filter = () => {
    return (
        <Container>
            <Typography variant='h6' fontWeight={600} fontSize={'16px'} mb={2}>
                Where you want to go
            </Typography>
            <Box sx={{ boxShadow: "initial" }}>
                <Typography sx={{
                    fontWeight: 500,
                    padding: 3,
                    boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
                    borderRadius: '10px',

                }}>
                    LOCATION <br />
                    <TextField id="standard-basic" label="Add City, Landmark or Address." variant="standard"
                        sx={{ width: "100%" }}
                    ></TextField>
                </Typography>

            </Box>
            <Box sx={{ boxShadow: "initial", display: 'flex' }}>
                <Typography color={'#A6A3A3'} sx={{
                    fontWeight: 500,
                    padding: 3,
                    boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
                    borderRadius: '10px',
                    width: '100%',

                }}>
                    Arrival <br />
                    <Input type={'date'} />
                </Typography>
                <Typography color={'#A6A3A3'} sx={{
                    fontWeight: 500,
                    padding: 3,
                    boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
                    borderRadius: '10px',
                    width: '100%'

                }}>
                    Deprature <br />
                    <Input type={'date'} />
                </Typography>
            </Box>

            {/* Filter According */}

            <FilterAccourding />
        </Container >
    );
};

export default Filter;