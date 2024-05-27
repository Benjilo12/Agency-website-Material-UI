import MuiButton from "@mui/material/Button";

const styles = {
  btn: (theme) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#FFFFFF",
    padding: "20px 60px",
    background: theme.palette.slateBlue.main,
    borderRadius: "8px",
    "&:hover": {
      background: "#646ab0",
    },
  }),
};
function Button({ children }) {
  return <MuiButton sx={styles.btn}>{children}</MuiButton>;
}

export default Button;
