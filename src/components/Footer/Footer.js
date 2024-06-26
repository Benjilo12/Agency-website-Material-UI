import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

//SVG ICONS AND IMAGES
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import behince from "../../assets/img/behince.svg";
import medium from "../../assets/img/medium.svg";
import dribble from "../../assets/img/dribble.svg";

import style from "./style";

const services = [
  "UX/UI Design",
  "web development",
  "SEO Optimization",
  "product design",
  "logo design",
  "brand design",
];

const links = [
  "about agency",
  "latest news & blog",
  "meet the team",
  "popular services",
  "testimonials",
  "neeed a Career?",
];

const follow = [
  { title: "dribbble", img: dribble },
  { title: "instagram", img: <InstagramIcon sx={style.icon} /> },
  { title: "twitter", img: <TwitterIcon sx={style.icon} /> },
  { title: "behince", img: behince },
  { title: "facebook", img: <FacebookIcon sx={style.icon} /> },
  { title: "medium", img: medium },
];

function Footer() {
  return (
    <Box sx={style.footer}>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={style.gridWrapper}>
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" sx={style.linkTitle}>
              services
            </Typography>
            <List>
              {services.map((item, index) => {
                return (
                  <ListItem sx={style.itemList} key={index}>
                    {item}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" sx={style.linkTitle}>
              links
            </Typography>
            <List>
              {links.map((item, index) => {
                return (
                  <ListItem sx={style.itemList} key={index}>
                    {item}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box>
            <Typography variant="h3" sx={style.linkTitle}>
              follow
            </Typography>
            <List>
              {follow.map((item, index) => {
                return (
                  <ListItem sx={style.itemList} key={index}>
                    {typeof item.img === "string" ? (
                      <Box component="img" src={item.img} />
                    ) : (
                      item.img
                    )}
                    <Box component="span" sx={{ marginLeft: "5px" }}>
                      {item.title}
                    </Box>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={4} sx={style.emailBlock}>
          <Box sx={style.subscribeFooter}>
            <Typography variant="h3" sx={style.title}>
              subscribe our newsletter
            </Typography>
            <Typography sx={style.text}>
              Lorem ipsum dolor sit amet,{" "}
              <Link sx={{ color: "#777FEB" }}> consectetur adipiscing </Link>
              elit.consectetur. psum dolor sit am psum dolor sit am.{" "}
            </Typography>
            <Paper component="form" sx={style.paper}>
              <InputBase sx={style.inputBase} placeholder="Email address" />
              <Button sx={style.btn}>sign up</Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
