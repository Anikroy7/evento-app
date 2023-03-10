import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';



const FilterAccourding = ({ setGuestsState, guestsState }) => {

    /*  const { data } = useSelector((state) => state.filter)
     console.log(data); */

    const { babies, adults, childs } = guestsState;
    console.log(babies, adults, childs);
    const toggleQuantity = (type, name) => {
        switch (type) {
            case '+':
                setGuestsState({
                    ...guestsState,
                    [name]: guestsState[name] + 1
                })
                break;
            case '-':
                if (guestsState[name] > 0) {
                    setGuestsState({
                        ...guestsState,
                        [name]: guestsState[name] - 1
                    })
                }
                break;
            default:
                guestsState;
                break;
        }
    }
    console.log(Object.values(guestsState).every(i => i === 0));
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
                        {Object.values(guestsState).every(i => i === 0) ? "Please select guests..." : <>
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
                        <Typography>{guestsState.adults}</Typography>
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
                        <Typography>{guestsState.childs}</Typography>
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
                        <Typography>{guestsState.babies}</Typography>
                        <AddIcon
                            onClick={() => toggleQuantity('+', 'babies')}
                        />
                    </Box>
                </Box>
                <Box textAlign={'right'}>
                    <Button color='success' variant='outlined'
                        sx={{ height: '30px', width: "30px" }}
                    >Apply</Button>
                </Box>
            </AccordionDetails>
        </Accordion >

    );
}

export default FilterAccourding;