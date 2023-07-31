import { Grid } from "@mui/joy";
import React, { useEffect, useState } from "react";
import flowersData from "../data/flowers.json";
import FlowerCard from "./FlowerCard";
import Navbar from "./Navbar";

const HomePage = () => {
  const { flowers } = flowersData;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let lsCart = localStorage.getItem("cart");
    lsCart = JSON.parse(lsCart);
    setCart(lsCart ? lsCart : []);
    // same as below
    // if(lsCart != null) {
    //   setCart(lsCart);
    // }
    // else {
    //   setCart([]);
    // }
  }, []);

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
            return (
              <FlowerCard
                key={index}
                flower={flower}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default HomePage;
