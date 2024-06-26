import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";

//SVG ICONS AND IMAGES
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import photo_send from "../../assets/img/photo_send_2.png";

import style from "./style";

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

          <Box sx={style.input}>
            <TextField placeholder="Full name" sx={style.textField} />
            <TextField placeholder="Email address" sx={style.textField} />
          </Box>
          <TextareaAutosize
            minRows={6}
            placeholder="write message"
            style={style.textareaAutosize}
          />
          <Button variant="contained" color="primary">
            send us message <ArrowForwardIosIcon />
          </Button>
        </Box>
        <Box>
          <Box component="img" src={photo_send} sx={style.photo} />
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;
