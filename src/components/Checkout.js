import { Box, Button, Grid, Typography } from "@mui/joy";
import CheckoutCard from "./CheckoutCard";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    let lsCart = localStorage.getItem("cart");
    lsCart = JSON.parse(lsCart);
    setCart(lsCart);
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "black", p: 2, backgroundColor: "primary" }}
              level="body2"
            >
              Your total sum is: {totalSum} RON
            </Typography>
          </Box>
          <Button
            size="md"
            sx={{ fontSize: "20px" }}
            onClick={() => {
              localStorage.clear();
              useNavigate("/");
            }}
          >
            Finalizeaza comanda
          </Button>
        </Box>
      </Grid>
    </>
  );
};
export default Checkout;
