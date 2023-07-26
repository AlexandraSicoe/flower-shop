import { Grid } from "@mui/joy";
import flowersData from "../data/flowers.json";
import FlowerCard from "./FlowerCard";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const { flowers } = flowersData;
  // console.log("flowers", flowers);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    let lsCart = localStorage.getItem("cart");
    if (lsCart) {
      lsCart = JSON.parse(lsCart);
      setCart(lsCart);
    }
  }, []);
  console.log("cart", cart);
  return (
    <>
      <Navbar cart={cart} />
      <Grid
        xs={12}
        sm={8}
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        height="100%"
        style={{
          paddingTop: "10px",
          margin: "auto",
        }}
      >
        <Grid
          container
          sx={{ flexGrow: 1, marginTop: "15px", marginBottom: "15px" }}
        >
          {flowers.map((flower, index) => {
            return <FlowerCard flower={flower} cart={cart} setCart={setCart} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default HomePage;
