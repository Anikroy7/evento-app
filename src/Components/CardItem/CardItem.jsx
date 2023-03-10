import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

const CardItem = ({ data }) => {

    const { address, category, image, price, title } = data

    const getImage = image.data.attributes.formats.thumbnail.url;

    return (
        <Card sx={{ maxWidth: '250px', width: 'auto', px: 1, minWidth: '250px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    width='200'
                    image={`${import.meta.env.VITE_IMAGE_URL}${getImage}`}
                    alt="green iguana"
                />
                <Box sx={{ display: 'flex', mt: 1, flexDirection: 'row' }}>
                    <Typography variant='body2' color='#004d4d' fontWeight={700} >{category}-</Typography>
                    <Typography variant='body2' color='#004d4d' fontWeight={700} >{address}</Typography>
                </Box>
                <Box>
                    <Typography gutterBottom fontWeight={500} variant="body1" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${price} per person
                    </Typography>
                </Box>

            </CardActionArea >
        </Card >
    );
}
export default CardItem;