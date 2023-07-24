import { Grid } from "@mui/joy";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = ({ cart }) => {
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

  return (
    <Grid
      xs={12}
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ backgroundColor: "black", p: 3 }}
    >
      <Typography
        textAlign="center"
        textColor="#FAA0A0"
        sx={{
          fontFamily: "Fasthand",
          fontSize: { xs: "25px" },
        }}
      >
        Flower Bits
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* {totalFlowers?.length > 0 && (
          <div
            style={{
              backgroundColor: "white",
              height: "40px",
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
              padding: "5px",
            }}
          >
            {totalFlowers}
          </div>
        )} */}

        <div
          style={{
            backgroundColor: "white",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10%",
            padding: "5px",
          }}
        >
          <Typography sx={{ color: "black" }} level="body1">
            {totalPrice} RON
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            marginLeft: "10px",
            height: "40px",
            position: "relative",
          }}
        >
          <Link to={"/checkout-page"}>
          <Button size="md" sx={{ fontSize: "20px" }}>
            <ion-icon name="cart"></ion-icon>
          </Button></Link>
          
          {cart?.length > 0 && (
            <div
              style={{
                position: "absolute",
                backgroundColor: "red",
                width: "25px",
                height: "25px",
                zIndex: 999,
                top: -10,
                right: -10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                paddingBottom: "2px",
              }}
            >
              <Typography sx={{ color: "white" }} level="body2">
                {cart?.length}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </Grid>
  );
};
export default Navbar;
