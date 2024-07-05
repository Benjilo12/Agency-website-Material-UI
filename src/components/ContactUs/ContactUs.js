import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//SVG ICONS AND IMAGES
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import photo_send from "../../assets/img/photo_send_2.png";

import style from "./style";
import FormComponent from "./FormComponent";

function ContactUs() {
  return (
    <Box sx={style.contactUs}>
      <Box sx={style.wrapper}>
        <Box sx={style.form}>
          <Typography variant="h2">mind! contact us</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum,
            sagittis eget facilisi in in urna tristique risus. Tortor
            consectetur nulla pretium malesuada porttitor.
          </Typography>
          <Box sx={style.info}>
            <Box sx={style.itemBlockInfo}>
              <Box sx={style.titleInfo}>
                <MailOutlineIcon sx={style.imgInfo} />
                email us
              </Box>
              <Box sx={style.titleValue}>support@gmail.com</Box>
            </Box>
            <Box sx={style.itemBlockInfo}>
              <Box sx={style.titleInfo}>
                <LocalPhoneIcon sx={style.imgInfo} />
                phone us
              </Box>
              <Box sx={style.titleValue}>+233 (345) 67 189</Box>
            </Box>
          </Box>

          <FormComponent />
        </Box>
        <Box>
          <Box component="img" src={photo_send} sx={style.photo} />
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;
