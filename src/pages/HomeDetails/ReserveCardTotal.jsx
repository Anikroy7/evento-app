import { Divider, ListItem, ListItemText } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import List from "@mui/material/List";
import * as React from "react";
const ReserveCardTotal = () => {
  return (
    <List sx={{ width: "100%", px: 2, bgcolor: "background.paper" }}>
      <ListItem key={"value"} disableGutters>
        <ListItemText primary={`$34 * 4 nights`} />
        
        <IconButton >
        <ListItemText sx={{fontWeight:500}} primary={"$136"} />
        </IconButton>
   
      </ListItem>
      <Divider/>
      <ListItem key={"value"} disableGutters>
        <ListItemText primary={`Cleaning fee`} />
        <IconButton aria-label="comment">
        <ListItemText primary={"$136"} />
        </IconButton>
      </ListItem>
      <Divider/>
      <ListItem key={"value"} disableGutters>
        <ListItemText primary={`Service fee`} />
        <IconButton aria-label="comment">
        <ListItemText primary={"$136"} />
        </IconButton>
      </ListItem>
      <Divider/>
      <ListItem sx={{ color:'black', }} key={"value"} disableGutters>
        <ListItemText  sx={{ color:'black' }} primary={`Total`} />
        <IconButton sx={{ color:'green', fontSize:'26px'}} aria-label="comment">
        <ListItemText  primary={"$136"} />
        </IconButton>
      </ListItem>
    </List>
  );
};

export default ReserveCardTotal;
