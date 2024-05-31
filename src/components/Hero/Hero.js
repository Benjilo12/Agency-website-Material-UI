import { Box } from "@mui/material";
import photo_banner from "../../assets/img/photo_banner.png";

import Typography from "@mui/material/Typography";
import style from "./style";
function Hero() {
  return (
    <Box sx={style.hero}>
      <Box sx={style.wrapper}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h2">The most Advanced Education</Typography>
          <Typography variant="body1" sx={style.text}>
            Choose out of 2500+ mentors. Trusted by 250k users. <br />
            Industry experts and top university professors Runs in a browser.
            Can be downloaded on desktop, tablet and mobiles. Extremely fast
            loading at 200ms. Updates work directory from the website.
          </Typography>
        </Box>
        <Box component="img" src={photo_banner} sx={style.photo} />
      </Box>
    </Box>
  );
}

export default Hero;
