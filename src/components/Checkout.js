import { Grid } from "@mui/joy";
import Navbar from "./Navbar";
import flowersData from "../data/flowers.json";
import CheckoutCard from "./CheckoutCard";


const Checkout = () => {
  const { flowers } = flowersData;

  return (
  <> 
  <Navbar />
  <Grid>
  <CheckoutCard/>
  </Grid>
  </>
  );
};
export default Checkout;
