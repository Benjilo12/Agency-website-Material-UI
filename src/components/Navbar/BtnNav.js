import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import DropDown from "./DropDown";
import { styled } from "@mui/material/styles";

const StylesLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  display: flex;
  padding: 0;
  margin-right: 44px;
  color: #000000;
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer;
`;

function BtnNav({ page }) {
  return (
    <>
      {page.arrow ? (
        <DropDown page={page} />
      ) : (
        <StylesLink
          component={NavLink}
          to={page.link}
          style={({ isActive }) =>
            isActive ? { color: "#777FEB" } : undefined
          }
        >
          {page.title}
        </StylesLink>
      )}
    </>
  );
}

export default BtnNav;
