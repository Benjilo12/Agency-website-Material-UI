import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import style from "./style";
import StyledCard from "../Card/StyledCard";
import { Stack } from "@mui/material";

//SVG ICONS AND IMAGES
import strategy_svg from "../../assets/img/strategy.svg";
import design_svg from "../../assets/img/vector-art-and-design-svgrepo-com.svg";
import development_svg from "../../assets/img/code-coding-development-programming-web-webpage-svgrepo-com.svg";

const data = [
  {
    title: "strategy",
    svg: strategy_svg,
  },
  {
    title: "Product design",
    svg: design_svg,
  },
  {
    title: "Development",
    svg: development_svg,
  },
];

function CreativeDesign() {
  return (
    <Box sx={style.CreativeDesign}>
      <Box sx={style.wrapper}>
        <Typography variant="h2">Creative design solutions</Typography>
        <Typography
          variant="body1"
          sx={{ textTransform: "capitalize", margin: "25px 0" }}
        >
          professional design agency to provide solutions
        </Typography>
        <Stack sx={style.stack}>
          {data.map((item, index) => {
            return (
              <StyledCard title={item.title} imgSrc={item.svg} key={index} />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default CreativeDesign;
