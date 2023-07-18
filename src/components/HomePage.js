import { Grid } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import React from "react";
import flowersData from "../data/flowers.json";
import FlowerCard from "./FlowerCard";
const HomePage = () => {
  const { flowers } = flowersData;
  console.log(flowers);

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
      height="100%"
      style={{
        backgroundColor: "white	",
        paddingTop: "10px",
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
      <Grid
        container
        sx={{ flexGrow: 1, marginTop: "15px", marginBottom: "15px" }}
      >
        {flowers.map((flower, index) => {
          return (
            <FlowerCard
              name={flower.name}
              image={flower.image}
              price={flower.price}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};
export default HomePage;
