import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useSelector } from "react-redux";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ReservedCardGuests = () => {
  const [expanded, setExpanded] = React.useState(false);
  const { guests:{childs, babies, adults}}= useSelector(state=> state.filter)
const totalGuests= (childs+babies+ adults)||0

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ p: 1 }}>
      <CardActions disableSpacing>
       {totalGuests} Guests
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <List>
          <ListItem disablePadding>
            <ListItemButton>            
              <ListItemText primary="Adults" />
              <ListItemText primary={adults||0} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>     
              <ListItemText primary="Childs" />
              <ListItemText primary={childs||0} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>     
              <ListItemText primary="Babies" />
              <ListItemText primary={babies||0} />
            </ListItemButton>
          </ListItem>
        </List> 
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ReservedCardGuests;
