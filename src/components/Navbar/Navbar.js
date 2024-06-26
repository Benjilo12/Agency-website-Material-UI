import Box from "@mui/material/Box";
import BtnNav from "./BtnNav";
import { Link } from "react-router-dom"; // Correct import

const pages = [
  { title: "Demos", arrow: false, link: "/demos" },
  { title: "Services", arrow: false, link: "/services" },
  { title: "Pages", arrow: false, link: "/pages" },
  { title: "Portfolio", arrow: true },
  { title: "Blog", arrow: true },
  { title: "Contact", arrow: false, link: "/contact" },
];

function Navbar() {
  return (
    <Box
      sx={{ flexGrow: 1, display: { lg: "flex" }, justifyContent: "flex-end" }}
    >
      {pages.map((page, index) => (
        <BtnNav page={page} key={index} />
      ))}
    </Box>
  );
}

export default Navbar;
