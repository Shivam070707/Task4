import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import banner from "/src/Components/Banner/banner.png";

// CSS of Button:
const stylebutton = {
  backgroundColor: "white",
  marginTop: "5%",
  marginLeft: "90%",
  marginBottom: "1%"
};

export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 900, maxHeight: 999, backgroundColor: "#4339f2" }}>
      <CardContent>
        <img
          style={{ width: 190, height: 190 }}
          src={banner}
          alt="cardbanner"
        />

        <Typography
          sx={{
            ml: 25,
            aligntext: "center",
            marginTop: "-20%",
            color: "white"
          }}
          variant="h4"
          component="div"
        >
          Creative Order ads
        </Typography>
        <Typography sx={{ ml: 25, color: "white" }} color="text.secondary">
          Every large Design Company weather it is multi-national branding
          cooperation or a regular down at heel tatty magzine publisher needs to
          fill the holes at the workplace.
        </Typography>

        <Button size="small" sx={stylebutton}>
          See More
        </Button>
      </CardContent>

      <CardActions></CardActions>
    </Card>
  );
}
