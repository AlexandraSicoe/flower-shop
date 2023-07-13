import { Grid } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import FlowerCard from "./FlowerCard";
import flowersData from "../data/flowers.json";
const HomePage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
      height="100%"
      style={{
        backgroundColor: "white	",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Typography
        level="h1"
        textAlign="center"
        textColor="#FAA0A0"
        sx={{ fontFamily: "Fasthand", fontSize: "100px" }}
      >
        Flower Bits
      </Typography>
      <FlowerCard />
    </Grid>
  );
};
export default HomePage;
