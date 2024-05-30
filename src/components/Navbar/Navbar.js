import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import arrow from "../../assets/img/chevron-down.svg";
import { styled } from "@mui/material/styles";

const pages = [
  { title: "Home", arrow: true },
  { title: "Services", arrow: true },
  { title: "Pages", arrow: true },
  { title: "Portfolio", arrow: true },
  { title: "Blog", arrow: true },
  { title: "Contact", arrow: false },
];

const StyledButton = styled(Button)`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  display: flex;
  padding: 0;
  margin-right: 44px;
  color: #000000;
`;

function Navbar() {
  return (
    <Box
      sx={{ flexGrow: 1, display: { lg: "flex" }, justifyContent: "flex-end" }}
    >
      {pages.map((page, index) => (
        <StyledButton key={index}>
          {page.title}
          {page.arrow && (
            <img src={arrow} style={{ marginLeft: "5px" }} alt="arrow" />
          )}
        </StyledButton>
      ))}
    </Box>
  );
}

export default Navbar;
