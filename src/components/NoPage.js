import React from "react";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/joy/Button";

const NoPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
      height="100%"
      style={{
        backgroundColor: "white	",
        width: "100vw",
        height: "100vh",
        fontWeight: "400",
      }}
    >
      <Typography
        level="h1"
        textAlign="center"
        textColor="#FAA0A0"
        sx={{ fontFamily: "Fasthand" }}
      >
        Error 404. Flowers not found.
      </Typography>
      <Link to="/">
        <Button sx={{ fontSize: "15px", marginTop: "20px" }}>Return</Button>
      </Link>
    </Grid>
  );
};
export default NoPage;
