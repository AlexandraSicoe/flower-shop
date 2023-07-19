import { Grid } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import React, { useState } from "react";
import flowersData from "../data/flowers.json";
import FlowerCard from "./FlowerCard";

const HomePage = () => {
  const { flowers } = flowersData;
  // console.log("flowers", flowers);
  const [cart, setCart] = useState([]);
  console.log("cart", cart);
  return (
    <Grid
      xs={8}
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
      height="100%"
      style={{
        backgroundColor: "white	",
        paddingTop: "10px",
        margin: "auto",
      }}
    >
      <nav> </nav>
      <Typography
        level="h1"
        textAlign="center"
        textColor="#FAA0A0"
        sx={{ fontFamily: "Fasthand" }}
      >
        Flower Bits
      </Typography>
      <Grid
        container
        sx={{ flexGrow: 1, marginTop: "15px", marginBottom: "15px" }}
      >
        {flowers.map((flower, index) => {
          return <FlowerCard flower={flower} cart={cart} setCart={setCart} />;
        })}
      </Grid>
    </Grid>
  );
};
export default HomePage;
