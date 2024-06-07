import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

//SVG ICONS AND IMAGES
import dashboardPhoto from "../../assets/img/dashboard-photo.svg";
import landingPagePhoto from "../../assets/img/landing-page-photo.svg";
import illustrationPagePhoto from "../../assets/img/illustration-page-photo.svg";
import style from "./style";

const links = [
  "Show all",
  "Design",
  "Branding",
  "Development",
  "Seo",
  "UX/UI Design",
];

function Experience() {
  return (
    <Box sx={style.experience}>
      <Box sx={style.wrapper}>
        <Typography variant="h2">professional experience</Typography>
        <Typography
          variant="body1"
          sx={{ textTransform: "capitalize", margin: "25px 0" }}
        >
          professional design agency to provide solutions
        </Typography>
        <Box sx={style.links}>
          {links.map((link, index) => {
            return <Link key={index}>{link}</Link>;
          })}
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component="img" src={dashboardPhoto} sx={style.imgItem} />
              <Typography sx={style.contentTitle}>dashboard design</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component="img" src={landingPagePhoto} sx={style.imgItem} />
              <Typography sx={style.contentTitle}>Landing Page</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box
                component="img"
                src={illustrationPagePhoto}
                sx={style.imgItem}
              />
              <Typography sx={style.contentTitle}>
                illustration Design
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Experience;
