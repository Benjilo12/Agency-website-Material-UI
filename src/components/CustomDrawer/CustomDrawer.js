import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import close from "../../assets/img/close.svg";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import Navbar from "../Navbar/Navbar";

const StyledBox = styled(Box)`
  padding: 2px;
`;

function CustomDrawer({ open, onClose }) {
  return (
    <Drawer
      PaperProps={{
        sx: { width: "100%" },
      }}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <StyledBox>
        <IconButton onClick={onClose} sx={{ padding: 0, marginLeft: "5px" }}>
          <img src={close} alt="close" />
        </IconButton>
        <Box sx={{ padding: "44px" }}>
          <Navbar />
        </Box>
      </StyledBox>
    </Drawer>
  );
}

export default CustomDrawer;
