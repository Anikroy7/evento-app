import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Loading = () => {
    return (
        <Box sx={{ mr: 1, display: 'flex', justifyContent: 'center', }}>
            <CircularProgress size={20} color='inherit' />
        </Box>
    );
};

export default Loading; 