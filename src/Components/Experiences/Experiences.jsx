import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import CardItem from '../../Components/CardItem/CardItem';
import ItemSkeleton from '../../Components/utils/Skeleton ';
import { useGetExperienceQuery } from '../../features/api/experienceApi';
const Experiences = () => {

    const { isLoading, data } = useGetExperienceQuery();
    return (
        <>
            <Typography variant='h6' sx={{ mb: 1 }}>
                Experiences
            </Typography>

            {
                isLoading ? <ItemSkeleton loading={true} /> : <Box  mx={'auto'} sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, px: 3 }}>
                    {
                        data?.data?.slice(0, 3).map(({ attributes, id ,}) => {
                            return <CardItem key={id} name={'Experience'}  data={attributes} />
                        })
                    }
                </Box>
            }
            <Box sx={{ textAlign: 'right', }}>
                <Button variant='outlined' sx={{
                    border: 'none',
                    mt: 1,
                    '&:hover': {
                        border: 'none',
                        cursor: "pointer",
                        transition: '1s'
                    }
                }}>Show All
                    <ArrowRightAltIcon />
                </Button>
            </Box>
        </>
    );
};

export default Experiences;