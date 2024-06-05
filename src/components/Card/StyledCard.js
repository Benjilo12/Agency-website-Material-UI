import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import arrowRight from "../../assets/img/arrow-right.svg";

import style from "./style";

function StyledCard({ title, imgSrc }) {
  return (
    <MuiCard sx={style.card}>
      <CardContent sx={{ padding: 0 }}>
        <Box component="img" src={imgSrc} />
        <Typography variant="h3" sx={style.title}>
          {title}
        </Typography>
        <List>
          <ListItem sx={style.listItem}>
            <Box component="img" src={arrowRight} sx={{ marginRight: "3px" }} />
            product management
          </ListItem>
          <ListItem sx={style.listItem}>
            <Box component="img" src={arrowRight} sx={{ marginRight: "3px" }} />
            mpv definition
          </ListItem>
          <ListItem sx={style.listItem}>
            <Box component="img" src={arrowRight} sx={{ marginRight: "3px" }} />
            product strategy
          </ListItem>
        </List>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Button sx={style.btn}>
          Read More
          <Box component="img" src={arrowRight} />
        </Button>
      </CardActions>
    </MuiCard>
  );
}

export default StyledCard;
