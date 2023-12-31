import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";

const FlowerCard = ({ flower, cart, setCart }) => {
  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={6}
      lg={4}
      xl={3}
      justifyContent="center"
      sx={{ p: 1 }}
    >
      <Card
        component="li"
        sx={{
          width: { xs: "100%", sm: 300 },
          height: { xs: 200, sm: 400 },
          marginRight: "15px",
          marginLeft: "15px",
        }}
      >
        <CardCover>
          <img src={flower.image}></img>
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "100px",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Typography level="h6" sx={{ color: "white" }}>
                {flower.name}
              </Typography>
              <Typography level="h6" sx={{ color: "white" }}>
                {flower.price} RON
              </Typography>
            </div>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                marginLeft: "25px",
                height: "40px",
              }}
            >
              <Button
                size="sm"
                onClick={() => {
                  localStorage.setItem(
                    "cart",
                    JSON.stringify([...cart, flower])
                  );
                  setCart([...cart, flower]); // face un array nou compus din destructurarea lui cart, adica cart curent inainte sa adaugam caruia ii adauga obiectul flower on click,  the spread operator (...) is used to create a new array. It takes the current contents of the cart array and adds the flower object to the end of it.
                  console.log(...cart);
                }}
              >
                <Typography level="body3" sx={{ color: "white" }}>
                  Adauga in cos
                </Typography>
              </Button>
            </Box>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default FlowerCard;
