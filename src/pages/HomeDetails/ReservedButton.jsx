import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { Stack, Typography } from '@mui/material';
import React from 'react';
const ReservedButton = () => {
    return (
        <Stack
        position={'relative'}
    >
        <Typography
            type={'submit'}
            component={'input'}
            display={'flex'}
            value={'Reserve'}
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
        <BookOnlineIcon
            sx={{
                position: 'absolute',
                left: 290,
                bottom: 15,
                color: 'white'
            }}
        />
    </Stack>
    );
};

export default ReservedButton;