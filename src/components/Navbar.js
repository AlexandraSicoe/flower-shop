import { Grid } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

const Navbar = ({ cart }) => {
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
          gap: 2,
          flexWrap: "wrap",
          marginLeft: "25px",
          height: "40px",
          position: "relative",
        }}
      >
        <Button size="md" sx={{ fontSize: "20px" }}>
          <ion-icon name="cart"></ion-icon>
        </Button>
        {cart.length > 0 && (
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
              {cart.length}
            </Typography>
          </div>
        )}
      </div>
    </Grid>
  );
};
export default Navbar;
