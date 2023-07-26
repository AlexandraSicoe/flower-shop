import { Box, Grid } from "@mui/joy";
import CheckoutCard from "./CheckoutCard";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";

const Checkout = () => {
  const [cart, setCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0); //cand schimbam un state nu avem =.
  // const [totalFlowers, setTotalFlowers] = useState("");
  // if(cart) {useEffect(() => {
  //   let flowerSum = "";
  //   cart.forEach((flower) => {
  //     flowerSum = flowerSum + flower.name + ", ";
  //   });
  //   setTotalFlowers(flowerSum);
  // }, [cart]);}

  useEffect(() => {
    if (cart) {
      let sum = 0;
      cart.forEach((flower) => {
        sum = sum + flower.price;
      });
      setTotalPrice(sum);
    }
  }, [cart]);
  useEffect(() => {
    let lsCart = localStorage.getItem("cart");
    if (lsCart) {
      lsCart = JSON.parse(lsCart);
      setCart(lsCart);
    }
  }, []);

  return (
    <>
      <Navbar totalPrice={totalPrice} cart={cart} />

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
        <Box>
          <p>Your total price:{totalPrice}</p>
        </Box>
      </Grid>
    </>
  );
};
export default Checkout;
