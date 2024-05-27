import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomButton from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button variant="contained" color="slateBlue">
        Test
      </Button>
      <Typography variant="body1">HELLO</Typography>
      <CustomButton>Custom Props</CustomButton>
    </div>
  );
}

export default App;
