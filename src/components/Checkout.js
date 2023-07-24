import { Grid } from "@mui/joy";
import CheckoutCard from "./CheckoutCard";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";


const Checkout = () => {
  const [cart, setCart] = useState([]);
useEffect(() => {
  
let lsCart=localStorage.getItem("cart")
lsCart=JSON.parse(lsCart)
setCart(lsCart)
}, [])

  return (
    <>
      <Navbar />

      <Grid
        xs={12}
        sm={8}
        md={8}
        container
        justifyContent="flex-start"
        direction="column"
        height="100%"
      >
        {cart?.map((flower, index) => {
          return <CheckoutCard flower={flower} />;
        })}
      </Grid>
    </>
  );
};
export default Checkout;
