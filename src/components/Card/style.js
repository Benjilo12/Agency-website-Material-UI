const style = {
  card: (theme) => ({
    textAlign: "left",
    border: `0.5px solid ${theme.palette.slateBlue.main}`,
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.2)`,
    padding: `44px`,
    width: "403px",
    boxSizing: "border-box",
    [theme.breakpoints.up("md")]: {
      maxWidth: "403px",
    },
  }),

  btn: (theme) => ({
    fontFamily: "Montserrat",
    fontWeIGHT: 500,
    fontSize: "16px",
    textDecorationLine: "underline",
    textTransform: "capitalize",
    color: theme.palette.slateBlue.main,
  }),
  listItem: (theme) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    padding: "12px 0",
  }),
};

export default style;
