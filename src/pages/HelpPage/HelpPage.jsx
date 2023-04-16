
import { Divider, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const HelpPage = () => {
  return (
    <div style={{padding: '24px'}}>
      <Typography variant="h3" style={{marginBottom: '16px'}}>
        Help Center
      </Typography>
      <Divider />
      <div style={{marginTop: '24px', marginBottom: '24px'}}>
        <Typography mb={3} variant="h5">Frequently Asked Questions</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography sx={{fontWeight:500}}  variant="subtitle1">How do I make a reservation?</Typography>
            <Typography variant="body1">You can make a reservation by visiting our website or by calling our reservations department.</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography sx={{fontWeight:500}}  variant="subtitle1">What is your cancellation policy?</Typography>
            <Typography variant="body1">Our cancellation policy varies depending on the rate plan you choose. Please refer to the terms and conditions when making your reservation.</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography  sx={{fontWeight:500}} variant="subtitle1">Do you offer airport transportation?</Typography>
            <Typography variant="body1">Yes, we offer airport transportation for a fee. Please contact our concierge department for more information.</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography sx={{fontWeight:500}}  variant="subtitle1">What are your check-in and check-out times?</Typography>
            <Typography variant="body1">Our check-in time is 3:00 PM and our check-out time is 12:00 PM.</Typography>
          </Grid>
        </Grid>
      </div>
      <div style={{marginTop: '24px', marginBottom: '24px'}}>
        <Typography variant="h5">Contact Us</Typography>
        <Typography variant="body1" style={{marginTop: '16px', marginBottom: '16px'}}>If you need further assistance or have any questions, please don't hesitate to contact us:</Typography>
        <Typography variant="body1">Phone: <Link href="tel:1-800-123-4567" style={{cursor: 'pointer', textDecoration: 'underline'}}>01786335131</Link></Typography>
        <Typography variant="body1">Email: <Link href="mailto:info@hotel.com" style={{cursor: 'pointer', textDecoration: 'underline'}}>anikkumerroy7@gmail.com</Link></Typography>
      </div>
    </div>
  );
};

export default HelpPage;
