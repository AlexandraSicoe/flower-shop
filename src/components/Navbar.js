import { Grid } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

const Navbar = () => {
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
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          marginLeft: "25px",
          height: "40px",
        }}
      >
        <Button size="md" sx={{ fontSize: "20px" }}>
          <ion-icon name="cart"></ion-icon>
        </Button>
      </div>
    </Grid>
  );
};
export default Navbar;
