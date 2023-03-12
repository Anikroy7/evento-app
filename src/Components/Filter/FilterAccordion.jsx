import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { toogleGuestQuantity } from '../../features/filter/filterSlice';




const FilterAccourding = ({ isBlanks }) => {
    const dispatch = useDispatch()

    const { filter: { guests } } = useSelector(state => state)
    const { childs, babies, adults } = guests

    const toggleQuantity = (type, name) => {
        dispatch(toogleGuestQuantity({ name, type }))
    }


    return (

        <Accordion sx={{ boxShadow: "0 4px 6px 1px rgb(2 0 0 / 0.1)", borderRadius: '10px', mt: 3 }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Box>
                    <Typography sx={{ paddingY: 1 }} color={'#A6A3A3'} variant='body2'>Guests</Typography>
                    <Typography variant='body2' fontWeight={500}>
                        {isBlanks ? "Please select guests..." : <>
                            {adults ? `${adults} ADULTS, ` : ''}
                            {childs ? `${childs} CHILDS, ` : ''}
                            {babies ? `${babies} BABIES` : ''}
                        </>}

                    </Typography>
                </Box>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
                <Box py={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography variant='body2' fontWeight={600}>ADULTS</Typography>
                    <Box display={'flex'} alignItems='center' gap={2}>

                        <RemoveIcon
                            onClick={() => toggleQuantity('-', 'adults')}
                        />
                        <Typography>{adults}</Typography>
                        <AddIcon
                            onClick={() => toggleQuantity('+', 'adults')}
                        />
                    </Box>
                </Box>
                <Box py={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography variant='body2' fontWeight={600}>
                        CHILDS <br />
                        <Typography variant='caption' color={'#A6A3A3'}>Age 2-12</Typography>
                    </Typography>
                    <Box display={'flex'} alignItems='center' gap={2}>
                        <RemoveIcon
                            onClick={() => toggleQuantity('-', 'childs')}
                        />
                        <Typography>{childs}</Typography>
                        <AddIcon
                            onClick={() => toggleQuantity('+', 'childs')}
                        />
                    </Box>
                </Box>
                <Box py={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography variant='body2' fontWeight={600}>
                        BABIES
                        <br />
                        <Typography variant='caption' color={'#A6A3A3'}>Younger than 2</Typography>
                    </Typography>
                    <Box display={'flex'} alignItems='center' gap={2}>
                        <RemoveIcon
                            onClick={() => toggleQuantity('-', 'babies')}
                        />
                        <Typography>{babies}</Typography>
                        <AddIcon
                            onClick={() => toggleQuantity('+', 'babies')}
                        />
                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion >

    );
}

export default FilterAccourding;