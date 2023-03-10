import { Container } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import FilterAccourding from './FilterAccordion';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form"
import { searchedData } from '../../features/filter/filterSlice';



const Filter = () => {
    const [guestsState, setGuestsState] = React.useState({
        adults: 0,
        childs: 0,
        babies: 0,
    })

    const dispatch = useDispatch();

    const { register, handleSubmit, formState } = useForm()

    const onSubmit = (data) => {
        dispatch(searchedData({ ...data, ...guestsState }))
    };

    return (
        <Container>
            <Typography variant='h6' fontWeight={600} fontSize={'16px'} mb={2}>
                Where you want to go
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ boxShadow: "initial" }}>
                    <Stack sx={{
                        fontWeight: 500,
                        padding: 3,
                        boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
                        borderRadius: '10px',
                    }}
                    >
                        LOCATION <br />
                        <TextField
                            id="standard-basic"
                            label="Add City, Landmark or Address."
                            variant="standard"
                            sx={{ width: "100%" }}
                            {...register("address")}
                        ></TextField>
                    </Stack>

                </Box>
                <Box sx={{ boxShadow: "initial", display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                    <Stack color={'#A6A3A3'} sx={{
                        fontWeight: 500,
                        padding: 2,
                        boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
                        borderRadius: '10px',
                        width: '100%',
                    }} >
                        Arrival <br />
                        <Input
                            type={'date'}
                            {...register("arrivalDate")}
                        />
                    </Stack>
                    <Stack
                        color={'#A6A3A3'}
                        sx={{
                            fontWeight: 500,
                            padding: 2,
                            boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
                            borderRadius: '10px',
                            width: '100%'

                        }}>
                        Deprature <br />
                        <Input
                            type={'date'}
                            {...register("depratureDate")}
                        />
                    </Stack>
                </Box>
                <FilterAccourding
                    setGuestsState={setGuestsState}
                    guestsState={guestsState}
                />

                <Stack
                    position={'relative'}
                >
                    <Typography
                        type={'submit'}
                        component={'input'}
                        display={'flex'}
                        value={'Search'}
                        color={'white'}
                        mt={2}
                        alignItems='center'
                        justifyContent={'center'}
                        width={'100%'}

                        sx={{
                            background: "linear-gradient(to right, #11998e, #38ef7d)", border: "none", boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)",
                            borderRadius: '5px',
                            '&:hover': {
                                background: "linear-gradient(to right, #38ef7d,#11998e)",
                                transition: '1s',
                                cursor: "pointer",
                            },
                        }}
                        padding={2}
                    />
                    <SearchIcon

                        sx={{
                            position: 'absolute',
                            left: 225,
                            bottom: 15,
                            color: 'white'
                        }}
                    />
                </Stack>
            </form>
        </Container >
    );
};

export default Filter;

