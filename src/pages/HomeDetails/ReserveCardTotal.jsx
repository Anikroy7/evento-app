import { Divider, ListItem, ListItemText } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import List from "@mui/material/List";
import { differenceInDays } from 'date-fns';
import * as React from "react";
import { useSelector } from "react-redux";



const ReserveCardTotal = ({data}) => {

  
const {filter:{ depratureDate, arrivalDate}}= useSelector(state=> state);
const {price}= data
  const days = differenceInDays(new Date(depratureDate), new Date(arrivalDate))
  console.log(days);


  return (
    <List sx={{ width: "100%", px: 2, bgcolor: "background.paper" }}>
      <ListItem disableGutters>
        <ListItemText primary={`$${price} * ${days} nights`} />
        
        <IconButton >
        <ListItemText sx={{fontWeight:500}} primary={`$${parseInt(days)*price}`} />
        </IconButton>
   
      </ListItem>
      <Divider/>
      <ListItem disableGutters>
        <ListItemText primary={`Cleaning fee`} />
        <IconButton aria-label="comment">
        <ListItemText primary={"$136"} />
        </IconButton>
      </ListItem>
      <Divider/>
      <ListItem disableGutters>
        <ListItemText primary={`Service fee`} />
        <IconButton aria-label="comment">
        <ListItemText primary={"$136"} />
        </IconButton>
      </ListItem>
      <Divider/>
      <ListItem sx={{ color:'black', }} key={"value"} disableGutters>
        <ListItemText  sx={{ color:'black' }} primary={`Total`} />
        <IconButton sx={{ color:'green', fontSize:'26px'}} aria-label="comment">
        <ListItemText  primary={price*5} />
        </IconButton>
      </ListItem>
    </List>
  );
};

export default ReserveCardTotal;
