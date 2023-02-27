import { Container } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import FilterAccourding from './FilterAccordion';
import { Search } from '@mui/icons-material';





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
                    padding: 2,
                    boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
                    borderRadius: '10px',
                    width: '100%',

                }}>
                    Arrival <br />
                    <Input type={'date'} />
                </Typography>
                <Typography color={'#A6A3A3'} sx={{
                    fontWeight: 500,
                    padding: 2,
                    boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
                    borderRadius: '10px',
                    width: '100%'

                }}>
                    Deprature <br />
                    <Input type={'date'} />
                </Typography>
            </Box>
            <FilterAccourding />

            <Stack color={'white'} mt={2} display={'flex'} alignItems='center' justifyContent={'center'} width={'100%'} component={'button'} sx={{
                background: "linear-gradient(to right, #11998e, #38ef7d)", border: "none", boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
                borderRadius: '5px',
                '&:hover': {
                    background: "linear-gradient(to right, #38ef7d,#11998e)",
                },
            }} padding={2}
            >
                <Typography display={'flex'} ><Search />Search</Typography>
            </Stack>
        </Container >
    );
};

export default Filter;