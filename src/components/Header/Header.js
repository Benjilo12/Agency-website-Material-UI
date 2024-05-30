import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb"; // Importing AdbIcon
import style from "./style.js";
import Navbar from "../Navbar/Navbar";
import CustomDrawer from "../CustomDrawer/CustomDrawer.js";
import logo_desk from "../../assets/img/logo_desk.svg";
import logo_mob from "../../assets/img/logo_mob.svg";
import burger_menu from "../../assets/img/burger_menu.svg";
import { useState } from "react";

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <AppBar position="static" sx={style.appBar}>
      <Container maxWidth="xl" sx={style.container}>
        <CustomDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography component="a" href="/" sx={style.logoDesk}>
            <img src={logo_desk} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              security="large"
              aria-label="menu"
              onClick={() => setOpenDrawer(true)}
            >
              <img src={burger_menu} alt="burger menu" />
            </IconButton>
          </Box>
          <Typography component="a" href="/" sx={style.logoMob}>
            <img src={logo_mob} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            <Navbar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
