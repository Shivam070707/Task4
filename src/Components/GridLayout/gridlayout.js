import { Card, Grid } from "@mui/material";
import React from "react";
import Banner from "/src/Components/Banner/Banner.js";

export default function GridLayout() {
  return (
    <div>
      <div>
        <Card>
          <h3 style={{ alignContent: "center", marginLeft: "2%" }}>
            Be Single Minded
          </h3>
        </Card>
      </div>

      <Grid lg={12} md={12} sm={12} xs={12} container direction="row">
        <Grid lg={4} md={4} sm={4} xs={4}>
          <Card style={{ margin: "5%", backgroundColor: "yellow" }}>
            <h3>Card1</h3>
            <h3>Card1</h3>
            <h3>Card1</h3>
          </Card>
        </Grid>
        <Grid lg={4} md={4} sm={4} xs={4}>
          <Card style={{ margin: "5%", backgroundColor: "blue" }}>
            <h3>Card2</h3>
            <h3>Card2</h3>
            <h3>Card2</h3>
          </Card>
        </Grid>
        <Grid lg={4} md={4} sm={4} xs={4}>
          <Card style={{ margin: "5%", backgroundColor: "red" }}>
            <h3>Card3</h3>
            <h3>Card3</h3>
            <h3>Card3</h3>
          </Card>
        </Grid>
      </Grid>

      <Grid lg={12} md={12} sm={12} xs={12} container direction="row">
        <Grid lg={8} md={8} sm={12} xs={12}>
          <Card style={{ margin: "2%", backgroundColor: "#4339f2" }}>
            <div style={{ float: "left" }}>
              {/* <h1>Image</h1>
              <h1>Image</h1>
              <h1>Image</h1> */}
              <Banner />
            </div>
            {/* <div style={{ float: "right", marginRight: "3%" }}>
            <Button size="small" sx={stylebutton}>See More</Button>
            </div> */}
          </Card>
          {/* Bottom Cards  */}
          <Grid lg={12} md={12} sm={12} xs={12} container direction="row">
            <Grid lg={3} md={3} sm={3} xs={3}></Grid>
            <Grid lg={3} md={3} sm={3} xs={3}></Grid>
            <Grid lg={3} md={3} sm={3} xs={3}></Grid>
            <Grid lg={3} md={3} sm={3} xs={3}></Grid>
          </Grid>
        </Grid>
        {/* Graph */}
        <Grid lg={4} md={4} sm={12} xs={12}>
          <Card style={{ margin: "4%" }}>
            <h1>graph</h1>
            <h1>graph</h1>
            <h1>graph</h1>
            <h1>graph</h1>
            <h1>graph</h1>
            <h1>graph</h1>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
