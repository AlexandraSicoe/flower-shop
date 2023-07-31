import { Box, Button, Grid, Typography } from "@mui/joy";
import CheckoutCard from "./CheckoutCard";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let lsCart = localStorage.getItem("cart");
    lsCart = JSON.parse(lsCart);
    setCart(lsCart ? lsCart : []);
  }, []);

  useEffect(() => {
    if (cart) {
      let sum = 0;
      cart?.forEach((flower) => {
        sum = sum + flower.price;
      });
      setTotalSum(sum);
    }
  }, [cart]);

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
              Totalul dvs. este de: {totalSum} RON
            </Typography>
          </Box>
          <Button
            size="md"
            sx={{ fontSize: "20px" }}
            onClick={() => {
              localStorage.setItem("cart", "[]");
              navigate("/");
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
