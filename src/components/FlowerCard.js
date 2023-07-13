import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

const FlowerCard = ({ name, image, price, index }) => {
  return (
    <Card component="li" sx={{ width: 300, height: 400 }}>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      >
        <img src={image}></img>
      </CardCover>
      <CardContent
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
          height: "100px",
          width: "250px",
        }}
      >
        {" "}
        <Typography level="h2" style={{ color: "white" }}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default FlowerCard;
