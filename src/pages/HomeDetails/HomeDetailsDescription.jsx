import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

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

const HomeDetailsDescription = ({ data }) => {
  const [expanded, setExpanded] = React.useState(false);
  const { description } = data;
  const firstSlice = description.slice(0, 300);
  const secondSlice = description.slice(300, 600);
  const thirdSlice = description.slice(600, 900);
  const finalSlice = description.slice(900, description.length)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ boxShadow: "none" }}>
      <CardContent>
        <Typography mb={1} component="p" color="text.secondary">
          {firstSlice} .
        </Typography>
        <Typography mb={1} component="p" color="text.secondary">
          {secondSlice} .
        </Typography>
        <Typography mb={1} component="p" color="text.secondary">
          {thirdSlice} .
        </Typography>
      </CardContent>
      <CardActions  expand={expanded}
          onClick={handleExpandClick} disableSpacing>
        <Typography
         
          fontWeight={500}
          color={"#38ef7d"}
          sx={{cursor:'pointer'}}
        >
          Read more about the space
        </Typography>
        <ExpandMore      
         expand={expanded}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography color="text.secondary" paragraph>{finalSlice}.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default HomeDetailsDescription;
